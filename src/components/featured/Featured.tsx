import React, { useEffect, useState } from 'react';
import { getCityCounts } from '../../services/api';
import { CityCount } from '../../types';
import Mumbai from '../../Photos/Mumbai.jpeg';
import Hyderabad from '../../Photos/Hyderabad.jpg';
import Delhi from '../../Photos/Delhi.jpg';
import './Featured.css';

const Featured: React.FC = () => {
  const [counts, setCounts] = useState<Record<string, number>>({
    Mumbai: 0,
    Delhi: 0,
    Hyderabad: 0,
  });

  useEffect(() => {
    getCityCounts(['Mumbai', 'Delhi', 'Hyderabad'])
      .then((data: CityCount[]) => {
        const map: Record<string, number> = {};
        data.forEach((item) => {
          map[item.city] = item.count;
        });
        setCounts((prev) => ({ ...prev, ...map }));
      })
      .catch(() => {
        // Fallback counts if backend API is offline
        setCounts({ Mumbai: 5, Delhi: 3, Hyderabad: 4 });
      });
  }, []);

  return (
    <div className="featured">
      <div className="featuredItem">
        <img className="featuredImg" src={Mumbai} alt="Mumbai" />
        <div className="featuredOverlay" />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
          <h2>{counts.Mumbai || 0} Luxury Stays</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img className='featuredImg' src={Delhi} alt="Delhi" />
        <div className="featuredOverlay" />
        <div className="featuredTitles">
          <h1>Delhi</h1>
          <h2>{counts.Delhi || 0} Luxury Stays</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img className='featuredImg' src={Hyderabad} alt="Hyderabad" />
        <div className="featuredOverlay" />
        <div className="featuredTitles">
          <h1>Hyderabad</h1>
          <h2>{counts.Hyderabad || 0} Luxury Stays</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
