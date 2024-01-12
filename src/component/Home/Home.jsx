import React from 'react'
import './Home.css'
import LinkButton from '../../Utilities/LinkButton/LinkButton'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';

const Home = () => {
  return (
    <header className='Home'>
        <div className='HomeContent'>
            <h4>Hey, I'm</h4>
            <h1 className='NameHome'>NITIN PATEL</h1>
            <p className='contentHome'>Dynamic Computer Engineering graduate from Delhi Technological University with a robust background in software development and technical content creation. Adept at leveraging cutting-edge technologies to drive innovative solutions, coupled with a proven track record in hackathons and project leadership</p>
            <div className='Links'>
                <LinkButton Icon={EmailIcon} Content='Email' Color='#9358F7' Link='mailto:np68175@gmail.com'/>
                <LinkButton Icon={LinkedInIcon} Content='LinkedIn' Color='#6964DE' Link='https://www.linkedin.com/in/nitin-patel-76282218a/'/>
                <LinkButton Icon={GitHubIcon} Content='Github' Color='#F4426C' Link='https://github.com/NitinPatel2001'/>
                <LinkButton Icon={CodeIcon} Content='Leetcode' Color='#D24074' Link='https://leetcode.com/nitinb540/'/>
            </div>
        </div>
    </header>
  )
}

export default Home