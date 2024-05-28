import React from 'react';

//components import
import Details from './Details';
import Header from './Header';
import Footer from '../../components/Footer';

const HomePage = () => {
    return(
        <div className='home_page'>
            <Header />
            <Details />
            <Footer />
        </div>
    );
}

export default HomePage;