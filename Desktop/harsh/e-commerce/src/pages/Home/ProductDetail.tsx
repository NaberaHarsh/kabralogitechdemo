import React , {Component } from 'react'
import { IonPage,IonHeader,IonToolbar,IonButtons,IonButton,IonIcon,IonCardHeader, IonGrid,IonRow,IonCol,IonCard,IonCardTitle,IonCardContent, IonLabel,IonSegmentButton,IonSegment, IonContent } from '@ionic/react';
import { cart,search,arrowBack } from 'ionicons/icons'
import HomeJson from './HomeData';

class  ProductDetails extends Component{
    state:any;
    constructor(props:any){
        super(props);
        this.state={
            segmentTab:'Overview',
            selectedData:[]
        }
    }
 
    
    segmentChanged = (value: any) => {
        this.setState({
            segmentTab: value
        })
    }

    render(){
    const { segmentTab } = this.state;
        return(
<IonPage>
<IonHeader class="mybg" >
                        <IonToolbar color="primary" >
                            <IonButtons slot="start">
                                <IonButton routerLink='/home'>
                                <IonIcon icon={arrowBack} ></IonIcon>
                                </IonButton>
                            </IonButtons>
<IonLabel>Details</IonLabel>

                            <IonButtons slot="end">
                                <IonButton>
                                    <IonIcon icon={cart} ></IonIcon>

                                </IonButton>
                                <IonButton >
                                    <IonIcon icon={search}></IonIcon>

                                 </IonButton>
                            </IonButtons>
                        </IonToolbar >
                        <IonToolbar color="primary">
                            <IonSegment scrollable mode="md" value={segmentTab} onIonChange={(e) => this.segmentChanged(e.detail.value)} >
                                <IonSegmentButton value='Overview'>
                                    <IonLabel>Overview</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value='Related'>
                                    <IonLabel>Related</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value='Product Reviews'>
                                    <IonLabel>Product Reviews</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value='Store Reviews'>
                                    <IonLabel>Store Reviews</IonLabel>
                                </IonSegmentButton>
                                </IonSegment>
                                </IonToolbar>

                        </IonHeader> 
                       
   

</IonPage>
        )
    }
}
export default ProductDetails