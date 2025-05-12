import React, { useState } from 'react';

function AgeCalculator() {
    const [birthdate, setbirthdate] = useState();
    const [age, setAge] = useState();

    const calculateAge = () => {
        const today = new Date();
        const birthDate = new Date(birthdate);
        let ages = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate())) {
            ages--;
        }
    };


    return (
        <div className="container">
            <div className="heading container_title">
                <div className="para container_title">
                    <div className="container_middle">
                        <div className="right">
                            <h4>Date of Birth</h4>
                            <input type="date" className="date" value={birthdate} onChange={e => setbirthdate(e.target.values)} />
                            <div className="button_div">
                                <button onClick={calculateAge} className='button-65'>Calculate Age</button>
                                <button className='button-65'>Reset</button>
                            </div>
                        </div>


                        <div className="left">
                            <div className="container_middel_para">
                                <h1>Your age is</h1>
                                <h1>22</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AgeCalculator;