import React from 'react'

class Latihann extends React.Component{
    componentWillMount(){
        alert('masuk')
    }
    state = { angka : 0, total : 0, harga : 0 }
    plusAngka = () =>{
        this.setState({angka : this.state.angka+1,
                       total : this.refs.harga.value * (this.state.angka+1)})
    }
    minusAngka = () =>{
        if (this.state.angka > 0) {
            this.setState({angka : this.state.angka-1, 
            total : this.refs.harga.value * (this.state.angka-1)})
        }
    }
    multiply = () =>{
        this.setState({ total : this.refs.harga.value * this.state.angka})
    }
    render(){
        return(
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="form-group">
                        <div className="row justify-content-center">
                            <div className='col-md-2'>
                                <input type="button" value="-" onClick={this.minusAngka} />
                            </div>
                            <div className="col-md-2">
                                <h4 style={{display:'inline'}}>{this.state.angka} </h4>
                            </div>
                            <div className="col-md-2">
                                <input type="button" value="+" onClick={this.plusAngka} />
                            </div>
                    </div>
                            <div class="form-group">
                                <input class="form-control" type="text" ref="harga" placeholder="isi" onChange={this.multiply} />
                            </div>
                            <div>
                            <h3> Rp.{this.state.total} </h3>
                            </div>   
                    </div>
                </div>
            </div>
            
        )
    }
}
export default Latihann