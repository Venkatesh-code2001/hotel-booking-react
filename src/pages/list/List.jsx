import './List.css' 
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { useLocation } from 'react-router-dom'
import { useState } from 'react' 

import { DateRange } from 'react-date-range';
import 'react-date-range/dist/theme/default.css'; // date range - theme css file
import 'react-date-range/dist/styles.css'; // date range - main css file
import {format} from 'date-fns'
import { enUS } from 'date-fns/locale';

import SearchItem from '../../components/searchItem/SearchItem'
import {mumbaiData} from '../../Data/mumbaiData'
import { delhiData } from '../../Data/delhiData'
import { hyderabadData } from '../../Data/hyderabadData'
 

const List = () => {

  const location = useLocation();
  console.log(location)
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options)

  const totalDays = format(date[0].endDate, "dd") - format(date[0].startDate, "dd") + 1;
  return ( 
    <div>
      <Navbar />
      <Header type="list"/>
 
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input value={destination} type="text" onChange={e=>setDestination(e.target.value)}/>
            </div>
            <div className="lsItem">
              <label>Check-in date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              { openDate && <DateRange
               locale={enUS}
               onChange={(item)=> setDate([item.selection])}
               minDate={new Date()}
               ranges={date}
              /> }
            </div>
            <div className="lsItem">
             <label>Options</label>
             <div className="lsOptions">
              <div className="lsOptionItem">
                <span className="lsOptionText">Adult</span>
                <input type="number" min={1} className='lsOptionInput' placeholder={options.adult}/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Children</span>
                <input type="number" min={0} className='lsOptionInput' placeholder={options.children}/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Room</span>
                <input type="number" min={1} max={7} className='lsOptionInput' placeholder={options.room}/>
              </div>
             </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            {
              ["Mumbai", "Hyderabad", "Delhi"].includes(destination) ? 
              <>
                {
                  (destination === "Mumbai" ? mumbaiData : destination === "Delhi" ? delhiData : hyderabadData).map((item,i)=>(
                    <SearchItem days={totalDays} room={options.room} destination={destination} title={item.title} image={item.image} distance={item.distance} rating={item.rating[0]} ratings={item.rating[1]} price={item.price} />
                  ))
                }
              </>
              : <h3 className='noHotel'> {`We regret to say we are not dealing hotels in ${destination} 😞`} </h3>
      
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default List