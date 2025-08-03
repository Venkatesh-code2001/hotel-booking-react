import './Header.css' 
import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faBed, faCar, faPerson, faPlane } from '@fortawesome/free-solid-svg-icons'

import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // date range - main css file
import 'react-date-range/dist/theme/default.css'; // date range - theme css file
import {format} from 'date-fns'
import { enUS } from 'date-fns/locale';

const Header = ({type}) => {

    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    const [destination, setDestination] = useState("")
    const [options, setOptions] = useState({
          adult: 1,
          children: 0,
          room: 1
        })

    const [openOptions, setOpenOptions] = useState(false);
    const [openDate, setOpenDate] = useState(false);

    const handleOption = (name, operation) =>{
        setOptions((prev)=>{
            return{
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1
            }
        })
    }
    const [listActive, setListActive] = useState('fabed')

    //To navigate to hotels page
    const navigate = useNavigate();
    const handleSearch = () =>{
        navigate("/hotels", {state: {destination, date, options}})
    }

  return (
    <div className='header'>
     <div className={type === "list" ? "headerContainer listMode" : "headerContainer" }>
        <div className="headerList">
            <div className={listActive === 'fabed' ? "headerListItem active": "headerListItem"} onClick={()=>setListActive('fabed')}>
                <FontAwesomeIcon icon={faBed} />
                <span>Stay</span>
            </div>
            <div className={listActive === 'facar' ? "headerListItem active": "headerListItem"} onClick={()=>setListActive('facar')}>
                <FontAwesomeIcon icon={faCar} />
                <span>Rental Car</span>
            </div>
            <div className={listActive === 'faplane' ? "headerListItem active": "headerListItem"} onClick={()=>setListActive('faplane')}>
                <FontAwesomeIcon icon={faPlane} />
                <span>Flight</span>
            </div>
        </div>
        { type !== "list" && 
        <>
        <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
        <p className="headerDesc">
            Get rewarded for your travels - Unlock instant savings of 10% or more with a free HotelBooking account
        </p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className='headerIcon'/>
                <input type="text" placeholder='Where are you going?' onChange={e=>setDestination(e.target.value)} className='headerSearchInput'/>
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendar} className='headerIcon' />
                <span className='headerSearchText' onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                {openDate && <DateRange
                    locale={enUS}   //Added this since code was throwing error 
                    onChange={item => setDate([item.selection])}
                    minDate={new Date()} //To restrict selecting old dates
                    ranges={date}
                    className="date"
                    // moveRangeOnFirstSelection={false}
                    // editableDateInputs={true}
                />}
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                <span className='headerSearchText' onClick={()=>setOpenOptions(!openOptions)}>{`${options.adult} Adults . ${options.children} Children . ${options.room} Room`}</span>
                {
                    openOptions && <div className="options">
                    <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionsCounter">
                            <button className="optionCounterButton" onClick={()=>handleOption("adult", "d")} disabled= {options.adult <= 1}>-</button>
                            <span>{ options.adult }</span>
                            <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionsCounter">
                            <button className="optionCounterButton" onClick={()=>handleOption("children", "d")} disabled= {options.children <= 0}>-</button>
                            <span>{ options.children }</span>
                            <button className="optionCounterButton" onClick={()=>handleOption("children", "i")}>+</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionsCounter">
                            <button className="optionCounterButton" onClick={()=>handleOption("room", "d")} disabled={options.room <= 1}>-</button>
                            <span>{ options.room }</span>
                            <button className="optionCounterButton" onClick={()=>handleOption("room", "i")} disabled={options.room >= 7}>+</button>
                        </div>
                    </div>
                </div>
                }
            </div>
            <div className="headerSearchItem">
                <button className="headerSearchBtn" onClick={handleSearch}>Search</button>
            </div>
        </div>
        </>
        }
     </div>
    </div>
  )
}

export default Header