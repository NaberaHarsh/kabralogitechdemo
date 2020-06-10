import React, { Component } from 'react'
import { IonPage, IonHeader, IonToolbar, IonButtons,IonButton,IonText,IonIcon, IonSearchbar, IonContent, IonGrid, IonRow, IonCol, IonLabel, IonItemDivider, IonMenuButton } from '@ionic/react';
import HomeJson from '../Home/HomeData'
import { search } from 'ionicons/icons';
import Menu from '../Menu/Menu';

class Search extends Component{
    state:any;
    props:any;
    constructor(props:any){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <>
            <Menu/>
            <IonPage id="main">
                <IonHeader>
                    <IonToolbar color="primary">
                    <IonButtons slot="start">
                                <IonMenuButton color="light" ></IonMenuButton>
                            </IonButtons>
                        
                            <IonSearchbar slot="secondary" placeholder="I am shopping for..."  showCancelButton="focus" cancelButtonText="Custom Cancel" animated={true}></IonSearchbar>
                        
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonLabel>Trending Search</IonLabel>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                            <div className="sep"></div>
<IonRow  class="row ion-align-items-center">
  <IonButton style={{marginLeft: '5px'}} fill="outline"  color="medium" class="btn ion-no-padding ion-no-margin"><IonText style={{paddingLeft:'5px', paddingRight:'5px'}} class="filter-btn">Jacket</IonText></IonButton>
  <IonButton style={{marginLeft: '5px'}} fill="outline"  color="medium" class="btn ion-no-padding ion-no-margin"><IonText style={{paddingLeft:'5px', paddingRight:'5px'}} class="filter-btn">Drones</IonText></IonButton>
  <IonButton style={{marginLeft: '5px'}} fill="outline"  color="medium" class="btn ion-no-padding ion-no-margin"><IonText style={{paddingLeft:'5px', paddingRight:'5px'}} class="filter-btn">Shoes for men</IonText></IonButton>
  <IonButton style={{marginLeft: '5px'}} fill="outline"  color="medium" class="btn ion-no-padding ion-no-margin"><IonText style={{paddingLeft:'5px', paddingRight:'5px'}} class="filter-btn">Accessories</IonText></IonButton>
  <IonButton style={{marginLeft: '5px'}} fill="outline"  color="medium" class="btn ion-no-padding ion-no-margin"><IonText style={{paddingLeft:'5px', paddingRight:'5px'}} class="filter-btn">Watches</IonText></IonButton>
  <IonButton style={{marginLeft: '5px'}} fill="outline"  color="medium" class="btn ion-no-padding ion-no-margin"><IonText style={{paddingLeft:'5px', paddingRight:'5px'}} class="filter-btn">Skirts</IonText></IonButton>
  <IonButton style={{marginLeft: '5px'}} fill="outline"  color="medium" class="btn ion-no-padding ion-no-margin"><IonText style={{paddingLeft:'5px', paddingRight:'5px'}} class="filter-btn">Top</IonText></IonButton>
  <IonButton style={{marginLeft: '5px'}} fill="outline"  color="medium" class="btn ion-no-padding ion-no-margin"><IonText style={{paddingLeft:'5px', paddingRight:'5px'}} class="filter-btn">Fashion</IonText></IonButton>
  <IonButton style={{marginLeft: '5px'}} fill="outline"  color="medium" class="btn ion-no-padding ion-no-margin"><IonText style={{paddingLeft:'5px', paddingRight:'5px'}} class="filter-btn">Wallets</IonText></IonButton>
  <IonButton style={{marginLeft: '5px'}} fill="outline"  color="medium" class="btn ion-no-padding ion-no-margin"><IonText style={{paddingLeft:'5px', paddingRight:'5px'}} class="filter-btn">Blazers for men</IonText></IonButton>
  <IonButton style={{marginLeft: '5px'}} fill="outline"  color="medium" class="btn ion-no-padding ion-no-margin"><IonText style={{paddingLeft:'5px', paddingRight:'5px'}} class="filter-btn">Jeans</IonText></IonButton>
</IonRow>

                           </IonCol>
                        </IonRow>
                        <IonItemDivider>
    </IonItemDivider> 
        <IonRow>
            <IonCol>
                <IonLabel><h2>Recently Viewed</h2></IonLabel></IonCol>
                </IonRow>
                <IonRow>

{HomeJson.Product.map((data:any,index:any)=>{
    return(
        <IonCol sizeMd="1" sizeLg="1" sizeSm="4" sizeXs="4">
            <img src={data.img3} style={{height:140}}/>
        </IonCol>
    )
})}
    </IonRow>
                    </IonGrid>
                </IonContent>
            </IonPage>
            </>
        )
    }

}
export default Search;