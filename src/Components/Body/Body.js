import React from 'react';
import Bucket from '../Bucket/Bucket';
import Country from '../Country/Country';
import './Body.css'
const Body = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-xl-8">
                    <div className="country-area">
                        <Country></Country>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="bucket-area">
                    <Bucket></Bucket>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;