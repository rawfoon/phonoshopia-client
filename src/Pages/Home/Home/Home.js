import React from 'react';
import Advertisment from '../../Advertisment/Advertisment';
import Categories from '../../Categories/Categories/Categories';
import Banner from '../Banner/Banner';
import DemoSection from '../DemoSection/DemoSection';

const Home = () => {
    return (
        <div>
            {/* <h3>This is home</h3> */}
            <Banner></Banner>
            <Categories></Categories>
            <Advertisment></Advertisment>
            <DemoSection></DemoSection>

        </div>
    );
};

export default Home;