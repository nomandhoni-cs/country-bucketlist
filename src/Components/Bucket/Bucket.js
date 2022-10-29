import React from 'react';
import './Bucket.css';
import bucket from '../../bucket.svg'
// Bootstrap Icon
// import { BsFillBucketFill } from "react-icons/bs";

const Bucket = (props) => {
    return (
        <div className='bucket-container'>
            <div className="bucket-headding">
            <img src={bucket} className="bucket-image" alt="" />
            <h3>Bucketlist</h3>
            </div>
            <h6>In Bucket {props.country.length}</h6>
        </div>
    );
};

export default Bucket;