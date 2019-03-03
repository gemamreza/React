import React from 'react'
import './support/css/cssform.css'
import { fnUbahUser } from '../1.actions'
import { connect } from 'react-redux'

class Form extends React.Component{
    // state={name : ''}

    handleButton = () =>{
      var username = this.refs.username.value
      this.props.fnUbahUser(username)
      // this.setState({name:nama})
    }
    render(){
      var hidden = {color:'graydark',fontSize:'30px'}
        return(
          <div className='container'>
            <div className='row justify-content-center'>
              <div class="col-md-4 mt-4">
          <form>
            {/* <div className="form-group">
              <label htmlFor="exampleInputEmail1" style={hidden}>Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" ref="username" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
           </div> */}
           <div className="form-group">
            <label htmlFor="exampleInputUserName" style={hidden}>User Name</label>
            <input type="text" className="form-control" id="exampleInputUserName"placeholder="Enter User Name" ref="username" />
             </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" style={hidden}>Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <input type="button" className="btn btn-primary" onClick={this.handleButton} value="Submit"></input>
          </form>
        </div>
     
      {/* <div className='col md-6'>
          {this.state.name}
      </div> */}
        {/* <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1" height="500px">Your Message</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
      </div> */}


      </div>  
      </div>
          

        )
    }
}

export default connect(null,{fnUbahUser})(Form)