import Flower from './Flower'
import React from 'react'





class Flowers extends React.Component {

    constructor(props) {
        super(props);
        this.state={name:"",flowers:[{flower:"null",price:"null"}]}
    }
    
    async componentDidMount(){
        // const flowerArray = await fetch("http://localhost:5000/flowers").then(value=>this.setState({flower:value})).then(console.log(this.state.flower))
        const flowerArray = await fetch("http://localhost:5000/flowers").then(value=>{return value.json()}).then(value=>this.setState({flowers:value}))
    
    }
render(){
    return (this.state.flowers.map((flower) => 
    <Flower flower={flower.flower} price={flower.price} />
  ))
}

}

export default Flowers;
