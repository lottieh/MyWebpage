import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'


class Footer extends React.Component {
    
    render() {
        return (
           <div className ="Footer">

            <h6> © Charlotte House July 2020</h6>
            <FontAwesomeIcon icon ={faCoffee}/>
            <FontAwesomeIcon icon ={faGithub}  size="3x" />
            <FontAwesomeIcon icon ={faLinkedin}  size="3x"  />


{/* // todo - Add in git hub logo and link
// Todo - Add Linkedin logo and link */}

        </div>
        )}}


    export default Footer