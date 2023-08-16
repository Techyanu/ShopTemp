import React from 'react';
import NavBarStyle from '../Style/NavBarStyle.css'
import { AiOutlineSearch, AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag, BiShuffle } from "react-icons/bi";

const NavBar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand logo" style={{ fontSize: '30px' }} href="#">SHOP.</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item active">
            <a className="nav-link" style={{ color: 'black' }} href="#">Home </a>
          </li>
          <li className="nav-item">
            <a className="nav-link listcolor" style={{ color: 'black' }} href="#">Shop</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ color: 'black' }} href="#">Collection</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ color: 'black' }} href="#">Pages</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ color: 'black' }} href="#">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ color: 'black' }} href="#">Contact Us</a>
          </li>

        </ul>
        <ul className="navbar-nav sm-icons ic">
          <li className="nav-item"><a class="nav-link" href="#"><AiOutlineSearch size={20} color='#000' onMouseOver={({target})=>target.style.color="#8710f5;"} /></a></li>
          <li className="nav-item"><a class="nav-link" href="#">< AiOutlineUser size={20} color='#000' /></a></li>
          <li className="nav-item"><a class="nav-link" href="#">< BiShuffle size={20} color='#000' /></a></li>
          <li className="nav-item"><a class="nav-link" href="#"><AiOutlineHeart size={20} color='#000' /></a></li>
          <li className="nav-item"><a class="nav-link" href="#"><BiShoppingBag size={20} color='#000' /></a></li>
        </ul>
      </div>
    </nav>


  )
}

export default NavBar;