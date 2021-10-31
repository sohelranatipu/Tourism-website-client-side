import React from 'react';
// import myVideo from '../../../src/images/vid-3.mp4' ;
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import form from '../../../src/images/form.jpg' ; 
import company from '../../../src/images/company.jpg' ; 

const Home = () => {
    return (
        <div>
            {/* <img width="100%" height="500px" src="https://i.ibb.co/G2Xssnr/pexels-tom-fisk-2213443.jpg" alt="" /> */}
            <Banner></Banner>
            <Packages></Packages>
            <h1 style={{margin:'40px 0'}}>Contact Us</h1>
            <img width="100%" src={form} alt="" />
            <h1 style={{margin:'40px 0'}}> </h1>
            <img width="100%" src={company} alt="" />
        </div>
    );
};

export default Home;