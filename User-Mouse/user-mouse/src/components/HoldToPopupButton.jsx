import React, { useState } from 'react';
import { useHoldPress } from './hooks/userHoldPress';
import './HoldToPopupButton.css';

function HoldToPopupButton() {
    const [showPopup, setShowPopup] = useState(false);

    const handlers = useHoldPress((shouldShow) => {
        setShowPopup(shouldShow);
    }, 500);

    return (
        <div className="hold-popup-container">
            <button className="hold-button" {...handlers}>
                Hold Me
            </button>

            {showPopup && (
                <div className="popup-box">Popup Appeared!</div>
            )}
        </div>
    );
}

export default HoldToPopupButton;
