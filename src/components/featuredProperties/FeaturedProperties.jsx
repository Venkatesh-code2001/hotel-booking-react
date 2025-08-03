import './FeaturedProperties.css'
import Falaknuma from '../../Photos/FalaknumaPalace.webp'
import Oberoi from '../../Photos/Oberoi.webp'
import EmpirePlatinum from '../../Photos/EmpirePlatinum.webp'
import TajMahalPalace from '../../Photos/TajMahalPalace.webp'

const FeaturedProperties = () => {
  return (
    <div className='fp'>
        <div className="fpItem">
            <img src={Falaknuma} className='fpImg' alt="" />
            <span className="fpName">Taj Falaknuma Palace</span>
            <span className="fpCity">Hyderabad</span>
            <span className="fpPrice">Starting from 10000 Rs/-</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span> 
            </div>
        </div>
        <div className="fpItem">
            <img src={Oberoi} className='fpImg' alt="" />
            <span className="fpName">The Oberoi Mumbai</span>
            <span className="fpCity">Mumbai</span>
            <span className="fpPrice">Starting from 9000 Rs/-</span>
            <div className="fpRating">
                <button>8.5</button>
                <span>Superb</span>
            </div>
        </div>
        <div className="fpItem">
            <img src={EmpirePlatinum} className='fpImg' alt="" />
            <span className="fpName">Empire Platinum Suites</span>
            <span className="fpCity">Delhi</span>
            <span className="fpPrice">Starting from 8000 Rs/-</span>
            <div className="fpRating">
                <button>8.4</button>
                <span>Superb</span>
            </div>
        </div>
        <div className="fpItem">
            <img src={TajMahalPalace} className='fpImg' alt="" />
            <span className="fpName">The Taj Mahal Palace</span>
            <span className="fpCity">Mumbai</span>
            <span className="fpPrice">Starting from 15000 Rs/-</span>
            <div className="fpRating">
                <button>9.0</button>
                <span>Excellent</span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProperties