import React, { Component } from 'react'
import { IonPage, IonHeader, IonToolbar, IonSearchbar, IonMenuButton, IonButtons, IonContent, IonIcon, IonButton, IonTabs, IonTabBar, IonRouterOutlet, IonSegmentButton, IonLabel, IonSegment } from '@ionic/react'
import Menu from '../Menu/Menu';
import { filter, cart } from 'ionicons/icons'
import { menuController } from '@ionic/core';


class Home extends Component {
    constructor(props: any,
        ) {
        super(props)
    }

    open(){
        menuController.open('end')
        }
        
    render() {
        return (
            <>
                <Menu />
                <IonPage id="main">
                    <IonHeader class="mybg" >
                        <IonToolbar color="primary" >
                            <IonButtons slot="start">
                                <IonMenuButton color="light" ></IonMenuButton>
                            </IonButtons>


                            <IonSearchbar slot="secondary" placeholder="I am shopping for..."  showCancelButton="focus" cancelButtonText="Custom Cancel" animated={true}></IonSearchbar>
                            <IonButtons slot="end">
                                <IonButton>
                                    <IonIcon icon={cart} ></IonIcon>

                                </IonButton>
                                <IonButton onClick={this.open}>
                                    <IonIcon icon={filter}></IonIcon>

                                </IonButton>
                            </IonButtons>
                        </IonToolbar >
                        <IonToolbar color="primary">
                            <IonSegment scrollable  >
                                <IonSegmentButton value='value1'>
                                    <IonLabel>Popular</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value='value2'>
                                    <IonLabel>Recently Viewed</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value='value3'>
                                    <IonLabel>Fashion</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value='value4'>
                                    <IonLabel>Tops</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value='value5'>
                                    <IonLabel>Shoes</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value='value6'>
                                    <IonLabel>Automotive</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value='value7'>
                                    <IonLabel>Buttom</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value='value8'>
                                    <IonLabel>Watches</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value='value9'>
                                    <IonLabel>Wallets and Bags</IonLabel>
                                </IonSegmentButton>
                            </IonSegment> 
                                                   </IonToolbar>

                    </IonHeader>


                </IonPage>
            </>
        )
    }
}

export default Home;