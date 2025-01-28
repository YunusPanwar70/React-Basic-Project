import './Background.css';
import React from 'react';
import video from '../../assets/video.mp4';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';

function Background({ playStatus, heroCount }) {
    if (playStatus) {
        return (
            <video className='background fadeIn' autoPlay loop muted>
                <source src={video} type="video/1mp4" />
            </video>
        );
    } else if (heroCount === 0) {
        return <img src={image1} className='background fadeIn' alt="" />;
    } else if (heroCount === 1) {
        return <img src={image2} className='background fadeIn' alt="" />;
    } else if (heroCount === 2) {
        return <img src={image3} className='background fadeIn' alt="" />;
    }
}
export default Background;