import React, { useEffect, useState } from 'react';
import { getHotels } from '../../services/api';
import { Hotel } from '../../types';
import './FeaturedProperties.css';
import Falaknuma from '../../Photos/FalaknumaPalace.webp';
import Oberoi from '../../Photos/Oberoi.webp';
import EmpirePlatinum from '../../Photos/EmpirePlatinum.webp';
import TajMahalPalace from '../../Photos/TajMahalPalace.webp';

const FeaturedProperties: React.FC = () => {
  const [featuredHotels, setFeaturedHotels] = useState<Hotel[]>([]);

  useEffect(() => {
    getHotels({ featured: true })
      .then((data) => {
        if (data && data.length > 0) {
          setFeaturedHotels(data);
        }
      })
      .catch(() => {
        // Silent fallback
      });
  }, []);

  // Default static fallback if database is loading/empty
  const fallbackList = [
    { name: 'Taj Falaknuma Palace', city: 'Hyderabad', price: 22000, rating: 9.5, ratingText: 'Exceptional', img: Falaknuma },
    { name: 'The Oberoi Mumbai', city: 'Mumbai', price: 16500, rating: 9.4, ratingText: 'Superb', img: Oberoi },
    { name: 'The Leela Palace Delhi', city: 'Delhi', price: 15000, rating: 9.3, ratingText: 'Superb', img: EmpirePlatinum },
    { name: 'The Taj Mahal Palace', city: 'Mumbai', price: 18000, rating: 9.6, ratingText: 'Exceptional', img: TajMahalPalace },
  ];

  return (
    <div className='fp'>
      {featuredHotels.length > 0
        ? featuredHotels.slice(0, 4).map((hotel) => (
            <div className="fpItem" key={hotel.id}>
              <img src={hotel.image || Falaknuma} className='fpImg' alt={hotel.name} />
              <span className="fpName">{hotel.name}</span>
              <span className="fpCity">{hotel.city}</span>
              <span className="fpPrice">Starting from {hotel.cheapestPrice} Rs/-</span>
              <div className="fpRating">
                <button>{hotel.rating}</button>
                <span>{hotel.ratingsCount}</span>
              </div>
            </div>
          ))
        : fallbackList.map((item, idx) => (
            <div className="fpItem" key={idx}>
              <img src={item.img} className='fpImg' alt={item.name} />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from {item.price} Rs/-</span>
              <div className="fpRating">
                <button>{item.rating}</button>
                <span>{item.ratingText}</span>
              </div>
            </div>
          ))}
    </div>
  );
};

export default FeaturedProperties;
