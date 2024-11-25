import React from 'react';
import HogTile from './HogTile';
import { Card } from "semantic-ui-react";

const HogContainer = ({hogList, sortBy, greasedFilter}) => {
    const filteredHogs = greasedFilter ? hogList.filter(hog=> hog.greased) : hogList
    const sortedHogs = filteredHogs.sort((a, b) => 
        typeof a[sortBy] === "string" ? a[sortBy].localeCompare(b[sortBy]) : a[sortBy] - b[sortBy]);
    console.log(sortedHogs);

    return (
        <Card.Group>
            <div className="ui grid container">
                {sortedHogs.map(hog=>
                    <HogTile
                        key={hog.name}
                        {...hog}
                    />
                )}
            </div>
        </Card.Group>
    );
}

export default HogContainer;
