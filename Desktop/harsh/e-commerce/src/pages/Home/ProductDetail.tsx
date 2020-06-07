import React, { Component, Children } from 'react'
import { IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonCardHeader, IonText, IonGrid, IonRow, IonCol, IonCard, IonCardTitle, IonCardContent, IonLabel, IonSegmentButton, IonSegment, IonContent, IonSlide, IonSlides, IonItemDivider, IonProgressBar } from '@ionic/react';
import { cart, search, arrowBack, shareSocial, logoInstagram, heartOutline, starOutline, star } from 'ionicons/icons'
import HomeJson from './HomeData';

class ProductDetails extends Component {
    state: any;
    props: any;
    constructor(props: any) {
        super(props);
        this.state = {
            segmentTab: 'Overview',
            selectedData: [],
            relatedData: [],
            num: props.match.params.id

        }
    }

    componentDidMount() {
        console.log(this.state.num);
        let isAvail = HomeJson.Product.filter(item => item.id == this.state.num);
        let related = HomeJson.Product.filter(item => item.id != this.state.num);
        let data1 = Array.from(isAvail);
        let data2 = Array.from(related);
        console.log(data1, data2);
        this.setState({ selectedData: data1 })
        this.setState({ relatedData: data2 })
        console.log(this.state.selectedData);
    }



    segmentChanged = (value: any) => {
        this.setState({
            segmentTab: value
        })
    }

    render() {

        const { segmentTab, selectedData, relatedData } = this.state;
        return (
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


                {segmentTab === 'Overview' &&
                    <IonContent>
                        {selectedData.map((data: any) => {
                            return (
                                <IonGrid>
                                    <IonSlides>

                                        <IonSlide>
                                            <IonCard style={{ height: 480 }} >
                                                <img src={data.img1}></img>

                                            </IonCard>
                                        </IonSlide>
                                        <IonSlide>
                                            <IonCard style={{ height: 480 }}>
                                                <img src={data.img2}></img>
                                            </IonCard>
                                        </IonSlide>

                                        <IonSlide>
                                            <IonCard style={{ height: 480 }}>
                                                <img src={data.img3}></img>

                                            </IonCard>
                                        </IonSlide>
                                    </IonSlides>
                                    <IonRow>
                                        <IonCol sizeSm="8" sizeXs="8">
                                            <IonLabel>
                                                <h1>
                                                    {data.name}</h1>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol sizeSm="4" sizeXs="4">
                                            <IonText class="ion-float-end" color="dark" >
                                                <h1 className=" ion-no-margin ion-text-end"><IonIcon icon={shareSocial} />   <IonIcon icon={logoInstagram} />   <IonIcon icon={heartOutline} /> </h1>
                                            </IonText>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol><IonText color="primary"><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={starOutline} /> (1080 store ratings) </IonText></IonCol>
                                    </IonRow>
                                    <IonItemDivider></IonItemDivider>
                                    <IonRow>
                                        <IonCol>
                                        <IonLabel><h1 style={{ textAlign: "center" }}>Sizing</h1></IonLabel>

                                        </IonCol>
                                    </IonRow>

                                    <IonRow>
                                    <IonCol size="3"><IonLabel>Too Small </IonLabel></IonCol>
                                        <IonCol size="9">
                                            <IonProgressBar color="primary" value={0.25} style={{ width: '250px', height: '10px' }}></IonProgressBar>
                                        </IonCol>                                    </IonRow>
                                    <IonRow>
                                        <IonCol size="3">
                                            <IonLabel>Just Right </IonLabel></IonCol>
                                        <IonCol size="9">                <IonProgressBar color="primary" value={0.75} style={{ width: '250px', height: '10px' }}></IonProgressBar>
                                        </IonCol>
                                                                             

                                    </IonRow>
                                    <IonRow>
                                    <IonCol size="3"><IonLabel>Too Large  </IonLabel></IonCol>
                                        <IonCol size="9">
                                            <IonProgressBar color="primary" value={0.5} style={{ width: '250px', height: '10px' }}></IonProgressBar>
                                        </IonCol>
                                    </IonRow>
<IonItemDivider></IonItemDivider>
<IonRow>
    <IonCol>
        
    </IonCol>
</IonRow>
                                </IonGrid>

                            )
                        })}
                    </IonContent>
                }
                {segmentTab == 'Related' &&
                    <IonContent>
                        <IonGrid>
                            <IonRow>
                                {relatedData.map((data: any) => {
                                    return (
                                        <IonCol sizeMd="4" sizeLg="4" sizeSm="12" sizeXs="12" >
                                            <IonCard >
                                                <img src={data.img1}></img>
                                                <IonCardHeader>
                                                    <IonCardTitle >{data.price}
                                                    </IonCardTitle >
                                                </IonCardHeader>
                                                <IonCardContent>{data.boughtby}+ bought this</IonCardContent>
                                            </IonCard>
                                        </IonCol>
                                    )
                                })}
                            </IonRow>
                        </IonGrid>
                    </IonContent>
                }

            </IonPage>
        )
    }
}
export default ProductDetails