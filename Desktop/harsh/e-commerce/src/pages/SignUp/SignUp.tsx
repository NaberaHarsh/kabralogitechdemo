import React, { Component } from 'react'
import { IonPage, IonHeader, IonRow, IonImg, IonContent, IonText, IonGrid, IonCol, IonInput, IonButton } from '@ionic/react';
import './SignUp.css'
import login from '../../assets/images/login.png'
import fb from '../../assets/images/facebook_logo.png'
import google from '../../assets/images/google_logo.png'
import * as ROUTES from '../Constants/routes'

class SignUp extends Component {
    constructor(props: any) {
        super(props);

    }
    render() {
        return (
            <IonPage>
                <IonHeader class="mybg head ion-padding"
                    style={{ backgroundColor: '#31B1F0' }}
                >
                    <IonRow class="ion-justify-content-center">
                        <IonImg src={login} class="head-image"></IonImg>
                    </IonRow>
                </IonHeader>
                <br />
                <IonContent class="ion-padding">
                    <IonText>
                        <h3 className="title ion-no-margin ion-margin-bottom ion-text-center">Sign Up</h3>
                    </IonText>

                    <IonGrid>
                        <IonRow>
                            
                                <IonCol>
                                    <IonInput
                                        name="fname"
                                        clearInput
                                        type="text"
                                        placeholder="First Name"
                                        className="input ion-padding-horizontal"
                                        clear-input="true"></IonInput>
                                </IonCol>
                                <IonCol>
                                    <IonInput
                                        name="lname"
                                        clearInput
                                        type="text"
                                        placeholder="Last Name"
                                        className="input ion-padding-horizontal"
                                        clear-input="true"></IonInput>
                                </IonCol>
                            </IonRow>

                        <IonRow>
                            <IonCol>
                                <IonInput
                                    name="email"

                                    clearInput
                                    type="email"
                                    placeholder="Email"
                                    className="input ion-padding-horizontal"
                                    clear-input="true"></IonInput>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonInput
                                    clearInput
                                    name="password"
                                    // value={password}
                                    // onIonChange={this.onChange}
                                    type="password"
                                    placeholder="Password"
                                    className="input ion-padding-horizontal"
                                    clear-input="true"></IonInput>
                            </IonCol>
                        </IonRow>
                        
                        <IonRow>
                            <IonCol>
                                <IonButton expand="block" className='button-color'>
                                    <strong className="white">Create an Account</strong>
                                </IonButton>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonButton expand="block" fill="outline" color="fb ion-no-padding">
                                    <IonImg src={fb} slot="start" className="logo ion-margin-end">
                                    </IonImg>
                                    Facebook
                                </IonButton>
                            </IonCol>
                            <IonCol>
                                <IonButton expand="block" color="light" class="ion-no-padding">
                                    <IonImg src={google} slot="start" className="logo ion-margin-end">
                                    </IonImg>
                                    Google
                                </IonButton>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonButton expand="block" fill="outline" color="mytheme" routerLink="/signin">
                                    <strong>Have an Account? Sign In</strong>
                                </IonButton>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonText class="ion-text-center" color="medium">
                                    <h6 className="small ion-no-margin">
                                        <a href="/">Terms of Use</a> and <a href="/">Privacy Policy</a>
                                    </h6></IonText>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>

            </IonPage>
        )
    }
}
export default SignUp;