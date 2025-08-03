import './Footer.css'

const Footer = () => { 
  return (
    <div className='footer'>
        <div className="fLists">
            <ul className="fList">
                <li className="fListItem">Countries</li>
                <li className="fListItem">Regions</li>
                <li className="fListItem">Cities</li>
                <li className="fListItem">Districts</li>
            </ul>
            <ul className="fList"> 
                <li className="fListItem">Homes</li>
                <li className="fListItem">Apartments</li>
                <li className="fListItem">Resorts</li>
                <li className="fListItem">Villas</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Customer Service Help</li>
                <li className="fListItem">Terms & Services</li>
                <li className="fListItem">About HotelBooking.com</li>
            </ul>
        </div>
        <div className="fText">Copyright &copy; 2024 HotelBooking.</div>
    </div>
  )
}

export default Footer