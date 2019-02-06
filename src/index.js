import React from 'react';
import ReactDOM from 'react-dom';
import Seasons from './components/Seasons';

class App extends React.Component{
    constructor(){
        super();
        this.state={
            currentSeason:this.getSeason(),
        }
    }

    getSeason(){
        const fourSeasons=["summer","winter"];
        let season = 'summer';
        let now = new Date();
        if(now.getMonth()<5 || now.getMonth()>10){
            season="winter";
        }
        console.log(season);
        return season;
    }

    render(){
        console.log("currSeason: ",this.state.currentSeason )
        return(
            <Seasons season={this.state.currentSeason}/>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));