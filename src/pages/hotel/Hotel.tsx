import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { getHotelById } from '../../services/api';
import { Hotel as HotelType } from '../../types';
import './Hotel.css';

const Hotel: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const hotelState = location.state || {};
  const [hotelId] = useState<string | undefined>(hotelState.id);
  const [title] = useState<string>(hotelState.title || 'Hotel Details');
  const [distance] = useState<string>(hotelState.distance || 'Central location');
  const [rating] = useState<string | number>(hotelState.rating || 9.0);
  const [price] = useState<number>(hotelState.price || 5000);
  const [destination] = useState<string>(hotelState.destination || 'Hyderabad');
  const [room] = useState<number>(hotelState.room || 1);
  const [days] = useState<number>(hotelState.days || 1);

  const [dbHotelDetails, setDbHotelDetails] = useState<HotelType | null>(null);
  const [slideNumber, setSlideNumber] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (hotelId) {
      getHotelById(hotelId)
        .then((data) => setDbHotelDetails(data))
        .catch(() => {});
    }
  }, [hotelId]);

  const photos = dbHotelDetails?.photos?.length
    ? dbHotelDetails.photos.map((src) => ({ src }))
    : [
        { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800' },
        { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800' },
        { src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800' },
        { src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800' },
        { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800' },
        { src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800' },
      ];

  const handleOpen = (i: number) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction: 'l' | 'r') => {
    let newSlideNumber: number;
    if (direction === 'l') {
      newSlideNumber = slideNumber === 0 ? photos.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === photos.length - 1 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  const handleBooking = () => {
    navigate('/hotels/hotel/bookings', {
      state: { id: hotelId, title, days, price, room, destination },
    });
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className='close'
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className='arrow'
              onClick={() => handleMove('l')}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber]?.src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className='arrow'
              onClick={() => handleMove('r')}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className='bookNow' onClick={handleBooking}>
            Reserve Now!
          </button>
          <h1 className="hotelTitle">{dbHotelDetails?.name || title}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{dbHotelDetails?.address || `${destination}, India`}</span>
          </div>
          <span className='hotelDistance'>
            {`Excellent location - ${dbHotelDetails?.distance || distance}`}
          </span>
          <span className="hotelPriceHighlight">
            {`Book a stay over ${price} Rs/- at this property and get a free airport taxi`}
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className='hotelImg'
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">{`Stay in the heart of ${destination}`}</h1>
              <p className="hotelDesc">
                {dbHotelDetails?.desc ||
                  `Located at ${distance}, offering luxurious accommodation with air conditioning, free high-speed WiFi, private dining, and prime proximity to major city landmarks.`}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a {days} Night stay!</h1>
              <span>
                {`Located in the heart of ${destination}, this property has a score of ${rating}!`}
              </span>
              <h2>
                <b>{`${price * room * days} Rs/-`} </b> ({days} Night stay)
              </h2>
              <button onClick={handleBooking}>Reserve Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
