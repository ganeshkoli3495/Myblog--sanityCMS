import React from 'react'
import {BsFacebook, BsPinterest} from 'react-icons/bs'
import{AiFillTwitterCircle, AiFillYoutube, AiFillBehanceCircle} from 'react-icons/ai'
const Footer = () => {
  return (
<>
<div className='footer' style={{backgroundColor: '#212529'}}>
            <div className='col'>
                <h2>Contact the Publisher</h2>
                <ul>
                    <li>mike@runo.com</li>
                    <li>+944 450 904 505</li>
                </ul>
            </div>
            <div className='col'>
                <h2>Explorate</h2>
                <ul>
                    <li>About</li>
                    <li>Partners</li>
                    <li>Job Opportunities</li>
                    <li>Advertise</li>
                    <li>Membership</li>
                </ul>
            </div>
            <div className='col'>
                <h2>Headquarter</h2>
                <ul>
                    <li>191 Middleville Road,<br></br>
                    NY 1001, Sydney<br></br>
                    Australia</li>
                </ul>
            </div>
            <div className='col'>
                <h2>Connections</h2>
                <div className='social'>
                    <p>
                    <BsFacebook style={{fontSize: '25px'}}/>
                    </p>
                    <p>
                    <AiFillTwitterCircle style={{fontSize: '25px'}}/>
                    </p>
                    <p>
                    <AiFillYoutube style={{fontSize: '25px'}}/>
                    </p>
                    <p>
                    <BsPinterest style={{fontSize: '25px'}}/>
                    </p>
                    <p>
                    <AiFillBehanceCircle style={{fontSize: '25px'}}/>
                    </p>
                </div>
            </div>
           
    </div>
    <div className='copyright'>
                <p>2023 | Made with ❤️ Ganesh Koli</p>
            </div>
    </>
  )
}

export default Footer