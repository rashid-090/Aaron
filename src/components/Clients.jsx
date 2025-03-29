import React from 'react';
import { AaronLogo } from '../assets'
import Marquee from "react-fast-marquee";

const Allclients = [
    {
        clnt: AaronLogo
    },
    {
        clnt: AaronLogo
    },
    {
        clnt: AaronLogo
    },
    {
        clnt: AaronLogo
    },
    {
        clnt: AaronLogo
    },
    {
        clnt: AaronLogo
    },
    {
        clnt: AaronLogo
    },
    {
        clnt: AaronLogo
    },
]
const Clients = () => {
    return (
        <>
            <Marquee className='' gradient="true" gradientColor='white'>
                {Allclients?.map((clt, i) => (
                    <div key={i}>
                        <img key={i} className='h-10 xl:h-full xl:aspect-video object-contain mx-5 xl:mx-10 2xl:mx-20' src={clt.clnt} alt="" />
                    </div>
                ))}
            </Marquee>
        </>
    )
}

export default Clients