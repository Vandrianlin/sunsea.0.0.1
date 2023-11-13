import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="news.asp">Casas</a>
        </li>
        <li>
          <a href="contact.asp">Contactos</a>
        </li>
        <li class = "lilogin">
          <a class= "alogin" href="about.asp">Login</a>
        </li>
      </ul>
    </div>
  );
}
