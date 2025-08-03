import { useNavigate } from 'react-router-dom'
import './SearchItem.css'  

const SearchItem = ({days, room, destination, title, image, distance, rating, ratings, price}) => {

    const navigate = useNavigate();
    const handleSearch = () =>{
        navigate("/hotels/hotel", {state: {days, room, destination, title, image, distance, rating, ratings, price}})
    }

  return (
    <div className='searchItem'>
        <img src={image} className='siImg' alt="" />
        <div className="siDesc">
            <h1 className="siTitle">{title}</h1>
            <span className="siDistance">{distance}</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
                Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
                Entire studio . 1 bathroom . 21m<sup>2</sup> 1 full bed
            </span>
            <span className='siCancelOp'>Free cancellation</span>
            <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>{rating}</span>
                <button>{ratings}</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">{`${price} Rs/-`}</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton" onClick={handleSearch}>See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem