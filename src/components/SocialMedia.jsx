import React from 'react';
import {  BsInstagram } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin  } from 'react-icons/ai';


const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/dark-Kings" target="blank"><AiFillGithub/></a>
    </div>
    <div>
    <a href="https://www.linkedin.com/in/anshulpant" target="blank"><AiFillLinkedin/></a>
    </div>
    <div>
      <a href='https://www.instagram.com/anshul.pant/' target='blank'><BsInstagram/></a>
    </div>
  </div>
);

export default SocialMedia;