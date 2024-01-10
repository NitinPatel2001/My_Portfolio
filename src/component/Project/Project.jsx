import React from 'react'
import './Project.css'
import ProjectCard from '../../Utilities/ProjectCard/ProjectCard'
import PoetryDisplay from './PoetryHub.png'
import SOLCODE from './Solcode.png'

const arr = [
    {
        ProjectImage: PoetryDisplay,
        ProjectName: 'POETRYHUB',
        ProjectAbout: [
            '- Built 1 Responsive Full-Stack Social Platform, empowering global poets to share, and showcase their creative poems.',
            '- Successfully managed records of over 50+ user postings and facilitated users to contribute poetry easily through a portal.'
        ],
        PorjectLiveLink: 'https://poetry-hub.onrender.com/',
        ProjectGithubLink: 'https://github.com/NitinPatel2001/Poetry-Hub',
        ProjectTechStack: [
           'JQuery - 3.5','Bootstrap','Nodejs','ExpressJs - 4.17','MongoDB','HTML','CSS','Javascript','Mongoose'
        ]
    },
    {
        ProjectImage: SOLCODE,
        ProjectName: 'SOLCODE',
        ProjectAbout: [
            '- Designed and developed a dynamic, responsive website featuring an extensive selection of 300+ Data Structure and Algorithm questions, empowering junior programmers to bolster their confidence in C++ programming.',
            '- Delivered a user-centric platform offering 20+ structured topic questions with solutions through an intuitive, easy-to-navigate UI.'
        ],
        PorjectLiveLink: 'https://sol-code.netlify.app/',
        ProjectGithubLink: 'https://github.com/NitinPatel2001/SOL_CODE',
        ProjectTechStack: [
            'HTML','CSS','JavaScript','Bootstrap - 4.6','Jquery'
        ]
    },
]

const Project = () => {
  return (
    <div className='Project' id='Project'>
        <div className='ProjectContent'>
            <div className='ProjectTitle'>My Work</div>
            <div className='ProjectCard'>
                {arr.map((project)=>{
                    return (<ProjectCard ProjectImage={project.ProjectImage} ProjectName={project.ProjectName} AboutProject={project.ProjectAbout} TechStack={project.ProjectTechStack} LiveLink={project.PorjectLiveLink} Github={project.ProjectGithubLink}/>)
                })}
            </div>
        </div>
    </div>
  )
}

export default Project