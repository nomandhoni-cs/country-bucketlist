import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Bucket from '../Bucket/Bucket';
import Country from '../Country/Country';
import './Body.css'
const Body = () => {
    const [countries, setCountry] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries =>{
        const firstTwentyOneCountries = countries.slice(0, 21);
        setCountry(firstTwentyOneCountries);
        // console.log(firstTwentyCountries);
        })
    }, []);


    return (
        <div className='container'>
            <div className="row">
                <div className="col-xl-10">
                    <div className="country-area">
                        <Country countries = {countries} />
                    </div>
                </div>
                <div className="col-xl-2">
                    <div className="bucket-area">
                    <Bucket></Bucket>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;