import React from 'react';
import BucketBtn from '../BucketBtn/BucketBtn';
import './Country.css'
const Country = (props) => {
const country = props.country;
// const handleAddBucketBtn = () =>{
//     console.log('Clicked');
// }
return (
    <div className="single-country">
        <div className="country-img">
            <img src={country.flags.png} alt="" />
        </div>
        <div className="country-name"><h6>{country.name.official}</h6></div>
        <BucketBtn handleAddBucketBtn = {props.handleAddBucketBtn} country = {country} />
    </div>
);
};

export default Country;