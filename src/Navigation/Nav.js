import {FiHeart} from "react-icons/fi";
import {AiPOoutlineShoppingCart, AiOutlineUserAdd, AiOutlineShoppingCart} from "react-icons/ai";

import "./Nav.css";

export default function Nav() {
  return (
  <nav>
    <div className="nav-condtainer">
      <input 
      type="text"
      className="search-input"
      placeholder="Enter your search shoes."
      />
    </div>

    <div className="profile-container">
      <a href="#">
        <FiHeart className="nav-icons"/>
      </a>
      <a href="#">
        <AiOutlineShoppingCart className="nav-icons" />
      </a>

      <a href="#">
        <AiOutlineUserAdd className="nav-icons"/>
      </a>
    </div>


  </nav>
    
  )
}
