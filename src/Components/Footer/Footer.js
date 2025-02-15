import React from 'react'
import { Tooltip } from '@material-ui/core'
import Zoom from '@material-ui/core/Zoom';
import GitHubIcon from '@material-ui/icons/GitHub';

import './Footer.css'
import footer from '../../media/footer.svg'

function Footer() {
    return (
        <div className="footer">
            <div className="footer_container">
                <div className="footer_left">
                <p>
                    <b>HandWritting</b> is a project made with React JS 
                    For any suggestions or bug reports, visit 
                    <a href='https://github.com/Raunak06r/HandWritting' target="_blank" rel="noopener noreferrer">
                        <Tooltip title="Visit Github Repo" placement="bottom" TransitionComponent={Zoom}>
                            <GitHubIcon />
                        </Tooltip> 
                    </a>
                    repo and raise an issue. And yes, you can also thank me for making your life easier by 
                    giving a ⭐ for the HandWritting repository. <br /><br />
                    Thanks for dropping by! <br /><br /><br /><br />
                </p>
                </div>
                <div className="footer_right">
                    <img src={footer} alt="img" />
                </div>
            </div>

            <div className="footer_hrt">
                <h3>Developed by <span role="img" aria-label="necro"></span>  <a href='https://github.com/Raunak06r' target="_blank" rel="noopener noreferrer">Raunak Singh</a></h3>
            </div>
            

        </div>
    )
}

export default Footer
