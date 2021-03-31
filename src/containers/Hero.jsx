import React from 'react';

import { Baner } from '../components/template/Baner';
import Galery from '../components/template/Galery';
import Post from '../components/template/Post';

const Hero = () => (
  <div className="hero">
    <Baner />
    <Galery />
    <Post />
  </div>
);
export default Hero;
