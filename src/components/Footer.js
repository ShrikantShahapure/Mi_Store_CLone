import React from 'react';
import '../styles/PreFooter.css';
import '../styles/Footer.css';

const youtubeIcon = <i class="fa-brands fa-youtube"></i>
const twitterIcon = <i class="fa-brands fa-twitter"></i>
const facebookIcon = <i class="fa-brands fa-meta"></i>
const instagramIcon = <i class="fa-brands fa-instagram"></i>


const Footer = ({ footer }) => {
    return (
        <>

            <div className='PreFooter'>
                <div>
                    <p> <b>Hassle-free replacement</b> <br /><i class="fa fa-repeat" aria-hidden="true" /> 10 days replacement policy on mi.com</p>
                </div>
                <div>
                    <p> <b>100% Secure payments</b> <br /> <i class="fa fa-shield" aria-hidden="true" /> We supports CARD, WALLET, EMI & COD </p>
                </div>
                <div>
                    <p> <b> Vast Service network</b> <br /> <i class="fa fa-map-marker" aria-hidden="true" /> 1000 Service-centers across 600 cities </p>
                </div>
            </div>


            <div className='PreFooter2'>
                <div> <p> LET'S STAY IN TOUCH </p> <span> Get updates on sales specials and more</span></div>

                <div>
                    <div>
                        <input type="email" name="email" placeholder='Enter Email Address' />
                        <button> ➤ </button>
                    </div>
                    <span> Thanks. You're on our email list for special offers.</span>
                </div>
                <div>
                    <p> FOLLOW MI</p>
                    <span> We want to hear from you!</span>
                </div>
                <div>
                    {facebookIcon} {youtubeIcon} {instagramIcon} {twitterIcon}
                </div>
            </div>

            <div className='footer'>
                <div>
                    <p> SUPPORT </p>
                    {
                        footer.support.map((item, index) => (
                            <a key={item.url} href={item.url}>{item.name}</a>
                        ))
                    }
                </div>

                <div>
                    <p> SHOP AND LEARN </p>
                    {
                        footer.shopAndLearn.map((item, index) => (
                            <a key={item.url} href={item.url}>{item.name}</a>
                        ))
                    }
                </div>
                <div>
                    <p> RETAIL STORE</p>
                    {
                        footer.retailStore.map((item, index) => (
                            <a key={item.url} href={item.url}>{item.name}</a>
                        ))
                    }
                </div>
                <div>
                    <p> ABOUT </p>
                    {
                        footer.aboutUS.map((item, index) => (
                            <a key={item.url} href={item.url}>{item.name}</a>
                        ))
                    }
                </div>
                <div>
                    <p> CONTACT US </p>
                    {
                        footer.contactUs.map((item, index) => (
                            <a key={item.url} href={item.url}>{item.name}</a>
                        ))
                    }
                </div>
                <div>
                    <div>
                        Chat with our Virtual AI bot (24/7 Live Support)
                    </div>
                    <button> Chat Now </button>
                    <div></div>
                    <div className='store-app'>
                    </div>
                    <h6> scan this QR code <p> Get mi store app </p></h6>
                </div> 
            </div>
            <div className='footerBorder'>
                <div>
                    Copyright © 2010 - 2023 Xiaomi. All Rights Reserved
                </div>
            </div>

        </>
    )
}

export default Footer