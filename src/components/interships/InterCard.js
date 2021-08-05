import React from 'react'
import './Intercard.css'
import LocationCityIcon from '@material-ui/icons/LocationCity';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import ScheduleIcon from '@material-ui/icons/Schedule';
import HourglassFullIcon from '@material-ui/icons/HourglassFull';
function InterCard(props) {
    return (
        <div className="intercard">
            <h2>{props.data.internship} </h2>
            <h3>{props.data.company} | {props.data.sector}</h3>
            <div className="location">
                <LocationCityIcon/> 
                {props.data.location}
            </div>
            <div className="perks">
                <div className="payment">
                    <LocalAtmIcon/>
                    ₹{props.data.payment}/Month
                </div>
                <div className="Schedule">
                    <ScheduleIcon/>
                    {props.data.time}
                </div>
                <div className="lastDate">
                    <HourglassFullIcon/>
                    {props.data.date}
                </div>
            </div>
            <div className="description">
                <p>{props.data.description}</p>
            </div>
            <div className="buttonholder">
                <button type="submit" className="internbtn">Apply</button>
            </div>
        </div>
    )
}

export default InterCard
