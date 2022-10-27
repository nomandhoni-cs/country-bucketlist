import React from 'react';
import './Country.css'
const Country = (props) => {

    return (
        <div className='country-container'>
            <div className="single-country">
                <div className="country-img">
                    <img src="https://flagcdn.com/w320/mn.png" alt="" />
                </div>
                {
                        console.log(props.country)
                }
                <div className="country-name">Bangladesh</div>
                <div className="bucket-btn">+</div>
            </div>
            <div className="single-country">
                <div className="country-img">
                <img src="https://flagcdn.com/w320/bd.png" alt="" />
                </div>
                <div className="country-name">Bangladesh</div>
                <div className="bucket-btn">+</div>
            </div>
        </div>
    );
};

export default Country;