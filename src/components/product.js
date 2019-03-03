import React from 'react'
import Axios from 'axios'

class Product extends React.Component{
    state = {user:'Orang Asing', listProduct : []}
    // Lifecycle methods
    componentDidMount(){
        this.getProduct()
    }
    getProduct = () =>{
        // Setelah render selesai
        Axios.get('http://localhost:2000/product')
        .then((res) => 
            this.setState({listProduct : res.data})
        
        )
        .catch((err) => console.log(err))
        console.log('Ini did Mount '+ this.state.user)
    }

    renderProduct = () =>{
        var jsx = this.state.listProduct.map((val) => {
            return(
                <div>
                    <center>
                        <h1>{val.nama}</h1>
                        <h4>{val.harga}</h4>
                    </center>
                </div>
            )
        })
        return jsx
    }
    
    //componentWillMount(){
    //     // KEtrigger Sebelum Render
    //     console.log('Ini Will Mount '+ this.state.user)
    // }
    // componentWillUpdate(){
    //     console.log('Ini will update ' + this.state.user)
    // }
    // componentDidUpdate(){
    //     console.log('Ini Did Update ' + this.state.user)
    // }
    fn =()=>{
        console.log('render')
    }
    fnStateUpdate =()=>{
        this.setState({user:'Gema'})
    }
    
    render(){
        return(
            <div>
                <h1>PRODUCT</h1>
                {/* <input type="button" value="setState" onClick={() => {this.setState({user:'Gema'})}}/> */}
                {this.renderProduct()}
                <input type="button" value="setState" onClick={this.fnStateUpdate}/>
                {this.fn()}
            </div>
        )
    }
}

export default Product