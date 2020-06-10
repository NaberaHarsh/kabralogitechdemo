import React, { Component } from 'react'
import { IonPage, IonHeader, IonToolbar,IonButtons,IonButton, IonMenuButton,IonLabel,IonRow, IonSegment,IonSegmentButton, IonContent, IonCard, IonGrid, IonRadio, IonCol, IonText, IonIcon } from '@ionic/react';
import NotifyJson from './NotificationData'
import Menu from '../Menu/Menu';
import {mail} from 'ionicons/icons'
import './Notification.css'

class Notification extends Component{
    state:any;
    props:any;
    constructor(props:any){
        super(props);
        this.state={
            segmentTab:'All'
        }

    }

    
    segmentChanged = (value: any) => {
        this.setState({
            segmentTab: value
        })
    }

    render(){
const {segmentTab} =  this.state;

        return(
            <>
            <Menu/>
<IonPage id="main">
    <IonHeader class="mybg">
    <IonToolbar color="primary">
                    <IonButtons slot="start">
                                <IonMenuButton color="light" ></IonMenuButton>
                            </IonButtons> 
                            <IonLabel>Notifications</IonLabel>
                            </IonToolbar>

                            <IonToolbar color="primary">
                        <IonSegment scrollable mode="md" value={segmentTab} onIonChange={(e) => this.segmentChanged(e.detail.value)} >
                            <IonSegmentButton value='All'>
                                <IonLabel>All</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value='Deals'>
                                <IonLabel>Deals</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value='Your Orders'>
                                <IonLabel>Your Orders</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value='Others'>
                                <IonLabel>Others</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                    </IonToolbar>

                </IonHeader>

                {segmentTab == "All"
                &&
               <IonContent>
                   {NotifyJson.Notification.map((data:any,index:number)=>{
                       return(
                       <IonCard>
                           <IonGrid>
                               <IonRow>
<IonCol sizeMd="2" sizeLg="2" sizeSm='3' size="3">
    <img src={data.img1} style={{height:"80px"}} ></img>
</IonCol>
<IonCol sizeMd="10" sizeLg="10" sizeSm='9' size="9 " >
    <IonRow>
                   <IonCol><IonText>{data.content}</IonText></IonCol>
    </IonRow>
    <IonRow>
        <IonCol>
            <IonText>{data.period}</IonText>
        </IonCol>
    </IonRow>
</IonCol>
                               </IonRow>
                           </IonGrid>
                       </IonCard>
                       )
                   })}
               </IonContent>
               
               }
               {segmentTab == "Deals"
                &&
               <IonContent>
                   {NotifyJson.Notification.map((data:any,index:number)=>{
                       return(
                       <IonCard>
                           <IonGrid>
                               <IonRow>
<IonCol sizeMd="2" sizeLg="2" sizeSm='3' size="3">
    <img src={data.img1} style={{height:"80px"}} ></img>
</IonCol>
<IonCol sizeMd="10" sizeLg="10" sizeSm='9' size="9 " >
    <IonRow>
                   <IonCol><IonText>{data.content}</IonText></IonCol>
    </IonRow>
    <IonRow>
        <IonCol>
            <IonText>{data.period}</IonText>
        </IonCol>
    </IonRow>
</IonCol>
                               </IonRow>
                           </IonGrid>
                       </IonCard>
                       )
                   })}
               </IonContent>
               
               }

{segmentTab == "Your Orders"
&&
<IonCol class="ion-padding-vertical ion-align-items-center">
    <div  style={{ textAlignLast:'center'}}>
        <IonGrid>
            <IonRow><IonCol>
            <IonIcon style={{fontSize:'40px'}} icon={mail}></IonIcon>
</IonCol></IonRow>
<IonRow>
    <IonCol>
<IonLabel><h1>You have no notifications yet</h1></IonLabel>   
 </IonCol>
</IonRow>
<IonRow>
    <IonCol>
        <IonText>Your order status appears here</IonText>
    </IonCol>
</IonRow>
<IonRow>
    <IonCol>
        <IonButton routerLink="/home" color="primary">Continue Shopping</IonButton>
    </IonCol>
</IonRow>
        </IonGrid>
    </div>
</IonCol>
}

               {segmentTab == "Others"
                &&
               <IonContent>
                   {NotifyJson.Notification.map((data:any,index:number)=>{
                       return(
                       <IonCard>
                           <IonGrid>
                               <IonRow>
<IonCol sizeMd="2" sizeLg="2" sizeSm='3' size="3">
    <img src={data.img1} style={{height:"80px"}} ></img>
</IonCol>
<IonCol sizeMd="10" sizeLg="10" sizeSm='9' size="9 " >
    <IonRow>
                   <IonCol><IonText>{data.content}</IonText></IonCol>
    </IonRow>
    <IonRow>
        <IonCol>
            <IonText>{data.period}</IonText>
        </IonCol>
    </IonRow>
</IonCol>
                               </IonRow>
                           </IonGrid>
                       </IonCard>
                       )
                   })}
               </IonContent>
               
               }
</IonPage>
</>
        )
    }
}
export default Notification