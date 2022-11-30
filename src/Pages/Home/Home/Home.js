import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Advertisment from '../../Advertisment/Advertisment';
import OffSection from '../../Advertisment/OffSection/OffSection';
import Categories from '../../Categories/Categories/Categories';
import Banner from '../Banner/Banner';
import DemoSection from '../DemoSection/DemoSection';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            {/* <h3>This is home</h3> */}
            <Banner></Banner>
            <Categories></Categories>
            <OffSection></OffSection>
            <Advertisment></Advertisment>
            <DemoSection></DemoSection>
            <Subscribe></Subscribe>
            

        </div>
    );
};

export default Home;