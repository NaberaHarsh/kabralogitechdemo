import React, { useEffect,useState } from 'react'
import { connect } from 'react-redux'
import { fetch } from '../redux'
import { Container, Paper, Card,Button, CardContent, Grid, CardMedia, Typography,CardActions } from '@material-ui/core'
import StarRateIcon from '@material-ui/icons/StarRate';
import CustomizedSnackbars from './Snackbar';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>
  createStyles({
    card_actions: {
        display: 'flex',
        flexDirection:'column',
        alignItems: 'flex-end',
      }
,  }),
);




function Product ({userData,fetchData,props,handleData}){
const [toast,isToastOpen] = React.useState(false);
const [message,setMessage] =React.useState("");
const [type,setType] =React.useState("");
const classes = useStyles();

   useEffect(()=>{
       fetchData() 
    },[] )

const handleAddedData = () => { 
isToastOpen(true)
setMessage("Added to cart")
setType("success")

    }
   return userData.loading ? (
    <h2>loading</h2>    )
    : userData.error ? (
        <h2>{userData.error}</h2>
    ) :
    (
        <div>
            <br/>
            <br></br>
            <br></br>
            <Container maxWidth="lg">
                <Paper elevation={2} style={{padding:5}} >

                
            <h2>Products</h2>
            <div>
                <Grid container spacing={2}>
                    {userData && userData.data && userData.data.map((users,index)=>
                    <Grid 
                    style={{ textAlign: "center" }}
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    key={index}
                  >
              <Card style={{margin:10, paddingtop:10 ,backgroundColor:"#F0FAF5", height:400 }}>
                  <CardContent>
                      
                          <img src={users.filename} height="180px" width="200px" ></img>
                          <Typography component="h6" variant="h6">
            {users.title}
          </Typography>  
          <Typography>
            {users.description}</Typography>    
            
            <Grid container spacing={48}>
                <Grid md={6} lg={6} sm={6} xs={6} >
                <Typography >Price: ${users.price}</Typography>

                </Grid>
                <Grid md={6} lg={6} sm={6} xs={6} >                
                
                <Typography>Rating:{users.rating}<StarRateIcon style={{ verticalAlign:'bottom'}} /></Typography>

                </Grid>

            </Grid>
          <CardActions className={classes.card_actions}>
              
                <Button  variant="contained" color='primary' style={{width:'100%'}} onClick={()=>{handleData(users); handleAddedData();}}>Add To Cart</Button>
            </CardActions>        
                  </CardContent>
              </Card>
              </Grid>

              )}

                </Grid>
            
        </div>
        </Paper>
            </Container>
            <CustomizedSnackbars
                isOpen ={toast}
                message = {message}
                type = {type}
                handleClose={() => isToastOpen(false) }
                />
        </div>
    )
}


const mapStateToProps = state =>{
    return{
        userData: state.data
    }
    
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchData: () => dispatch(fetch())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product);