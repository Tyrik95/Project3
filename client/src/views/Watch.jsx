import React, { useState } from 'react';
import axios from 'axios';

const Watch = () => {
    const [racer1Data, setRacer1Data] = useState([]);
    const [racer2Data, setRacer2Data] = useState([])

    const handleRaceClick = () => {
        axios.get('http://localhost:8000/api/race')
            .then(res => {
                console.log(res.data)
                setRacer1Data(res.data.racer1Messages)
                setRacer2Data(res.data.racer2Messages)
            })
            .catch(err => console.log(err));
    };

    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }

    return (
        <div>
            <h1>Race Simulator</h1>
            <button style={{ color: 'white' }} onClick={handleRaceClick}>Start Race</button>
            {
                racer1Data.map((e, idx) => (
                    <p key={idx}>{e}</p>
                    
                ))
            }
        </div>
    )
}

export default Watch