import React from 'react'
import con1 from "../../assets/contact-1.png"
import con2 from "../../assets/contact-2.png"
import con3 from "../../assets/contact-3.png"
import "./Contact.css"

import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Contact() {
    useGSAP(()=>{
        gsap.from(".leftcontact img",{
            x:-100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".leftcontact img",
                scroll: "body",
                scrub:2,
                start:"top70%",
                end:"top 30%",
            }
        })
    })

    useGSAP(()=>{
        gsap.from(".rightcontact",{
            x:1000,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".rightcontact",
                scroll: "body",
                scrub:2,
                start:"top70%",
                end:"top 30%",
            }
        })
    })


  return (
    <div id="contact"> 
      <div className="leftcontact">
        <img src={con1} alt=""/>
        <img src={con2} alt=""/>
        <img src={con3} alt=""/>
      </div>
      <div className="rightcontact">
        <form action="https://formspree.io/f/xzzelkby" method='POST'>
            <input name="username" type="text" placeholder='Name' />
            <input name='Email' type="email" placeholder='Email' />
            <textarea name="message" id="textarea" placeholder='message me'></textarea>
            <input type="submit" id="btn" value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default Contact
