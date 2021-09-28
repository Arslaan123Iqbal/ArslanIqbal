import React from 'react';
import { AiFillGithub, AiFillLinkedin,AiFillCloud } from 'react-icons/ai';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { SocialIcons } from '../Header/HeaderStyles';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
         
       
        Hello, My name is Arslan Iqbal. I am a software developer. I graduate in Computer Science. I have done Internships. I like to learn things. I like to gather knowledge about new technologies. Now I want to work with some reputable company to improve experience and professional knowledge. 
        
        
        
         


      
        </SectionText>

        <Button><a href="images/Arslan Iqbal.pdf" style={{color:'white'}} >Download Resume</a></Button>


        <SectionTitle main center>
          Why you <br />
          Should Hire Me?
        </SectionTitle>
        <SectionText>
        Being a fresher, I think I am very flexible and adaptive to learning new things. I am sure I will be able to contribute something capable for the growth of the company. My last project in Technoventive Solutions and career institute has taught me how to be a team player.
        </SectionText>


 
 
      </LeftSection>
    </Section>
  </>
);

export default Hero;
