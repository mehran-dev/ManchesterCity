import React from 'react';
import Stripe from '../features/Stripes';
import Text from './Text';




const Features = () => {
    return (
        <div className="featured_wrapper">
            <Stripe />
            <Text />

        </div>
    );
};

export default Features;