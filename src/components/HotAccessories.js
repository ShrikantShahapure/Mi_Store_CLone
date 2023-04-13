import React from 'react'
import HotItemCard from './HotItemCard.js';
import '../styles/HotAccessories.css'

const HotAccessories = ({ music, musicCover, smartDevice, smartDeviceCover,productReviews, productReviewsCover }) => {
    return (
        <div className='HotAccessories'>

            <div>
                <img src={musicCover || smartDeviceCover ||  productReviewsCover } alt="Cover" />

            </div>
   
            {/* ============== 2nd ============= */}
            <div>
                {music && music.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                    
                ))}
                </div>
                <div className='smartDevice'>
                {smartDevice && smartDevice.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />

                ))}
                </div>
                <div className='productReviews'>
                {productReviews && productReviews.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />

                ))}
                </div>

        </div>
    )
}

export default HotAccessories;