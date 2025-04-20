import React, {useRef} from "react"
import "./Nav.css"
import { Link } from "react-scroll"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'


function Nav() {
    let menu = useRef()
    let mobile = useRef()
    useGSAP(() => {
        let tl = gsap.timeline()
        tl.from("nav h1", {
            x:-100,
            duration: 1,
        })
        tl.from ("nav ul li",{
            y:-100,
            duration: 1,
            stagger: 0.1,
        })

    })

    return (
        <nav>
            <h1>My Portfolio</h1>
            <ul className='desktopmenu'>
                <Link to="home" activeClass='active' spy={true} smooth={true} duration={500}><li>Home</li></Link>
                <Link to="about" activeClass='active' spy={true} smooth={true} duration={500}><li>About</li></Link>
                <Link to="projects" activeClass='active' spy={true} smooth={true} duration={500}><li>Projects</li></Link>
                <Link to="contact" activeClass='active' spy={true} smooth={true} duration={500}><li>Contact</li></Link>
            </ul>

            <div className="hamburger" ref={menu} onClick={()=>{
                mobile.current.classList.toggle("activemenu")
                menu.current.classList.toggle("activeham")
            } 
            } >
                <div className="ham"></div>
                <div className="ham"></div>
                <div className="ham"></div>
            </div>

            <ul className='mobilemenu' ref={mobile}>
                <Link to="home" activeClass='active' spy={true} smooth={true} duration={500}><li>Home</li></Link>
                <Link to="about" activeClass='active' spy={true} smooth={true} duration={500}><li>About</li></Link>
                <Link to="projects" activeClass='active' spy={true} smooth={true} duration={500}><li>Projects</li></Link>
                <Link to="contact" activeClass='active' spy={true} smooth={true} duration={500}><li>Contact</li></Link>
            </ul>
        </nav>
    )
}

export default Nav