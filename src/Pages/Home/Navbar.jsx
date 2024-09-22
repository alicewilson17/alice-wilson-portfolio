import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import MySkills from "./MySkills";

function Navbar() {
    const [navActive, setNavActive] = useState(false)
    const toggleNav = () => {
        setNavActive(!navActive)
    }
    const closeMenu = () => {
        setNavActive(false)
    }
    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth <= 500) {
                closeMenu
            }
        }
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    useEffect(() => {
        if(window.innerWidth <= 1200) {
            closeMenu;
        }
    }, [])

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                <img src = "./img/alice-logo.png" alt="logo" id="alice-logo"></img>
            </div>
            <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link
                        onClick={closeMenu} activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="profile"
                        className="navbar--content link__hover-effect link__hover-effect--black"
                        >
                            Home
                            </Link>
                    </li>
                    <li>
                        <Link
                        onClick={closeMenu} activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                        to="AboutMe"
                        className="navbar--content link__hover-effect link__hover-effect--black"
                        >
                            About Me
                            </Link>
                    </li>
                    <li>
                        <Link
                        onClick={closeMenu} activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="MySkills"
                        className="navbar--content link__hover-effect link__hover-effect--black"
                        >
                            Skills
                            </Link>
                    </li>
                    <li>
                        <Link
                        onClick={closeMenu} activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="MyPortfolio"
                        className="navbar--content link__hover-effect link__hover-effect--black"
                        >
                            Projects
                            </Link>
                    </li>
                  
            <Link
            onClick={closeMenu}
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Contact"
            className="btn btn-outline-primary">Contact Me</Link>
                </ul>
            </div>
                    </nav>

    )
}

export default Navbar