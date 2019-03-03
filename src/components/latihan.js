import React from 'react'
import { connect } from 'react-redux'
import { hitungKata } from './../1.actions'


class Latihan extends React.Component{
    handleCountArea = () => {
        var kata = this.refs.textarea.value
        this.props.hitungKata(kata)
    }
    render(){
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="9"  ref="textarea" onChange={this.handleCountArea}/>
                    <h3> {this.props.kata} Words </h3>
                    </div> 
                </div>
            </div>
        ) 
    }  
}

const mapStateToProps = (state) => {
    return{
        kata : state.jumlah.count
    }
}
export default connect(mapStateToProps,{hitungKata})(Latihan)