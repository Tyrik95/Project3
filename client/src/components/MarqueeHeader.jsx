import React from 'react'

const MarqueeHeader = () => {
    return (
        <div className='header'>
            <marquee scrolldelay='75'>Top Racer this season : Captain Falcon </marquee>
            <marquee scrolldelay='60' >Next Race starting soon</marquee>
            <marquee scrolldelay='95'>Previous winner : Black Bull</marquee>
        </div>
    )
}

export default MarqueeHeader