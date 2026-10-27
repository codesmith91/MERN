import React, { useState, useCallback } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. 
// Use useRef to create a varia ble that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const [, forceRender] = useState(0); // you dont need the first value you can leave it emty  
    
    const numberOfTimesRendered = useRef(0);

    const handleReRender = () => {
        // Update state to force re-render
        setCount(count + 1);
    };

    numberOfTimesRendered.current = numberOfTimesRendered.current + 1;

    return (
        <div>
            <p>This component has rendered {numberOfTimesRendered.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};