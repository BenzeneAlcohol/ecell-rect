import React from 'react'
import './Info.css';
import ComputerIcon from '@material-ui/icons/Computer';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import GestureIcon from '@material-ui/icons/Gesture';

function Info() {
    return (
        <div className="info">
            <div className="elements">
                <h2>Explore interships by Category</h2>
                <p>Get the most exciting internships from all across India, brought to you by E-Cell NITK!</p>
                <div className="intershipContainer">
                    <div className="itemContainer">
                        <div className="item">
                            <ComputerIcon/>
                            <p className="heading">Full Stack developer</p>
                            <p className="vacancies">51 positions vacant</p> 
                        </div>
                        <div className="item">
                            <AssignmentIcon/>
                            <p className="heading">Content Writer</p>
                            <p className="vacancies">22 positions vacant</p> 
                        </div>
                    </div>
                </div>
                <div className="intershipContainer">
                    <div className="itemContainer">
                        <div className="item">
                            <AccountBalanceIcon/>
                            <p className="heading">Technical Analyst</p>
                            <p className="vacancies">9 positions vacant</p> 
                        </div>
                        <div className="item">
                            <GestureIcon/>
                            <p className="heading">Artist</p>
                            <p className="vacancies">19 positions vacant</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
