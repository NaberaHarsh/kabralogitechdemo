import React, { Component } from 'react'
import { IonPage, IonHeader, IonToolbar, IonSearchbar, IonMenuButton, IonButtons, IonContent, IonIcon, IonButton, IonTabs, IonTabBar, IonRouterOutlet, IonSegmentButton, IonLabel, IonSegment, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardTitle, IonCardHeader } from '@ionic/react'
import Menu from '../Menu/Menu';
import { filter, cart, search } from 'ionicons/icons'
import { menuController } from '@ionic/core';
import HomeJson from './HomeData';
import { Redirect } from 'react-router';


class Home extends Component {
    state:any;
    constructor(props: any) {
        super(props);
        this.state = {
            title: true,
            segmentTab: 'Popular',
            search:false
        };
    }

    handleSearch(){
        if(this.state.search==true){
            return(
                <Redirect from="/home" to="/search" />
            )
        }
    }

    open(){
        menuController.open('end')
        }

        segmentChanged = (value: any) => {
            this.setState({
                segmentTab: value
            })
        }
    render(){
    const { segmentTab } = this.state;
    
        return (
            <>
                <Menu />
                <IonPage id="main">
                    <IonHeader class="mybg" >
                        <IonToolbar color="primary" >
                            <IonButtons slot="start">
                                <IonMenuButton color="light" ></IonMenuButton>
                            </IonButtons>


                            <IonSearchbar slot="secondary" placeholder="I am shopping for..."  showCancelButton="focus" cancelButtonText="Custom Cancel" animated={true}
                            onIonFocus={()=>{
                                    this.setState({search:true});
                                    this.handleSearch()
                            }}
                            ></IonSearchbar>
                       <IonButtons slot="end">
                                <IonButton>
                                    <IonIcon style={{fontSize:'24px'}}  icon={cart} ></IonIcon>

                                </IonButton>
                                <IonButton onClick={this.open}>
                                    <IonIcon style={{fontSize:'24px'}} icon={filter}></IonIcon>

                                 </IonButton>
                            </IonButtons>
                        </IonToolbar >
                        <IonToolbar color="primary">
                            <IonSegment scrollable mode="md" value={segmentTab} onIonChange={(e) => this.segmentChanged(e.detail.value)} >
                                <IonSegmentButton value='Popular'>
                                    <IonLabel>Popular</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value='Recently Viewed'>
                                    <IonLabel>Recently Viewed</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value='Fashion'>
                                    <IonLabel>Fashion</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value='Tops'>
                                    <IonLabel>Tops</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value='Shoes'>
                                    <IonLabel>Shoes</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value='Automotive'>
                                    <IonLabel>Automotive</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value='Bottom'>
                                    <IonLabel>Bottom</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value='Watches'>
                                    <IonLabel>Watches</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value='Wallets'>
                                    <IonLabel>Wallets and Bags</IonLabel>
                                </IonSegmentButton>
                            </IonSegment> 
                                                   </IonToolbar>

                    </IonHeader>

                    {segmentTab === 'Popular' &&
                    <IonContent>
<IonGrid>
    <IonRow>
        {HomeJson.Product.map((data,index)=>{
            return(
            <IonCol sizeMd="3" sizeLg="3" sizeSm="6" sizeXs="6" >
                <IonCard routerLink={`/product_detail/${data.id}`} >
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
    {segmentTab === 'Recently Viewed' &&
                    <IonContent>
<IonGrid>
    <IonRow>
        {HomeJson.Product.map((data,index)=>{
            return(
            <IonCol sizeMd="3" sizeLg="3" sizeSm="6" sizeXs="6" >
                <IonCard routerLink={`/product_detail/${data.id}`} >
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
    {segmentTab === 'Fashion' &&
                    <IonContent>
<IonGrid>
    <IonRow>
        {HomeJson.Product.map((data,index)=>{
            return(
            <IonCol sizeMd="3" sizeLg="3" sizeSm="6" sizeXs="6" >
                <IonCard routerLink={`/product_detail/${data.id}`} >
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
    {segmentTab === 'Tops' &&
                    <IonContent>
<IonGrid>
    <IonRow>
        {HomeJson.Product.map((data,index)=>{
            return(
            <IonCol sizeMd="3" sizeLg="3" sizeSm="6" sizeXs="6" >
                <IonCard routerLink={`/product_detail/${data.id}`} >
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
    {segmentTab === 'Shoes' &&
                    <IonContent>
<IonGrid>
    <IonRow>
        {HomeJson.Product.map((data,index)=>{
            return(
            <IonCol sizeMd="3" sizeLg="3" sizeSm="6" sizeXs="6" >
                <IonCard routerLink={`/product_detail/${data.id}`} >
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
    {segmentTab === 'Automotive' &&
                    <IonContent>
<IonGrid>
    <IonRow>
        {HomeJson.Product.map((data,index)=>{
            return(
            <IonCol sizeMd="3" sizeLg="3" sizeSm="6" sizeXs="6" >
                <IonCard routerLink={`/product_detail/${data.id}`} >
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
    {segmentTab === 'Bottom' &&
                    <IonContent>
<IonGrid>
    <IonRow>
        {HomeJson.Product.map((data,index)=>{
            return(
            <IonCol sizeMd="3" sizeLg="3" sizeSm="6" sizeXs="6" >
                <IonCard routerLink={`/product_detail/${data.id}`} >
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
    {segmentTab === 'Watches' &&
                    <IonContent>
<IonGrid>
    <IonRow>
        {HomeJson.Product.map((data,index)=>{
            return(
            <IonCol sizeMd="3" sizeLg="3" sizeSm="6" sizeXs="6" >
                <IonCard routerLink={`/product_detail/${data.id}`} >
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

        {segmentTab === 'Wallets' &&
                    <IonContent>
<IonGrid>
    <IonRow>
        {HomeJson.Product.map((data,index)=>{
            return(
            <IonCol sizeMd="3" sizeLg="3" sizeSm="6" sizeXs="6" >
                <IonCard routerLink={`/product_detail/${data.id}`} >
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
            </>
        )
    }
}

export default Home;