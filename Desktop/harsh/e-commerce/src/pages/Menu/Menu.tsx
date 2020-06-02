import React, {Component} from 'react'
import { IonPage, IonMenu, IonHeader,IonImg, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel, IonGrid, IonRow, IonCol, IonAvatar, IonBadge, IonMenuToggle } from '@ionic/react';
import { home, search, notifications, cart, options, gift,wallet, megaphone, people, helpCircle,settings, help } from 'ionicons/icons'
import logo from '../../assets/images/logo-ionic-white.png'
import './Menu.css'

class Menu extends Component{
constructor(props:any){
    super(props);
}

render(){
    return(
        <IonPage>
            <IonMenu menuId="start" contentId="main" side="start" type="push" >
                <IonHeader >
                    <IonToolbar color="primary">
                        <IonRow class="ion-padding-horizontal ion-align-items-center">
                            <IonCol size="3" class="ion-padding-vertical ion-align-items-center ">
                                <IonAvatar class="ion-margin-vertical">
                            <IonImg src={logo}></IonImg>
                            </IonAvatar>
                            </IonCol>                            
                            <IonCol class="ion-padding-vertical ion-align-items-center">
                            <div className="ion-margin-vertical">
                                <h4 className="medium white ion-no-margin ion-margin-start"><strong>Harsh Nabera</strong></h4>
                                <h6 className="small white ion-no-margin ion-margin-start">View Profile</h6>
                            </div>
                            </IonCol>
                        </IonRow>
                        </IonToolbar>
                </IonHeader>

<IonContent>
    <IonList>
        <IonItem>
            <IonIcon icon={home} slot="start"></IonIcon>
            <IonLabel>Browse</IonLabel>
        </IonItem>
        <IonItem>
            <IonIcon icon={search} slot="start"></IonIcon>
            <IonLabel>Search</IonLabel>
        </IonItem>
        <IonItem>
            <IonIcon icon={notifications} slot="start"></IonIcon>
            <IonLabel>Notification</IonLabel>
        </IonItem>
        <IonItem>
            <IonIcon icon={cart} slot="start"></IonIcon>
            <IonLabel>Shopping Cart</IonLabel>
            <IonBadge color="danger" class="label-subtext">6</IonBadge>
        </IonItem>
        <IonItem>
            <IonIcon icon={options} slot="start"></IonIcon>
            <IonLabel>Order History</IonLabel>
        </IonItem>
        <IonItem>
        <IonIcon icon={wallet} slot="start"></IonIcon>
            <IonLabel>Wish Cash</IonLabel>
            <span className="label-subtext">: <span className="mycolor">$0.00</span></span>
        </IonItem>
        <IonItem>
            <IonIcon icon={gift} slot="start"></IonIcon>
            <IonLabel>Rewards</IonLabel>
            <span className="label-subtext">: <span className="mycolor">100 Points</span></span>

        </IonItem>
        <IonItem>
            <IonIcon icon={megaphone} slot="start"></IonIcon>
            <IonLabel>Apply Promo</IonLabel>
        </IonItem>
        <IonItem>
            <IonIcon icon={people} slot="start"></IonIcon>
            <IonLabel>Customer Support</IonLabel>
        </IonItem>
        <IonItem>
            <IonIcon icon={helpCircle} slot="start"></IonIcon>
            <IonLabel>FAQs</IonLabel>
        </IonItem>
        <IonItem>
            <IonIcon icon={settings} slot="start"></IonIcon>
            <IonLabel>Settings</IonLabel>
        </IonItem>
    </IonList>
</IonContent>
            </IonMenu>
                   </IonPage>
    )
}
}
export default Menu;