import React from 'react';
import './Country.css'
const Country = (props) => {
const countries = props.countries;
return (
    <div className='country-container'>
                {
                    countries.map(country => { 
                        {
                                console.log(country)
                        }
                    return (
                        <div key={country.ccn3}><div className="single-country">
                        <div className="country-img">
                        <img src={country.flags.png} alt="" />
                        </div>
                        <div className="country-name">{country.name.official}</div>
                        <div className="bucket-btn">+</div>
                    </div></div>
                    )
                   }) 
                }
        </div>
    );
};

export default Country;