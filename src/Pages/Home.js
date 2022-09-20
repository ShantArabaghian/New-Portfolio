import React, { useState } from 'react';
import HeroSection from '../Components/HeroSection/HeroSection';
import { homeObjOne } from '../Components/InfoSection/data';
import Info from '../Components/InfoSection/Info';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar/Sidebar';
import Services from '../Components/Services/Services';
import Work from '../Components/MyWork/Work';
import Skills from '../Components/Skills/Skills';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
const Home = ()=>{
const [isOpen, setIsOpen] = useState(false);

const toggle= () => {
setIsOpen(!isOpen);
};

return (
    <div className='Home'>
<Sidebar isOpen={isOpen} toggle={toggle} />
<Navbar toggle={toggle} />
<HeroSection />

<Info {...homeObjOne} />
<Services />
<Work />
<Skills/>
<Contact/>
<Footer/>
</div>


);

};
export default Home;