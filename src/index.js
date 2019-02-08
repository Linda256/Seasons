import React from 'react';
import ReactDOM from 'react-dom';
import Seasons from './components/Seasons';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentSeason:null ,
            latitude:null,
            longitude:null,
            errorMessage:''
        }
    }

    getLocation(){
        window.navigator.geolocation.getCurrentPosition(
                position =>{
                    this.setState({latitude:position.coords.latitude});
                    this.setState({longitude:position.coords.longitude});
                    console.log(position);
                    },
                error => {
                    this.setState({ errorMessage:error.message})
                    }
                )
    }



    setSeason(){
        const fourSeasons=["summer","winter"];
        let season = 'summer';
        let now = new Date();
        if(now.getMonth()<5 || now.getMonth()>10){
            season="winter";
        }
        this.setState({currentSeason:season});
    }

    componentDidMount(){
        this.setSeason();
        this.getLocation();
        console.log("currSeason: ",this.state.currentSeason );
        console.log("state.location.latitude:",this.state.latitude);
    }


    render(){
        if(this.state.errorMessage && !this.state.latitude)
        return (
            <h1>Error: {this.state.errorMessage}</h1>
        )
        if(!this.state.errorMessage && this.state.latitude)
        return(
            <div>
                <Seasons season={this.state.currentSeason} latitude={this.state.latitude}/>

            </div>
        )
        else return(
            <div>Loading.....</div>
            )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));