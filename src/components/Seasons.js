import React from 'react';
import "./Seasons.css";

const Seasons = (props) => {
    console.log("seasons props",props);
    let getSeason=function(latitude){
        let season = null;
        let month = new Date().getMonth();
        if(month<4 || month>9){
            season=latitude>0?"winter":"summer";
        }else{
            season=latitude>0?"summer":"winter";
        }
        return season;
    }

     const seasonConfig = {
        summer:{
            text:"Lets hit the beach",
            icon:"sun"
        },
        winter:{
            text:"Burr, it is chilly!",
            icon:"snowflake"

        }
    }

    const season=getSeason(props.latitude);
    const {text,icon}=seasonConfig[season] ;


    return(
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${icon} icon`}/>
            <h1>{text}</h1>
            <i className={`icon-right massive ${icon} icon`}/>
        </div>
    )
}

export default Seasons;