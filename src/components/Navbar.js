import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";

const Navbar = () => {
  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img className="navbar-logo" src={logo} alt="medApprise" />
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger`}
            data-target="navMenu"
            role="menuitem"
            tabIndex={0}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu`}
        >
          <div className="navbar-start has-text-centered">
            <Link
              className="navbar-item navbar-item-link small-text"
              to="/"
            >
              Home
            </Link>
            <Link
              className="navbar-item navbar-item-link small-text"
              to="/vision"
            >
              How it Works
            </Link>
            <Link
              className="navbar-item navbar-item-link small-text"
              to="/team"
            >
              Team
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

// const Navbar = class extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       active: false,
//       navBarActiveClass: "",
//     };
//   }

//   toggleHamburger() {
//     // toggle the active boolean in the state
//     this.setState(
//       {
//         active: !this.state.active,
//       },
//       // after state has been updated,
//       () => {
//         // set the class in state for the navbar accordingly
//         this.state.active
//           ? this.setState({
//               navBarActiveClass: "is-active",
//             })
//           : this.setState({
//               navBarActiveClass: "",
//             });
//       }
//     );
//   }

//   render() {
//     return (
//       <nav
//         className="navbar is-transparent"
//         role="navigation"
//         aria-label="main-navigation"
//       >
//         <div className="container">
//           <div className="navbar-brand">
//             <Link to="/" className="navbar-item" title="Logo">
//               <img src={logo} alt="medApprise" style={{ height: "60px" }} />
//             </Link>
//             {/* Hamburger menu */}
//             <div
//               className={`navbar-burger burger ${this.state.navBarActiveClass}`}
//               data-target="navMenu"
//               role="menuitem"
//               tabIndex={0}
//               onKeyPress={() => this.toggleHamburger()}
//               onClick={() => this.toggleHamburger()}
//             >
//               <span />
//               <span />
//               <span />
//             </div>
//           </div>
//           <div
//             id="navMenu"
//             className={`navbar-menu ${this.state.navBarActiveClass}`}
//           >
//             <div className="navbar-start has-text-centered">
//               <Link
//                 className="navbar-item"
//                 to="/"
//               >
//                 Home
//               </Link>
//               <Link
//                 className="navbar-item"
//                 to="/vision"
//               >
//                 How it Works
//               </Link>
//               <Link
//                 className="navbar-item"
//                 to="/team"
//               >
//                 Team
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// };

export default Navbar;
