import React from 'react';

const Seasons = (props) => {
    const season=props.season;
    console.log("season in Seasons props", season);
    if (season==="summer"){
        return(

            <h1>This is Summer</h1>
        )
    }
    return (
        <div>This is Winter</div>
    )
    

}

export default Seasons;