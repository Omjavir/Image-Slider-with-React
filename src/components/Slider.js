import React, { useState } from 'react'
import { Images } from './data'
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import './Slider.css'

const Slider = () => {

    const [currentImage, setCurrentImage] = useState(0)
    const length = Images.length;

    const nextSlide = () => {
        setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
    };

    const prevSlide = () => {
        setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
    };

    if (!Array.isArray(Images) || Images.length <= 0) {
        return null;
    }

    return (
        <div className='slider'>
            < AiFillLeftCircle className='left-arrow' size={50} onClick={prevSlide} />
            < AiFillRightCircle className='right-arrow' size={50} onClick={nextSlide} />
            {Images.map((img, i) => (
                <div key={i} className={i === currentImage ? 'slide active' : 'slide'}>
                    {
                        i === currentImage && (
                            <img src={img.image} className="image" alt="" key={i} />
                        )
                    }
                </div>
            )
            )}
        </div>
    )
}

export default Slider