import { useState, useEffect } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { navLinks } from '../assets/index'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import navLogo from '../assets/img/pienotes-logomark-w.png'

const NavbarComp = () => {
    const [changeColor, setChangeColor] = useState(false)
    const changeBackgroundColor = () => {
        if (window.scrollY > 10) {
            setChangeColor(true)
        } else {
            setChangeColor(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackgroundColor)
        return () => {
            window.removeEventListener('scroll', changeBackgroundColor)
        }
    }, [])

    return (
        <Navbar expand="lg" className={changeColor ? "nav-active" : ""}>
            <Container>
                <Navbar.Brand href="#home" className='fs-3 fw-bold'>
                    <img src={navLogo} alt="PieNote" width='36px' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        {navLinks.map((getLinkData) => (
                            <div className='nav-link' key={getLinkData.id}>
                                <Link
                                    to={getLinkData.path}
                                    spy={true}
                                    smooth={true}
                                    offset={-70} // Adjusted offset for better scroll positioning
                                    duration={500} // Adjusted duration for smoother scrolling
                                    activeClass="active" // Class to apply when the link is active
                                >
                                    {getLinkData.text}
                                </Link>
                            </div>
                        ))}
                    </Nav>
                    <div>
                        <NavLink className='btn' to='/login'>Login</NavLink>
                        <NavLink className='btn' to='/register'>Sign Up</NavLink>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComp
