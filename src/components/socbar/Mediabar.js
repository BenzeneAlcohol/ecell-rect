import React from 'react'
import './Mediabar.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

function Mediabar() {
    return (
        <div className="Scontainer">
            <h3 className="Title">@ECellNITK</h3>
            <div className="Icons">
                <a href="https://www.youtube.com/channel/UC2q18pRs7UwoLmmJMRTT-dQ" target = "_blank" rel="noreferrer" className="youtube social"><YouTubeIcon fontSize="large"/></a>
                <a href="https://www.facebook.com/NitkEcell/" target = "_blank" rel="noreferrer" className="facebook social"><FacebookIcon fontSize="large"/></a>
                <a href="https://www.twitter.com/ecell_nitk" target = "_blank" rel="noreferrer" className="twitter social"><TwitterIcon fontSize="large"/></a>
                <a href="https://www.instagram.com/ecell_nitk/" target = "_blank" rel="noreferrer" className="instagram social"><InstagramIcon fontSize="large"/></a>
            </div>
        </div>
    )
}

export default Mediabar
