import React from 'react';
import AllServices from '../AllServices/AllServices';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const AllServicesPage = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <AllServices></AllServices>
            <Footer></Footer>
        </div>
    );
};

export default AllServicesPage;