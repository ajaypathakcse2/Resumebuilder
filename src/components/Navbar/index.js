import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
    return (
        <div className="navBar" style={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'rgb(12, 230, 164)',
            color: 'rgb(5, 63, 46)',
            padding: '10px 50px 10px 20px',
            alignItems: 'center'
        }}>
            <p>E-Resume Maker</p>
            <Link to="/about-us">
                <div style={{}}>
                    <Button name="About Us" style={{padding:15}} />
                </div>
            </Link>
        </div>
    )
}