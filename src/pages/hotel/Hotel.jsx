import './Hotel.css'
import '../../components/navbar/Navbar'
import '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faLocationDot, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { hyderabadIndiData } from '../../Data/hyderabadIndiData'
import { delhiIndiData } from '../../Data/delhiIndiData'
import { mumbaiIndiData } from '../../Data/mumbaiIndiData' 
  
const Hotel = () => {

  const location = useLocation()

  const [title, setTitle] = useState(location.state.title);
  const [distance, setDistance] = useState(location.state.distance);
  const [rating, setRating] = useState(location.state.rating);
  const [ratings, setRatings] = useState(location.state.ratings);
  const [price, setPrice] = useState(location.state.price);
  const [destination, setDestination] = useState(location.state.destination)
  const [room, setRoom] = useState(location.state.room)
  const [days, setDays] = useState(location.state.days)

  let indiPhotos = {}

  if(destination === "Hyderabad"){
    indiPhotos = hyderabadIndiData.find((item)=>item.title === title)
  }else if(destination === "Delhi"){
    indiPhotos = delhiIndiData.find((item)=>item.title === title)
  }else {
    indiPhotos = mumbaiIndiData.find((item)=>item.title === title)
  }

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)

  const photos = [
    {
      src : indiPhotos.img1
    },
    {
      src : indiPhotos.img2
    }, 
    {
      src : indiPhotos.img3
    },
    {
      src : indiPhotos.img4
    },
    {
      src : indiPhotos.img5
    },
    {
      src : indiPhotos.img6
    }
  ]

  const handleOpen = (i) =>{
    setSlideNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) =>{
    let newSlideNumber;
    if (direction === 'l'){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
    }
    else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
    }

    setSlideNumber(newSlideNumber)
  }
  
  const navigate = useNavigate();
  const handleBooking = () =>{
    navigate("/hotels/hotel/bookings", {state: {title, days, price, room, destination}})
  }

  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="hotelContainer">
        {
          open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove('l')}/>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove('r')}/>
          </div>
        }
        <div className="hotelWrapper">
          <button className='bookNow' onClick={handleBooking}>Reserve Now!</button>
          <h1 className="hotelTitle"> {title}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            {
              destination === "Hyderabad" ? <span>{`${destination}, Telangana`}</span>
              : destination === "Mumbai" ? <span>{`${destination}, Maharastra`}</span>
              : <span>{destination}</span>
            }
          </div>
          <span className='hotelDistance'>
            {`Excellent location - ${distance}`}
          </span>
          <span className="hotelPriceHighlight">
            {`Book a stay over ${price} Rs/- at this property and get a free airport taxi`}
          </span>
          <div className="hotelImages">
            {
              photos.map((photo, i)=>(
                <div className="hotelImgWrapper">
                  <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className='hotelImg'/>
                </div>
              ))
            }
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">{`Stay in the heart of ${destination}`}</h1>
              <p className="hotelDesc">
                {`Located at ${distance}, Tower Street Apartments has accommodation with air conditioning and free WiFi. The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat-screen TV, and a private bathroom with shower and a hairdryer. A fridge is also offered, as well as an electric tea pot and a coffee machine. Popular points of interest near the apartment include cloth Hall, Main Market square and market.`}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a night stay!</h1>
              <span>
                {`Located in the real heart of ${destination}, this property has an ${rating} location score of ${ratings}!`}
              </span>
              <h2>
                <b>{`${price} Rs/-`} </b> (1 Night)
              </h2>
              <button onClick={handleBooking}>Reserve Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  ) 
}

export default Hotel