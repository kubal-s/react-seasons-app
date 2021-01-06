import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
// const App = () =>{
//     window.navigator.geolocation.getCurrentPosition(
//         (position)=> console.log(position),
//         (err) => console.log(err)
//     );
//     return(
//         <div>Hi there </div>
//     )
// }

class App extends React.Component{
    // state can be initialized here instead of constructor
    state = {
        lat: null,
        errorMessage: ""
    }
    // constructor(){
    //     super();
    //     this.state = {
    //         lat: null,
    //         errorMessage: ""
    //     }
    //     // Data loading can be done here but prefered to do over componentDidMount

    //     // window.navigator.geolocation.getCurrentPosition(
    //     //     (position)=> {
    //     //         console.log(position)
    //     //         this.setState({
    //     //             lat:position.coords.latitude
    //     //         })
    //     //     },
    //     //     (err) => {
    //     //         console.log(err);
    //     //         this.setState({
    //     //             errorMessage: err.message
    //     //         })
    //     //     }
    //     // );
    // }
    componentDidMount(){
        console.log("My component just got loaded")
        // Best place to do data loading
        window.navigator.geolocation.getCurrentPosition(
            (position)=> {
                console.log(position)
                this.setState({
                    lat:position.coords.latitude
                })
            },
            (err) => {
                console.log(err);
                this.setState({
                    errorMessage: err.message
                })
            }
        );
    }
    componentDidUpdate(){
        console.log("My component just got updated")
    }
    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }
        return <Spinner message="Please accept location request"/>
    }
    render(){
        return(
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}
ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)