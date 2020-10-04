import React from 'react';
import Features from './features/features';
import Matches from './Matches/Matches';


const Home = () => {
    return (
        <div className="bck_blue">
            <Features />
            <Matches />
        </div>
    );
};

export default Home;