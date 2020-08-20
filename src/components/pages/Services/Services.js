import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';

function Services() {
    return ( < >
        <
        HeroSection {...homeObjOne }
        />   <
        HeroSection {...homeObjThree }
        /> <
        HeroSection {...homeObjTwo }
        />  < /
        >
    )
}
export default Services;