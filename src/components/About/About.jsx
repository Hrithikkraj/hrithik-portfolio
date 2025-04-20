import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import dev from "../../assets/web-dev.png"
import algo from "../../assets/algorithms.png"
import design from "../../assets/design.png"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function About() {
    useGSAP(()=>{
        gsap.from(".circle",{
            x:-100,
            duration: 1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".circle",
                scroll: "body",
                scrub:2,
                start:"top70%",
                end:"top 30%",
            }
        })

        gsap.from(".line",{
            x:-100,
            duration: 1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".line",
                scroll: "body",
                scrub:2,
                start:"top70%",
                end:"top 30%",
            }
        })

        gsap.from(".aboutdetails h1",{
            x:-100,
            duration: 1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".aboutdetails h1",
                scroll: "body",
                scrub:2,
                start:"top 70%",
                end:"top 30%",
            }
        })

        gsap.from(".aboutdetails ul",{
            x:-100,
            duration: 1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".aboutdetails ul",
                scroll: "body",
                scrub:2,
                start:"top70%",
                end:"top 30%",
            }
        })

        gsap.from(".rightabout",{
            x:100,
            duration: 1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".rightabout",
                scroll: "body",
                scrub:2,
                start:"top70%",
                end:"top 30%",
            }
        })
    })

  return (
    <div id="about">
        <div className="leftabout">
            <div className="circle-line">
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
            </div>

            <div className="aboutdetails">
                <div className="personalinfo">
                <h1>👤 Personal Info</h1>
                    <ul>
                        <li>
                            <span>Name</span> : Hrithik Raj
                        </li>
                        <li>
                            <span>Age</span> : 20
                        </li>
                        <li>
                            <span>Location</span> : New Delhi
                        </li>
                    </ul>
                </div>
            <div className="educationinfo">
                <div className="educationdetails">
                <h1>🎓 Education</h1>
                <ul>
                        <li>
                            <span>School</span> : VVDAV Public School, New Delhi
                        </li>
                        <li>
                            <span>University</span> : IIIT Delhi, New Delhi
                        </li>
                        <li>
                            <span>Degree</span> : B.Tech in C.S and Design
                        </li>
                    </ul>
                </div>
            </div>

            <div className="skillsinfo">
                <div className="skillsdetails">
                <h1>💻 Skills</h1>
                <ul>
                        <li>
                            : DSA : C++ : C : Python : Java : HTML : CSS : JavaScript : ReactJS : 
                        </li>
                        <li>
                            : Node.js : MySQL : Figma : MongoDB : Adobe : Photoshop : Illustrator :
                        </li>
                        <li>
                            : Autodesk : Fusion 360 : Codeforces : Leetcode : HackerRank :
                        </li>

                    </ul>
                </div>
            </div>

            <div className="interestinfo">
                <div className="interestdetails">
                <h1>🎨 Interest and Hobbies</h1>
                <ul>
                        <li>
                            <span>Technical</span> : Data Structures : Game DEvelopment : UI Design
                        </li>
                        <li>
                            <span>Non Technical</span> : Potrait Photography : Movie Critics : Skating
                        </li>

                    </ul>
                </div>
            </div>

            </div>
        </div>
        <div className="rightabout">
            <Card title="WEB DEVELOPEMENT" image={dev}/>
            <Card title="DATA STRUCTURE AND ALGORITHMS" image={algo}/>
            <Card title="UI/UX" image={design}/>

        </div>

    </div>
  )
}

export default About
