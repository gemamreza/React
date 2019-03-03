// CLASS COMPONENTS
// Props // properties ==> Transfer data dari parent ke child
import React from 'react'


class Footer extends React.Component{
    state = { number : 0 }
    handleState = () =>{
        this.setState({number : this.state.number+1})
    }
    render(){
    // var nama = 'Exco'
        return(
            <div style={{position:'fixed',left:'0px',bottom:'0px',height:'60px',
            backgroundColor:'lightgray',width:'100%',paddingTop :'20px'}}>
                {/* <h1 style={{color:this.props.color}}>Ini Footer {this.props.nama}</h1>
                <h2>{nama}</h2>
                <h2>{this.state.number}</h2>
                <h2>{this.props.children}</h2>
                <input type="button" value="Fn dari Parent" onClick={this.handleState}></input> */}
            <center>2019 &copy; Gema Muhammad Reza </center>
                
            </div>
        )
    }
}

export default Footer
// FUNCTION COMPONENTS