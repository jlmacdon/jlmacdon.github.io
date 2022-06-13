import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        active: false,
        navBarActiveClass: "",
        pathname: '',
      };
    }

    componentDidMount() {
      if (typeof window !== `undefined`) {
        this.setState({ pathname: window?.location?.pathname });
      }
    }

    toggleHamburger() {
      // toggle the active boolean in the state
      this.setState(
        {
          active: !this.state.active,
        },
        // after state has been updated,
        () => {
          // set the class in state for the navbar accordingly
          this.state.active
            ? this.setState({
                navBarActiveClass: "is-active",
              })
            : this.setState({
                navBarActiveClass: "",
              });
        }
      );
    }
    
    render() {
      const pathname = this.state.pathname;
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
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                role="menuitem"
                tabIndex={0}
                onKeyPress={() => this.toggleHamburger()}
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
            <div
              id="navMenu"
              className={`navbar-menu ${this.state.navBarActiveClass}`}
            >
              <div className="navbar-start has-text-centered">
                <div className="hover-link">
                  <Link
                    className={`navbar-item navbar-item-link small-text ${pathname && pathname === '/' ? "link-active" : ""}`}
                    to="/"
                  >
                    Home
                  </Link>
                </div>
                <div className="hover-link">
                  <Link
                    className={`navbar-item navbar-item-link small-text ${pathname && pathname === '/how-it-works' ? "link-active" : ""}`}
                    to="/how-it-works"
                  >
                    How it Works
                  </Link>
                </div>
                <div className="hover-link">
                  <Link
                    className={`navbar-item navbar-item-link small-text ${pathname && pathname === '/team' ? "link-active" : ""}`}
                    to="/team"
                  >
                    Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      );
    }
}

export default Navbar;
