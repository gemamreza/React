import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer';
import Navbar from './components/header';
import Login from './components/loginpage/login';
import Register from './components/loginpage/register';
import Homepage from './components/hompage';
import Product from './components/product';
import Latihan from './components/latihan';
import Latihann from './components/latihan2';
import Delvocal from './components/deleteVocal';
import Tambah from './components/nambah';
import Movie from './components/mainAppMovie';
import {Route} from 'react-router-dom';

class App extends Component {
  btnClick = () =>{
    alert('Masuk')
  }
  render() {
    return (
    <div>
      <Navbar/>
      <div className="container">
        <Route path='/login/' component={Login}/>
        <Route path='/' component={Homepage} exact />
        <Route path='/product' component={Product} />
        <Route path='/latihan' component={Latihan} />
        <Route path='/latihann' component={Latihann} />
        <Route path='/deletevocal' component={Delvocal} />
        <Route path='/tambah' component={Tambah} />
        <Route path='/register' component={Register} />
        <Route path='/movie' component={Movie} />
      {/* <Footer nama='Gema' color='red' fn={this.btnClick} />
      <Footer nama='Gema'>Developer</Footer>
      <Footer nama='Gema'/> */}
      
      </div>
      <Footer/>
      </div>
    
    );
  }
}

export default App;
