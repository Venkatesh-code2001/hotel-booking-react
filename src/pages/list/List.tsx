import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import SearchItem from '../../components/searchItem/SearchItem';
import { DateRange, Range } from 'react-date-range';
import 'react-date-range/dist/theme/default.css';
import 'react-date-range/dist/styles.css';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { getHotels } from '../../services/api';
import { Hotel } from '../../types';
import './List.css';

const List: React.FC = () => {
  const location = useLocation();

  const [destination, setDestination] = useState<string>(
    location.state?.destination || 'Hyderabad'
  );
  const [date, setDate] = useState<Range[]>(
    location.state?.date || [
      {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      },
    ]
  );
  const [openDate, setOpenDate] = useState<boolean>(false);
  const [options] = useState(
    location.state?.options || { adult: 1, children: 0, room: 1 }
  );

  const [dbHotels, setDbHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Calculate duration in days
  const startDate = date[0]?.startDate || new Date();
  const endDate = date[0]?.endDate || new Date();
  const totalDays = Math.max(
    1,
    Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1
  );

  useEffect(() => {
    setLoading(true);
    getHotels({ city: destination })
      .then((data) => {
        setDbHotels(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [destination]);

  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input
                value={destination}
                type="text"
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Enter city (e.g. Hyderabad, Delhi, Mumbai)"
              />
            </div>
            <div className="lsItem">
              <label>Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(startDate, 'dd/MM/yyyy')} to ${format(endDate, 'dd/MM/yyyy')}`}
              </span>
              {openDate && (
                <DateRange
                  locale={enUS}
                  onChange={(item: any) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className='lsOptionInput'
                    placeholder={String(options.adult)}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className='lsOptionInput'
                    placeholder={String(options.children)}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    max={7}
                    className='lsOptionInput'
                    placeholder={String(options.room)}
                  />
                </div>
              </div>
            </div>
            <button onClick={() => getHotels({ city: destination })}>Search</button>
          </div>

          <div className="listResult">
            {loading ? (
              <p>Loading hotels from database...</p>
            ) : dbHotels.length > 0 ? (
              dbHotels.map((item) => (
                <SearchItem
                  key={item.id}
                  id={item.id}
                  days={totalDays}
                  room={options.room}
                  destination={item.city}
                  title={item.name}
                  image={item.image}
                  distance={item.distance}
                  rating={item.rating}
                  ratings={item.ratingsCount}
                  price={item.cheapestPrice}
                />
              ))
            ) : (
              <h3 className='noHotel'>
                {`We regret to say we do not have hotels listed in "${destination}" 😞`}
              </h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
