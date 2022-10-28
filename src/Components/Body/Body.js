import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Bucket from '../Bucket/Bucket';
import Country from '../Country/Country';
import Footer from '../Footer/Footer';
import Loadmore from '../Loadmore/Loadmore';
import './Body.css'
const Body = () => {
    const [countries, setCountry] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries =>{
        const firstThirtyCountries = countries.slice(0, 30);
        setCountry(firstThirtyCountries);
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
            <div className="row">
                <div className="load-more-btn col-xl-10">
                    <Loadmore></Loadmore>
                </div>
            </div>
            <div className="row">
                <footer>
                    <Footer></Footer>
                </footer>
            </div>
        </div>
    );
};

export default Body;