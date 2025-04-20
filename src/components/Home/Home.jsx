import React from 'react'
import "./Home.css"
import me from "../../assets/me.png"
import camera from "../../assets/camera.png"
import hand1 from "../../assets/hand1.png"
import hand2 from "../../assets/hand2.png"
import pen from "../../assets/pen.png"
import headphones from "../../assets/headphones.png"
import compass from "../../assets/compass.png"
import design1 from "../../assets/design1.png"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'

function Home() {
    
    useGSAP(() => {
        let tl = gsap.timeline()
        tl.from(".line1",{
            x:-100,
            duration: 1,
            opacity:0,
        })
        tl.from(".line2",{
            x:-100,
            duration: 1,
            opacity:0,
        })
        tl.from(".line3",{
            x:-100,
            duration: 1,
            opacity:0,
        })
        gsap.from(".righthome img",{
            x:100,
            duration: 1,
            opacity:0
        })

        gsap.from('.camera-sticker', {
            scale: 0,
            rotation: 360,
            duration: 1,
            ease: 'bounce.out',
        });

        gsap.from('.sticker1', {
            x: -100,
            opacity: 0,
            duration: 1,
            delay: 0.5,
            ease: 'power2.out',
        });

        gsap.from('.sticker2', {
            y: 100,
            opacity: 0,
            duration: 1,
            delay: 1,
            ease: 'power2.out',
        });

        gsap.from('.sticker3', {
            x: 100,
            opacity: 0,
            duration: 1,
            delay: 1.5,
            ease: 'power2.out',
        });

        gsap.from('.sticker4', {
            y: -100,
            opacity: 0,
            duration: 1,
            delay: 2,
            ease: 'power2.out',
        });

        gsap.from('.sticker5', {
            x: -100,
            opacity: 0,
            duration: 1,
            delay: 2.5,
            ease: 'power2.out',
        });

        gsap.from('.sticker6', {
            y: 100,
            opacity: 0,
            duration: 1,
            delay: 3,
            ease: 'power2.out',
        });


    })

    return (
        <div id="home">
            <div className="lefthome">
                <div className="homedetails">
                    <div className="line1">Hey There!</div>
                    <div className="line2">Coders</div>
                    <div className="line3">
                        I'm Hrithik a Computer Science graduate who’s all about building cool,<br/>
                        useful, and meaningful things with code. I love solving problems, <br />
                        learning new tech,and turning ideas into working projects. <br />
                        Whether it's front-end magic, back-end logic,or exploring the <br />
                        world of AI, I'm here for it. </div>
                    <div className="button-container">
                    <button>join me</button>
                    </div>
                </div>
            </div>
            <div className="righthome">
                <img src={me} alt="Myself" />
            </div>
            <div className="camera-sticker">
                <img src={camera} alt="arrow"/>
            </div>
            <div className="sticker sticker1">
                <img src={hand1} alt="" />
            </div>
            <div className="sticker sticker2">
                <img src={hand2} alt="" />
            </div>
            <div className="sticker sticker3">
                <img src={pen} alt="" />
            </div>
            <div className="sticker sticker4">
                <img src={headphones} alt="" />
            </div>
            <div className="sticker sticker5">
                <img src={compass} alt="" />
            </div>
            <div className="sticker sticker6">
                <img src={design1} alt="" />
            </div>
        </div>
    )
}

export default Home
