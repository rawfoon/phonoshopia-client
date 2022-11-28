import React from 'react';
import Advertisment from '../../Advertisment/Advertisment';
import Categories from '../../Categories/Categories/Categories';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            {/* <h3>This is home</h3> */}
            <Banner></Banner>
            <Categories></Categories>
            <Advertisment></Advertisment>

        </div>
    );
};

export default Home;