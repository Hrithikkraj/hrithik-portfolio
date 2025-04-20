import React from 'react'
import Card from '../Card/Card'
import figma from "../../assets/figma.png"
import assembler from "../../assets/assembler.png"
import game from "../../assets/game.png"
import database from "../../assets/database.png"
import fusion from "../../assets/fusion.png"
import "./Projects.css"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

function Projects() {
    useGSAP(()=>{
        gsap.from("#para",{
            y:-100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:"#para",
                scroll: "body",
                scrub:2,
                start:"top70%",
                end:"top 30%",
            }
        })
    })

    useGSAP(()=>{
        gsap.from(".slider",{
            x:-100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".slider",
                scroll: "body",
                scrub:2,
                start:"top70%",
                end:"top 30%",
            }
        })
    })



  return (
  <div id="projects">
    <h1 id="para"> PROJECTS</h1>
        <div className="slider">
            <Card title="Figma UI Design" image={figma}/>
            <Card title="RISC V Assemble & Simulator" image={assembler}/>
            <Card title="Angry Bird Game Implementation" image={game}/>
            <Card title="Disaster System @Postgre MySQL" image={database}/>
            <Card title= "Lamp 3D Modeling @Fusion" image={fusion}/>

        </div>
  </div>
  )
}

export default Projects
