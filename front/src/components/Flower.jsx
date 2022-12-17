import React from "react";

class Flower extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render(){

    

    return(
    <>
    <h1>{this.props.flower}</h1>
    <h2>{this.props.price}</h2>
    </> 
    )

}


}


export default Flower