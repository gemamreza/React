import React from 'react'

class Delvocal extends React.Component{
    state = {jumlah : ''}
    DelVocal = () => {
        var kata = this.refs.textarea.value
        var baru = kata.replace(/a|i|u|e|o/g, '')
        this.setState({jumlah: baru})
    }
    render(){
        return(
            <div>
                 <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <h4> Enter Words </h4>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="9"  ref="textarea" onChange={this.DelVocal}/>
                            <h3>{this.state.jumlah}</h3>
                        </div> 
                    </div>
                </div>
            </div> 
        )
    }
}

export default Delvocal