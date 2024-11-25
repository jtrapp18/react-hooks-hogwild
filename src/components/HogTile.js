import React, {useState} from 'react';
import { Card } from "semantic-ui-react";

const HogTile = ({name, specialty, greased, weight, image}) => {
    const [onFront, setOnFront] = useState(true);
    const [showHog, setShowHog] = useState(true);

    function handleClick() {
        setOnFront(onFront=>!onFront);
    }

    let cardInfo

    if (onFront) {
        cardInfo =
            <>
                <h1>{name}</h1>
                <img
                    src={image}
                    alt={name}
                >
                </img>
            </>
    }
    else {
        cardInfo =
            <>
                <h1>{name}</h1>
                <span>{specialty}</span>
                <span>{weight}</span>
                <span>{greased}</span>
            </>
    }

    if (!showHog) {
        cardInfo = ""
    }

    if (!image) return <h1>Loading...</h1>

    return (
        <Card>
            <div onClick={handleClick} className="ui card eight wide column pigTile">
                {cardInfo}
                <button onClick={()=>setShowHog(showHog=>!showHog)}>{showHog ? "Hide Hog" : "Show Hog"}</button>
            </div>
        </Card>
    );
}

export default HogTile;
