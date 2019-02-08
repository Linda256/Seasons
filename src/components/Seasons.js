import React from 'react';

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

    const season=getSeason(props.latitude);


    // console.log("seasons props",props);
    // console.log("season in Seasons props:", season);
    // console.log("season props latitude:",props.latitude);
    // if (season==="summer"){
    //     return(
    //         <div>
    //             <h1>This is Summer</h1>
    //             <h1>Latitude {props.latitude}</h1>
    //         </div>
    //     )
    // }
    // return (
    //     <div>
    //         <h2>This is Winter</h2>
    //         <h1>Latitude: {props.latitude}</h1>
    //     </div>
    // )
    const icon = season==='winter'? "snowflake" : "sun";
    console.log('icon', icon);

    return(
        <div>
            <i className={`huge ${icon} icon`}/>
            <h1>{season==='winter'? 'Burr, it is chilly' : 'Lets hit the beach'}</h1>
            <i className={`huge ${icon} icon`}/>
        </div>
    )
}

export default Seasons;