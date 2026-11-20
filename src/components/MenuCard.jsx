import React from 'react'

const MenuCard = ({ icon, name, price, tag }) => {
  return (
    <li className="menu-item">
      <span className="tag">{tag}</span>
      <p className="menu-icon">{icon}</p>
      <h3>{name}</h3>
      <p className="price">{price}</p>
      <button className="btn">담기</button>
    </li>
  )
}

export default MenuCard
