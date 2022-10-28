import React from 'react';
import './Country.css'
const Country = (props) => {
const countries = props.countries;
return (
    <div className='country-container'>
                {
                    countries.map(country => { 
                        {
                                // console.log(country)
                        }
                    return (
                    <div key={country.ccn3}>
                        <div className="single-country">
                            <div className="country-img">
                            <img src={country.flags.png} alt="" />
                            </div>
                            <div className="country-name"><h6>{country.name.official}</h6></div>
                            <div className="bucket-btn">
                                <button className="btn"><svg width="20" height="20" class="utUL6" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><desc lang="en">A plus sign</desc><path d="M14 3h4v26h-4zM29 14v4h-26v-4z"></path></svg></button>
                            </div>
                        </div>
                    </div>
                    )
                   }) 
                }
        </div>
    );
};

export default Country;