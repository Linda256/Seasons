import React from 'react';
import ReactDOM from 'react-dom';
import Seasons from './components/Seasons';
import Loading from './components/Loading';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentSeason:null,
            latitude:null,
            longitude:null,
            errorMessage:'',
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





    componentDidMount(){
        this.getLocation();
        console.log("currSeason: ",this.state.currentSeason );
        console.log("state.latitude:",this.state.latitude);
    }


    render(){
        if(this.state.errorMessage && !this.state.latitude)
        return (
            <h1>Error: {this.state.errorMessage}</h1>
        )
        if(!this.state.errorMessage && this.state.latitude)
        return(
            <div>
                <Seasons setSeason={this.setSeason}  season={this.state.currentSeason} latitude={this.state.latitude}/>

            </div>
        )
        else return(<Loading />)
    }
}

ReactDOM.render(<App />, document.getElementById('root'));