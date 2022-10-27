import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Bucket from '../Bucket/Bucket';
import Country from '../Country/Country';
import './Body.css'
const Body = () => {
    const [country, setCountry] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries =>{
        const firstTwentyCountries = countries.slice(0, 20);
        setCountry(firstTwentyCountries);
        // console.log(firstTwentyCountries);
        })
    }, []);


    return (
        <div className='container'>
            <div className="row">
                <div className="col-xl-8">
                    <div className="country-area">
                        {
                            country.map(desh => {return <Country country={desh.name}></Country>})
                        }
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