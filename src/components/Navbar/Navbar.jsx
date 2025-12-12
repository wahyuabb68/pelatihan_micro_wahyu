import React, { useState } from "react"
import { ShoppingCart, User, Menu, X, Search } from "lucide-react"
import "./style.css"
import { NavLink, useNavigate } from "react-router"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [keyword, setKeyword] = useState("")   // <-- NEW
  const navigate = useNavigate()              // <-- NEW

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuMenuOpen)
  }

  // ketika tekan Enter
  const handleSearchKey = (e) => {
    if (e.key === "Enter") {
      navigate(`/?search=${keyword}`)
    }
  }

  return (
    <nav className='navbar'>
      <NavLink to='/' className='navbar-logo'>
        Tokopawahyu
      </NavLink>

      <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <NavLink to='/'>Beranda</NavLink>
        </li>
        <li>
          <NavLink to='/add-product'>Tambah Produk</NavLink>
        </li>
        <li>
          <a href='#categories'>Kategori</a>
        </li>
      </ul>

      <div className='nav-actions'>
        <div className='search-box'>
          <Search size={18} color='#666' />
          <input
            type='text'
            placeholder='Cari produk...'
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={handleSearchKey}
          />
        </div>

        <button className='icon-btn'>
          <ShoppingCart size={24} />
          <span className='cart-badge'>3</span>
        </button>

        <button className='icon-btn'>
          <User size={24} />
        </button>

        <button className='menu-toggle' onClick={toggleMenu}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
