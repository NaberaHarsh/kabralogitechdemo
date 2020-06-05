import React, { Component } from 'react'
import { IonPage, IonMenu, IonHeader, IonImg, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel, IonGrid, IonRow, IonCol, IonAvatar, IonBadge, IonMenuToggle, IonRouterOutlet, IonButton, IonCheckbox, IonRadioGroup, IonRadio, IonFooter } from '@ionic/react';
import { home, star, search, notifications, cart, options, gift, wallet, megaphone, people, helpCircle, settings, help } from 'ionicons/icons'
import logo from '../../assets/images/profile.jpg'
import './Menu.css'


class Menu extends Component {
    props: any = {}
    state: any;
    constructor(props: any) {
        super(props);
        this.state = {
            color: false,
            rating: false,
            selected: '4',
            colorNames: [
                {name: 'Black'},
                {name: 'Brown'},
                {name: 'Red'},
                {name: 'Green'},
                {name: 'Grey'},
                {name: 'Yellow'},
                {name: 'Blue'},
                {name: 'Pink'},
                {name: 'Orange'},
                {name: 'Purple'},
                {name: 'White'},

            ]
        }
    }

    colorToggle = () => {
        const { color } = this.state
        this.setState({
            color: !color
        })
    }
    ratingToggle = () => {
        const { rating } = this.state
        this.setState({
            rating: !rating
        })
    }

    render() {
        const { color, rating, selected, colorNames } = this.state;
        return (
            <IonPage>
                <IonMenu contentId="main" side="start" type="push" >
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
                            <IonMenuToggle>
                            <IonItem routerLink="/home">
                                <IonIcon icon={home} slot="start"></IonIcon>
                                <IonLabel>Browse</IonLabel>
                            </IonItem>
                            </IonMenuToggle>
                            <IonMenuToggle>
                            <IonItem>
                                <IonIcon icon={search} slot="start"></IonIcon>
                                <IonLabel>Search</IonLabel>
                            </IonItem>
                            </IonMenuToggle>
                            <IonMenuToggle>
                            <IonItem>
                                <IonIcon icon={notifications} slot="start"></IonIcon>
                                <IonLabel>Notification</IonLabel>
                            </IonItem>
                            </IonMenuToggle>
                            <IonMenuToggle>
                            <IonItem>
                                <IonIcon icon={cart} slot="start"></IonIcon>
                                <IonLabel>Shopping Cart</IonLabel>
                                <IonBadge color="danger" class="label-subtext">6</IonBadge>
                            </IonItem>
                            </IonMenuToggle>
                            <IonMenuToggle>
                            <IonItem>
                                <IonIcon icon={options} slot="start"></IonIcon>
                                <IonLabel>Order History</IonLabel>
                            </IonItem>
                            </IonMenuToggle>
                            <IonMenuToggle>
                            <IonItem>
                                <IonIcon icon={wallet} slot="start"></IonIcon>
                                <IonLabel>Wish Cash</IonLabel>
                                <span className="label-subtext">: <span className="mycolor">$0.00</span></span>
                            </IonItem>
                            </IonMenuToggle>
                            <IonMenuToggle>
                            <IonItem>
                                <IonIcon icon={gift} slot="start"></IonIcon>
                                <IonLabel>Rewards</IonLabel>
                                <span className="label-subtext">: <span className="mycolor">100 Points</span></span>

                            </IonItem>
                            </IonMenuToggle>
                            <IonMenuToggle>
                            <IonItem>
                                <IonIcon icon={megaphone} slot="start"></IonIcon>
                                <IonLabel>Apply Promo</IonLabel>
                            </IonItem>
                            </IonMenuToggle>
                            <IonMenuToggle>
                            <IonItem>
                                <IonIcon icon={people} slot="start"></IonIcon>
                                <IonLabel>Customer Support</IonLabel>
                            </IonItem>
                            </IonMenuToggle>
                            <IonMenuToggle>
                            <IonItem>
                                <IonIcon icon={helpCircle} slot="start"></IonIcon>
                                <IonLabel>FAQs</IonLabel>
                            </IonItem>
                            </IonMenuToggle>
                            <IonMenuToggle>
                            <IonItem>
                                <IonIcon icon={settings} slot="start"></IonIcon>
                                <IonLabel>Settings</IonLabel>
                            </IonItem>
                            </IonMenuToggle>
                        </IonList>
                    </IonContent>
                </IonMenu>
                <IonMenu contentId="main" side="end" type="push" >
                    <IonHeader>
                        <IonToolbar color="primary">
                            <IonLabel>Refine</IonLabel>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <IonList className="ion-margin-vertical">
                            <IonItem button onClick={() => this.colorToggle()} detail={true}>
                                <IonLabel>Color</IonLabel>
                            </IonItem>
                            {color &&
                                <IonList className="marginStart">
                                    {colorNames.map((p: any) => {
                                        return (
                                            <IonItem>
                                                <IonLabel>{p.name}</IonLabel>
                                                <IonCheckbox slot="end"></IonCheckbox>
                                            </IonItem>
                                        )
                                    })}
                                </IonList>

                            }
                            <IonItem button onClick={() => this.ratingToggle()} detail={true}>
                                <IonLabel>Rating</IonLabel>
                            </IonItem>
                            {rating &&

                                <IonList className="marginStart">
                                    <IonRadioGroup value={selected} onIonChange={e => this.setState({ selected: e.detail.value })}>
                                        <IonItem>
                                            <IonLabel><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={star} />  & up
        </IonLabel>
                                            <IonRadio></IonRadio>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={star} />  & up
        </IonLabel>
                                            <IonRadio></IonRadio>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel><IonIcon icon={star} /><IonIcon icon={star} />  & up
        </IonLabel>
                                            <IonRadio></IonRadio>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel><IonIcon icon={star} />  & up
        </IonLabel>
                                            <IonRadio></IonRadio>
                                        </IonItem>

                                    </IonRadioGroup>

                                </IonList>
                            }
                        </IonList>
                        <IonFooter className="ion-no-border">
                            <IonToolbar>
                                <IonRow>
                                    <IonCol size="6">
                                        <IonButton color="light" expand="block">Cancel</IonButton>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonButton color="primary" expand="block">Apply</IonButton>
                                    </IonCol>
                                </IonRow>
                            </IonToolbar>
                        </IonFooter>

                    </IonContent>

                </IonMenu>
            </IonPage>
        )
    }
}
export default Menu;