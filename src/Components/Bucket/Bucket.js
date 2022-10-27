import React from 'react';
import './Bucket.css';
import bucket from '../../bucket.svg'
// Bootstrap Icon
// import { BsFillBucketFill } from "react-icons/bs";

const Bucket = () => {
    return (
        <div className='bucket-container'>
            <div className="bucket-headding">
            <img src={bucket} className="bucket-image" alt="" />
            <h3>Bucketlist</h3>
            </div>
        </div>
    );
};

export default Bucket;