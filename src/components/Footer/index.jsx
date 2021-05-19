import React from 'react'

import Line from './../Utils/Line'

import './styles.scss'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-list'>
                <p>Help and Contact</p>
                <div className="footer-line">
                </div>
                <p>Vouchers and Gift Cards</p>
                <div className="footer-line">
                </div>
                <p>About Jiggerbox</p>
                <div className="footer-line">
                </div>
                <p>Delivery</p>
                <div className="footer-line">
                </div>
                <p>Payment</p>
                <div className="footer-line">
                </div>
                <p>Our Service</p>
            </div>
            <div className='footer-section'>
                <div className='footer-links'>
                    <p>Company Information</p>
                    <p>Terms and Conditions</p>
                    <p>Data Protection</p>
                    <p>Cookies Settings</p>
                </div>
                <div className="footer-social">
                    <h4 className='footer-social-header'>Follow us at</h4>
                    <div className="socials">
                        <i className="lab la-facebook-square"></i>
                        <i className="lab la-instagram"></i>
                    </div>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer
