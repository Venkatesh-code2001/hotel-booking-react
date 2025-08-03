import './PropertyList.css'
import Hotel from '../../Photos/Hotels.jpg'
import Apartment from '../../Photos/Apartment.jpg'
import Resort from '../../Photos/Resort.webp'
import Villa from '../../Photos/Villa.jpg'
import Cabin from '../../Photos/Cabin.jpg'

 
const PropertyList = () => { 
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src={Hotel} alt="" className="pListImg" />
            <div className="pListTitle">
                <h1>Hotels</h1>
                <h2>700 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Apartment} alt="" className="pListImg" />
            <div className="pListTitle">
                <h1>Apartments</h1>
                <h2>1000 Apartments</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Resort} alt="" className="pListImg" />
            <div className="pListTitle">
                <h1>Resorts</h1>
                <h2>600 Resorts</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Villa} alt="" className="pListImg" />
            <div className="pListTitle">
                <h1>Villas</h1>
                <h2>800 villas</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Cabin} alt="" className="pListImg" />
            <div className="pListTitle">
                <h1>Cabins</h1>
                <h2>300 cabins</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList