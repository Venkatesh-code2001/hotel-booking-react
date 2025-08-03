import './Featured.css'
import Mumbai from '../../Photos/Mumbai.jpeg'
import Hyderabad from '../../Photos/Hyderabad.jpg'
import Delhi from '../../Photos/Delhi.jpg'

const Featured = () => { 
  return (
    <div className="featured">
        <div className="featuredItem">
            <img className="featuredImg" src={Mumbai} alt="" />
            <div className="featuredTitles">
                <h1>Mumbai</h1>
                <h2>500 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImg' src={Delhi} alt=""/>
            <div className="featuredTitles">
                <h1>Delhi</h1>
                <h2>250 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImg' src={Hyderabad} alt=""/>
            <div className="featuredTitles">
                <h1>Hyderbad</h1>
                <h2>300 Properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured