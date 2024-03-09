import React from 'react'
import './topTutors.css';

export default function TopTutors() {
    return (
        <div>
            <div className='top-tutor-container flex align-center justify-center font-bold text-xl'>
                <div className='top-tutor-gallery flex align-center justify-center'>
                    <div className='top-tutor-img-box '>
                        <h3>Spanish</h3>
                    </div>
                    <div className='top-tutor-img-box'><h3>Italian</h3></div>
                    <div className='top-tutor-img-box'><h3>German</h3></div>
                    <div className='top-tutor-img-box'><h3>French</h3></div>
                    <div className='top-tutor-img-box'><h3>Hindi</h3></div>
                </div>
            </div>
        </div>
    )
}
