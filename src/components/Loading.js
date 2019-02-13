import React from 'react';

const Loading = (props)=>{
    return (
       
                <div className="ui active dimmer" style={{backgroundColor:"pink"}} >
                    <div className="big ui text loader">{props.message}</div>
                </div>
             
    )
    
}

Loading.defaultProps={
    message:"Loading..."
}

export default Loading;