import React from 'react';

const Seasons = (props) => {
    const season=props.season;
    console.log("seasons props",props);
    console.log("season in Seasons props:", season);
    console.log("props.location.latitude:",props.latitude);
    if (season==="summer"){
        return(
            <div>
                <h1>This is Summer</h1>
                <h1>Latitude {props.latitude}</h1>
            </div>
        )
    }
    return (
        <div>
            <h2>This is Winter</h2>
            <h1>Latitude: {props.latitude}</h1>
        </div>
    )


}

export default Seasons;