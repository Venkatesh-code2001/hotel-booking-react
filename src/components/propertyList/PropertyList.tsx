import React from 'react';
import './PropertyList.css';
import Hotel from '../../Photos/Hotels.jpg';
import Apartment from '../../Photos/Apartment.jpg';
import Resort from '../../Photos/Resort.webp';
import Villa from '../../Photos/Villa.jpg';
import Cabin from '../../Photos/Cabin.jpg';

const PropertyList: React.FC = () => {
  return (
    <div className='pList'>
      <div className="pListItem">
        <img src={Hotel} alt="Hotels" className="pListImg" />
        <div className="pListTitle">
          <h1>Hotels</h1>
          <h2>700 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={Apartment} alt="Apartments" className="pListImg" />
        <div className="pListTitle">
          <h1>Apartments</h1>
          <h2>1000 Apartments</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={Resort} alt="Resorts" className="pListImg" />
        <div className="pListTitle">
          <h1>Resorts</h1>
          <h2>600 Resorts</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={Villa} alt="Villas" className="pListImg" />
        <div className="pListTitle">
          <h1>Villas</h1>
          <h2>800 villas</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={Cabin} alt="Cabins" className="pListImg" />
        <div className="pListTitle">
          <h1>Cabins</h1>
          <h2>300 cabins</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
