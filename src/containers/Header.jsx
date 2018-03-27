import React from 'react'
import { Link } from 'react-static'

import menuImg from 'images/logo.png'

export default () => (
    <nav>
        <div className="logo">
        <p>IRENE RUDNYK PHOTOGRAPHY</p>
        </div>
        <div className="menu-button">
        <img alt="button" src={menuImg} />
        <div className="drop">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/social">Social</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/workshops">Workshops</Link>
            <Link to="/store">Store</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blog</Link>    
        </div>
        </div>
        <div className="link-area">  
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/social">Social</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/workshops">Workshops</Link>
        <Link to="/store">Store</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>      
        </div>
    </nav>
)