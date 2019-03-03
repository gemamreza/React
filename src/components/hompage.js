import React from 'react'
import { connect } from 'react-redux'

class Homepage extends React.Component{
    render(){
        return(
            <div>
                <center><h1>WELCOME to Website {this.props.nama.username}!</h1></center>,
                <h2>{this.props.nama.email}</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    // nama adalah variabel yg kita bikin sendiri
    // state merujuk pada index.js
    return {nama : state.user}
            
            
    // return {user : state.user.username} maka yg di atas cukup {this.props.user}
}

export default connect(mapStateToProps)(Homepage)

