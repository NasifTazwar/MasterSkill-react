import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
// import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <MenuBar></MenuBar>
            <Banner></Banner>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;