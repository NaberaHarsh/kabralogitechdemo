import React,  { Component} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  IonApp,
  
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import * as ROUTES from './pages/Constants/routes'


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home'
import ProductDetails from './pages/Home/ProductDetail';
import { render } from '@testing-library/react';
import Search from './pages/Search/SearchPage';
import Menu from './pages/Menu/Menu';

class App extends Component{
  state:any;
  constructor(props:any){
    super(props);
    this.state={
      item:''
    }
  }

handleClick=(item:any)=>{
  this.setState({item:item})
}


render(){
  return(
    <IonApp>
    <IonReactRouter>
      <Menu />
      <Switch>
        <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
        <Route exact path={ROUTES.HOME} render={(props)=> <Home  {...props} />  } />
        <Route exact path={`${ROUTES.PRODUCT_DETAIL}/:id`} render={(props)=> <ProductDetails {...props}  /> } />
        <Route exact path={ROUTES.SEARCH} component={Search} />
       <Redirect  from="/" to={ROUTES.SIGN_IN} />
      </Switch>
    </IonReactRouter>
  </IonApp>
  )
}

}

export default App;
