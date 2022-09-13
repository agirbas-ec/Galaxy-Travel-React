import React from 'react'
import './TrainingStyles.css'

import {Link} from 'react-router-dom'

 import Pod from '../assets/pod.jpg'
 import Moon from '../assets/moon.jpg'

const Training = () => {
    return (
        <div className='training'>
       <div className="left">
        <h1>Yolculuk</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, unde!</p>
         <Link to='/contact'><button className='btn '>İletişim</button></Link> 
       </div>
       <div className="right">
        <div className="img-container">
            <div className="image-stack top">
         <img src={Moon} className='img' alt='moon' />
            </div>
            <div className="image-stack bottom">
         <img src={Pod} className='img' alt='uzay' />
            </div>
        </div>
       </div>
        </div>
    )
}

export default Training
