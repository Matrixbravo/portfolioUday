import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assests/img/logo.svg';
import navIcon1 from '../assests/img/nav-icon1.svg';
import navIcon2 from '../assests/img/nav-icon2.svg';
import navIcon3 from '../assests/img/nav-icon3.svg';
import navIcon4 from '../assests/img/nav-icon4.svg';


export const NavBar = () => {
    const { activeLink, setActiveLink } = useState('home');
    const { scrolled, setScrolled } = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scroll > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <>
            <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#link" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a 
                                    href="https://www.linkedin.com/in/uday-singh-4194a8137?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8tqaNqwvQ7ixS3tPUWLcwA%3D%3D"
                                    target="_blank"
                                >
                                    <img src={navIcon1} alt="" />
                                </a>
                                <a href="#"><img src={navIcon2} alt="" /></a>
                                <a href="#"><img src={navIcon3} alt="" /></a>
                                <a 
                                    href="https://github.com/Matrixbravo"
                                    target="_blank"
                                >
                                    <img src={navIcon4} alt="" />
                                </a>
                            </div>
                            <button className="vvd" onClick={() => console.log('connect')}><span>Let's connect</span></button>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
