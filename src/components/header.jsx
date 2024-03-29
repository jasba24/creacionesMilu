// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react'

import shoppingCart from '../assets/shoppingCart.png'
import menu from '../assets/menu.png'
import logo from '../assets/logo.png'
import './styles/header.css'
import Menu from './menu'
import { Link } from 'react-router-dom'

function Header() {
  const [showForm, setShowForm] = useState(false)

  localStorage.clear()

  const counter = useRef(localStorage.length)

  return (
    <header>
      <Link to={'/'} className="start">
        <img className="logo-icon" src={logo} alt="" />
      </Link>
      <h1>
        Marroquineria en <br /> cuero de alta calidad
      </h1>
      <nav>
        <img
          onClick={() => setShowForm(!showForm)}
          className="store-icon icon"
          src={menu}
          alt="logo de tienda"
        />
        <Link to={'/products'}>
          <img
            className="shoe-icon icon"
            src={shoppingCart}
            alt="logo mercancia"
          />
          <p className="text-icon">{counter.current}</p>
        </Link>
      </nav>
      {showForm && <Menu></Menu>}
    </header>
  )
}

export default Header
