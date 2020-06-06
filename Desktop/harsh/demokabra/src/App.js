import React from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import PrimarySearchAppBar from './components/Appbar'
import { Provider } from 'react-redux';
import store from './redux/store'
import Cart from './components/Cart'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      cartData:[],
      count:0
    }
    this.handleData = this.handleData.bind(this);
    this.reduceCartItem=this.reduceCartItem.bind(this)
  }

  handleData(data){
this.state.cartData.push(data);
this.setState({count:this.state.count+1});
console.log(this.state.cartData)
  }

  reduceCartItem(){
    this.setState({count:this.state.count-1});

  }

  render(){
  return (
    <Provider store={store}>
      <Router>
    <div className="App">
      <PrimarySearchAppBar cartLength={this.state.count}/>
      <Route exact path="/product" render={()=> <Product handleData={this.handleData} /> }  />
     <Route exact path="/cart" render={()=> <Cart cartData={this.state.cartData} reduce={this.reduceCartItem} /> }   />
     <Redirect exact from="/" to="/product"/>
    </div>
    </Router>
    </Provider>
  )
}
}

export default App;
