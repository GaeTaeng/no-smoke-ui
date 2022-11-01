import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile/234">Profile</Link></li>
                {/* <li><Link to="/about/foo">About Foo</Link></li> */}
            </ul>
            <hr/>
        </div>
    );
  };

  export default Menu;