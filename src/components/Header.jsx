import React from 'react'

const Header = ({ logo }) => {
  const menus = ['소개', '메뉴', '오시는 길']
  return (
    <header>
      <h1 className='logo'>{logo}</h1>
      <ul className="nav">
        {menus.map((menu) => (
          <li>
            <a href="#">{menu}</a>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
