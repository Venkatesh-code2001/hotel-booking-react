import { useLocation } from 'react-router-dom'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import './Booking.css'
import {useState} from 'react' 

const Booking = () => {
  const location = useLocation();
  const [room, setRoom] = useState(location.state.room)
  const [price, setPrice] = useState(location.state.price)
  const [days, setDays] = useState(location.state.days)
  const title = location.state.title;

  const [show, setShow] = useState(false)

  const [boxes, setBoxes] = useState([false, false, false, false, false, false, false])

  const [warning, setWarning] = useState("")

  const total = price * room * days;

  const handlefun = (index) =>{
    const selectedCount = boxes.filter((item)=> item).length;
    if(boxes[index]){
      const newBox = [...boxes]
      newBox[index] = false;
      setBoxes(newBox)
      setWarning("")
    }else if (selectedCount < room){
      const newBox = [...boxes]
      newBox[index] = true;
      setBoxes(newBox)
    }else{
      setWarning("You are allowed to choose only")
    }
  }

  const handlePayment = () =>{
    const selectedCount = boxes.filter((item)=> item).length;
    if (selectedCount < room){
      setWarning("You need to choose")
    }else{
      setShow(true)
      setWarning("")
    }

  }
    
  return (
    <>
      <Navbar />
      <Header type="list" />

      <div className='booking'>
          <div className="container">
          {
            boxes.map((item, index)=>(
              <div className='rooms' onClick={()=>handlefun(index)} key={index} style={{backgroundColor: item ? "gray": "white"}}>
                {`A${index+1}`}
              </div>
            ))
          }
          </div>
          {
              show ?
              <div className='paymentSection'>
                <h1>Review</h1>
                <p>Hotel: <b>{`${title}`}</b></p>
                <p>{`Total Rooms: ${room}`}</p>
                <p>{`No. of days: ${days}`}</p>
                <p>Total Amount: <b>{`${total} Rs/-`}</b></p>
                <button className='btn'>Pay Now</button>
              </div>
              : <button className='btn' onClick={handlePayment}>Calculate Price</button>
          }
          {
            warning && <p className='warning'> {`${warning} ${room} rooms`}</p>
          }
      </div>

    </>
  )
}

export default Booking