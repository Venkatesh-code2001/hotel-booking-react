import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faStar, faTaxi, faCheck } from '@fortawesome/free-solid-svg-icons';
import './SearchItem.css';

interface SearchItemProps {
  id?: string;
  days: number;
  room: number;
  destination: string;
  title: string;
  image: string;
  distance: string;
  rating: string | number;
  ratings: string | number;
  price: number;
}

const SearchItem: React.FC<SearchItemProps> = ({
  id,
  days,
  room,
  destination,
  title,
  image,
  distance,
  rating,
  ratings,
  price,
}) => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/hotels/hotel', {
      state: { id, days, room, destination, title, image, distance, rating, ratings, price },
    });
  };

  return (
    <div className='searchItem'>
      <div className="siImgWrapper">
        <img src={image} className='siImg' alt={title} />
        <div className="siBadge">Luxury Preferred</div>
      </div>
      <div className="siDesc">
        <h1 className="siTitle">{title}</h1>
        <div className="siDistance">
          <FontAwesomeIcon icon={faLocationDot} className="siDistanceIcon" />
          <span>{distance}</span>
        </div>
        <div className="siTaxiOp">
          <FontAwesomeIcon icon={faTaxi} />
          <span>Free Airport Shuttle</span>
        </div>
        <span className="siSubtitle">Executive Suite with Air Conditioning</span>
        <span className="siFeatures">King Bed • Marble Bathroom • Lake/City View</span>
        <div className="siCancelOp">
          <FontAwesomeIcon icon={faCheck} />
          <span>Free Cancellation • Pay at Hotel</span>
        </div>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <div className="siRatingText">
            <span className="siRatingWord">{typeof ratings === 'string' ? ratings : 'Exceptional'}</span>
            <span className="siRatingSub">Guest Favourite</span>
          </div>
          <div className="siRatingBadge">
            <FontAwesomeIcon icon={faStar} className="starIcon" />
            <span>{rating}</span>
          </div>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">{`₹${price.toLocaleString()}`}</span>
          <span className="siTaxOp">Includes taxes & fees • {days} {days === 1 ? 'night' : 'nights'}</span>
          <button className="siCheckButton" onClick={handleSearch}>
            See Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
