import React from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const NotFound = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <div className="container-fluid">
                <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png" alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;