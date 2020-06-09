import React, { Component, Children } from 'react'
import { IonPage, IonHeader, IonToolbar,IonAvatar,IonImg, IonButtons, IonButton, IonIcon, IonCardHeader, IonText, IonGrid, IonRow, IonCol, IonCard, IonCardTitle, IonCardContent, IonLabel, IonSegmentButton, IonSegment, IonContent, IonSlide, IonSlides, IonItemDivider, IonProgressBar, IonList, IonFooter } from '@ionic/react';
import { cart, search, arrowBack,caretDown,image, caretUp, shareSocial, logoInstagram, heartOutline, starOutline, star } from 'ionicons/icons'
import HomeJson from './HomeData';
import './ExpendableList.css'
import logo from '../../assets/images/profile.jpg'
import Data from './HomeData';


class ProductDetails extends Component {
    state: any;
    props: any;
    constructor(props: any) {
        super(props);
        this.state = {
            segmentTab: 'Overview',
            selectedData: [],
            relatedData: [],
            num: props.match.params.id,
            shownGroup: 0


        }
    }
    toggleGroup(group: any) {
        if (this.isGroupShown(group)) {
            this.setState({
                shownGroup: true
            })
        } else {
            this.setState({
                shownGroup: group
            })
        }
    };

    isGroupShown(group: any) {
        const {
            shownGroup
        } = this.state;
        return shownGroup === group;
    };

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
                <>
                        {selectedData.map((data: any,index:number) => {
                            return (
                                <>
                                <IonContent>
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
<IonRow>     <IonLabel><h2>Sold By</h2></IonLabel>
</IonRow>

<IonRow>
        <IonCol sizeMd="1" sizeLg="1"  sizeSm="3" sizeXs="3">
    <IonAvatar class="ion-margin-vertical">
                                        <IonImg  src={data.img1}></IonImg>
                                    </IonAvatar>
    </IonCol>
    <IonCol sizeMd="8" sizeLg="8"  sizeSm="6" sizeXs="6">
        <IonLabel ><h2> Seller</h2></IonLabel>
        <IonRow>
            <IonCol>
             <IonText> 10890 Ratings </IonText> <br/>
            </IonCol>
</IonRow>
</IonCol>
</IonRow>
<IonItemDivider></IonItemDivider>
<IonRow>
    <IonCol>
    <IonLabel className='ion-no-padding LAbelHeightExpandable'>
    <IonButton className="button-black ion-button-css" expand="full" slot="start" onClick={() => this.toggleGroup(index)}>
    <span className="btn-title">Item Specification</span>
    <IonIcon slot="end" className='endItem' icon={this.isGroupShown(index) ? `${caretDown}` : `${caretUp}`}></IonIcon>
    </IonButton>
    {this.isGroupShown(index)  ? 
        <IonText>{data.specification}</IonText>
    : null
    }
    <IonItemDivider></IonItemDivider>

    </IonLabel>
    </IonCol>
</IonRow>
<IonRow>
    <IonCol>
    <IonLabel className='ion-no-padding LAbelHeightExpandable'>
    <IonButton className="button-black ion-button-css" expand="full" slot="start" onClick={() => this.toggleGroup(index)}>
    <span className="btn-title">Description</span>
    <IonIcon slot="end" className='endItem' icon={this.isGroupShown(index) ? `${caretDown}` : `${caretUp}`}></IonIcon>
    </IonButton>
    {this.isGroupShown(index)  ? 
        <IonText>{data.description}</IonText>
    : null
    }
    <IonItemDivider></IonItemDivider>

    </IonLabel>
    </IonCol>
</IonRow>
<IonRow>
    <IonCol>
    <IonLabel className='ion-no-padding LAbelHeightExpandable'>
    <IonButton className="button-black ion-button-css" expand="full" slot="start" onClick={() => this.toggleGroup(index)}>
    <span className="btn-title">Buyer Gurantee</span>
    <IonIcon slot="end" className='endItem' icon={this.isGroupShown(index) ? `${caretDown}` : `${caretUp}`}></IonIcon>
    </IonButton>
    {this.isGroupShown(index)  ? 
        <IonText>{data.gurantee}</IonText>
    : null
    }
    <IonItemDivider></IonItemDivider>

    </IonLabel>
    </IonCol>
</IonRow>
<IonRow>
    <IonCol>
    <IonLabel className='ion-no-padding LAbelHeightExpandable'>
    <IonButton className="button-black ion-button-css" expand="full" slot="start" onClick={() => this.toggleGroup(index)}>
    <span className="btn-title" slot="start">Shipping Information</span>
    <IonIcon slot="end" className='endItem' icon={this.isGroupShown(index) ? `${caretDown}` : `${caretUp}`}></IonIcon>
    </IonButton>
    {this.isGroupShown(index)  ? 
        <IonText>Standard Shipping {data.shipping}</IonText>
    : null
    }
    <IonItemDivider></IonItemDivider>

    </IonLabel>
    </IonCol>
</IonRow>
<IonRow>
    <IonCol>
    <IonLabel><h1 style={{ textAlign: "center" }}>Recent Reviews</h1></IonLabel>
    </IonCol>
</IonRow>
<IonRow>
    <IonCol sizeMd="1" sizeLg="1"  sizeSm="3" sizeXs="3">
    <IonAvatar class="ion-margin-vertical">
                                        <IonImg  src={logo}></IonImg>
                                    </IonAvatar>
    </IonCol>
    <IonCol sizeMd="8" sizeLg="8"  sizeSm="6" sizeXs="6">
        <IonLabel ><h2> Sample Name</h2></IonLabel>
        <IonRow>
            <IonCol>
             <IonText> {data.review}</IonText> <br/>
             <img src={data.img1} style={{height:80}} ></img> 
            </IonCol>
        </IonRow>
    </IonCol>
    <IonCol sizeMd="3" sizeLg="3"  sizeSm="3" sizeXs="3" style={{textAlign:'right'}} ><IonText  color="primary"><IonIcon  icon={star} /><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={starOutline} /></IonText></IonCol>
</IonRow>
                                </IonGrid>
</IonContent>
<IonFooter class="footer ion-align-items-center">
    <div style={{backgroundColor:'black'}}>
    <IonRow class="ion-align-items-center">
        <IonCol class="ion-padding">
            <IonText>
<h3 className="foot-highlight ion-no-margin" style={{color:'white'}}>{data.price}</h3></IonText>
                    </IonCol>
                    <IonCol size="4">
                        <IonButton  color="warning"  expand="block"><strong>Buy</strong></IonButton>
                    </IonCol>
    </IonRow>
    </div>
</IonFooter>
</>
                            )
                        })}
                        </>
                    
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

{segmentTab == 'Product Reviews' &&
                    <IonContent>
                                {selectedData.map((data: any) => {
                                    return (
                                        <IonGrid>

                                       <IonRow>
                                           <IonCol><h1 style={{textAlign:'center'}}>Overall</h1></IonCol>
                                       </IonRow>
                                       <IonRow>
                                       <IonCol><div style={{textAlign:'center'}}> 4 <IonText color="primary"><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={starOutline} /> </IonText></div></IonCol>
                                       </IonRow>
                                       <IonRow>
                                           <IonCol>
                                               <div style={{textAlign:'center'}}>11 Ratings</div>
                                           </IonCol>
                                       </IonRow>
                                       <IonItemDivider ></IonItemDivider>
<br/>
                                       <div className="sep"></div>
<IonRow  class="row ion-align-items-center">
  <IonButton style={{marginLeft:'3px'}} fill="outline"  color="medium" class="btn ion-no-padding ion-no-margin"><IonText style={{paddingLeft:'5px', paddingRight:'5px'}} class="filter-btn">All</IonText></IonButton>
  <IonButton style={{marginLeft:'3px'}} fill="outline"  color="medium" class="btn ion-no-padding ion-no-margin"><IonText style={{paddingLeft:'5px', paddingRight:'5px'}} class="filter-btn"><IonIcon icon={image}></IonIcon></IonText></IonButton>
  <IonButton style={{marginLeft:'3px'}} fill="outline"  color="medium" class="btn ion-no-padding ion-no-margin"><IonText style={{paddingLeft:'5px', paddingRight:'5px'}} class="filter-btn">Top Rated</IonText></IonButton>
  <IonButton style={{marginLeft:'3px'}} fill="outline"  color="medium" class="btn ion-no-padding ion-no-margin"><IonText style={{paddingLeft:'5px', paddingRight:'5px'}} class="filter-btn"><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={star} /></IonText></IonButton>
  <IonButton style={{marginLeft:'3px'}} fill="outline"  color="medium" class="btn ion-no-padding ion-no-margin"><IonText style={{paddingLeft:'5px', paddingRight:'5px'}} class="filter-btn"><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={star} /></IonText></IonButton>
  <IonButton style={{marginLeft:'3px'}} fill="outline"  color="medium" class="btn ion-no-padding ion-no-margin"><IonText style={{paddingLeft:'5px', paddingRight:'5px'}} class="filter-btn"><IonIcon icon={star}/><IonIcon icon={star} /><IonIcon icon={star} /></IonText></IonButton>
  <IonButton style={{marginLeft:'3px'}} fill="outline"  color="medium" class="btn ion-no-padding ion-no-margin"><IonText style={{paddingLeft:'5px', paddingRight:'5px'}} class="filter-btn"><IonIcon icon={star}/><IonIcon icon={star} /></IonText></IonButton>
  <IonButton style={{marginLeft:'3px'}} fill="outline"  color="medium" class="btn ion-no-padding ion-no-margin"><IonText style={{paddingLeft:'5px', paddingRight:'5px'}} class="filter-btn"><IonIcon icon={star} ></IonIcon></IonText></IonButton>
</IonRow>
<br/>
                                       <IonRow>
    <IonCol sizeMd="1" sizeLg="1"  sizeSm="3" sizeXs="3">
    <IonAvatar class="ion-margin-vertical">
                                        <IonImg  src={data.img2}></IonImg>
                                    </IonAvatar>
    </IonCol>
    <IonCol sizeMd="8" sizeLg="8"  sizeSm="6" sizeXs="6">
        <IonLabel ><h2> Sample Name</h2></IonLabel>
        <IonRow>
            <IonCol>
             <IonText> {data.review}</IonText> <br/>
             <img src={data.img1} style={{height:80}} ></img> 
            </IonCol>
        </IonRow>
    </IonCol>
    <IonCol sizeMd="3" sizeLg="3"  sizeSm="3" sizeXs="3" style={{textAlign:'right'}} ><IonText  color="primary"><IonIcon  icon={star} /><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={starOutline} /></IonText></IonCol>
</IonRow>
   <IonItemDivider></IonItemDivider>
   <IonRow>
    <IonCol sizeMd="1" sizeLg="1"  sizeSm="3" sizeXs="3">
    <IonAvatar class="ion-margin-vertical">
                                        <IonImg  src={data.img3}></IonImg>
                                    </IonAvatar>
    </IonCol>
    <IonCol sizeMd="8" sizeLg="8"  sizeSm="6" sizeXs="6">
        <IonLabel ><h2> Sample Name</h2></IonLabel>
        <IonRow>
            <IonCol>
             <IonText> {data.review}</IonText> <br/>
             <img src={data.img1} style={{height:80}} ></img> 
            </IonCol>
        </IonRow>
    </IonCol>
    <IonCol sizeMd="3" sizeLg="3"  sizeSm="3" sizeXs="3" style={{textAlign:'right'}} ><IonText  color="primary"><IonIcon  icon={star} /><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={starOutline} /></IonText></IonCol>
</IonRow>
   
                                       </IonGrid>

                                    )
                                })}
                    </IonContent>
                }
{segmentTab == 'Store Reviews' &&
                    <IonContent>
                                {selectedData.map((data: any) => {
                                    return (
                                        <IonGrid>

                                       <IonRow>
                                           <IonCol><h1 style={{textAlign:'center'}}>Overall</h1></IonCol>
                                       </IonRow>
                                       <IonRow>
                                       <IonCol><div style={{textAlign:'center'}}> 3 <IonText color="primary"><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={starOutline} /><IonIcon icon={starOutline} /> </IonText></div></IonCol>
                                       </IonRow>
                                       <IonRow>
                                           <IonCol>
                                               <div style={{textAlign:'center'}}>11 Ratings</div>
                                           </IonCol>
                                       </IonRow>
                                       <IonItemDivider></IonItemDivider>
<br/>
                                       <div className="sep"></div>
<IonRow  class="row ion-align-items-center">
  <IonButton  style={{marginLeft:'3px'}} fill="outline"  color="medium" class="btn ion-no-padding ion-no-margin"><IonText style={{paddingLeft:'5px', paddingRight:'5px'}} class="filter-btn">All</IonText></IonButton>
  <IonButton  style={{marginLeft:'3px'}} fill="outline"  color="medium" class="btn ion-no-padding ion-no-margin"><IonText style={{paddingLeft:'5px', paddingRight:'5px'}} class="filter-btn"><IonIcon icon={image}></IonIcon></IonText></IonButton>
  <IonButton  style={{marginLeft:'3px'}} fill="outline"  color="medium" class="btn ion-no-padding ion-no-margin"><IonText style={{paddingLeft:'5px', paddingRight:'5px'}} class="filter-btn">Top Rated</IonText></IonButton>
  <IonButton  style={{marginLeft:'3px'}} fill="outline"  color="medium" class="btn ion-no-padding ion-no-margin"><IonText style={{paddingLeft:'5px', paddingRight:'5px'}} class="filter-btn"><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={star} /></IonText></IonButton>
  <IonButton  style={{marginLeft:'3px'}} fill="outline"  color="medium" class="btn ion-no-padding ion-no-margin"><IonText style={{paddingLeft:'5px', paddingRight:'5px'}} class="filter-btn"><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={star} /></IonText></IonButton>
  <IonButton  style={{marginLeft:'3px'}} fill="outline"  color="medium" class="btn ion-no-padding ion-no-margin"><IonText style={{paddingLeft:'5px', paddingRight:'5px'}} class="filter-btn"><IonIcon icon={star}/><IonIcon icon={star} /><IonIcon icon={star} /></IonText></IonButton>
  <IonButton  style={{marginLeft:'3px'}} fill="outline"  color="medium" class="btn ion-no-padding ion-no-margin"><IonText style={{paddingLeft:'5px', paddingRight:'5px'}} class="filter-btn"><IonIcon icon={star}/><IonIcon icon={star} /></IonText></IonButton>
  <IonButton  style={{marginLeft:'3px'}} fill="outline"  color="medium" class="btn ion-no-padding ion-no-margin"><IonText style={{paddingLeft:'5px', paddingRight:'5px'}} class="filter-btn"><IonIcon icon={star} ></IonIcon></IonText></IonButton>
</IonRow>
<br/>
                                       <IonRow>
    <IonCol sizeMd="1" sizeLg="1"  sizeSm="3" sizeXs="3">
    <IonAvatar class="ion-margin-vertical">
                                        <IonImg  src={data.img2}></IonImg>
                                    </IonAvatar>
    </IonCol>
    <IonCol sizeMd="8" sizeLg="8"  sizeSm="6" sizeXs="6">
        <IonLabel ><h2> Sample Name</h2></IonLabel>
        <IonRow>
            <IonCol>
             <IonText> {data.review}</IonText> <br/>
             <img src={data.img1} style={{height:80}} ></img> 
            </IonCol>
        </IonRow>
    </IonCol>
    <IonCol sizeMd="3" sizeLg="3"  sizeSm="3" sizeXs="3" style={{textAlign:'right'}} ><IonText  color="primary"><IonIcon  icon={star} /><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={starOutline} /></IonText></IonCol>
</IonRow>
   <IonItemDivider></IonItemDivider>
  
   
                                       </IonGrid>

                                    )
                                })}
                    </IonContent>
                }
               


            </IonPage>
        )
    }
}
export default ProductDetails