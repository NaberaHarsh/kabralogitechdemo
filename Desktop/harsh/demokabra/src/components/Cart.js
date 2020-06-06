import React from 'react'
import { Container, Paper, Grid, Card,Button,CardActions,Typography,CardContent,Tooltip,Backdrop,Fade,Modal } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const styles = theme => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    paper: {
      textAlign:'center',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #515151',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  });
  

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            quantity:1,
            cartItem:this.props.cartData,
            open:false
        }
    }

    IncrementItem(p) {
        let plus = this.state.quantity
        this.setState({ quantity: ++plus });
      }
      DecreaseItem(p) {
    let minus = this.state.quantity;
        if(minus === 0)
        {this.setState({quantity:0})
      }
      else{
        this.setState({quantity:--minus})
      }
      if(minus==0){
          this.state.cartItem.splice(p,1);
          this.props.reduce();
      }
    }

    erase(item){
         this.state.cartItem.splice(item,1);
        
    }
    handleOpen = () => {
        this.setState({open:true})
      };
    
       handleClose = () => {
        this.setState({open:false});
        this.state.cartItem.splice(0,this.state.cartItem.length);
      };

    render() {
        const { classes } = this.props

        const { quantity } = this.state;
        if(this.props.cartData.length > 0) {
        return (
            <div style={{ padding: 5 }}>
                <Container maxWidth="lg">
                <br></br>
                            <br></br>
                            <br></br>
                    <Paper elevation={1} style={{ padding: 5 }}>
                    <p style={{textAlign:'initial', paddingLeft: "28px", fontSize: "16px" }}>
                {" "}
                Shopping Cart
              </p>
                    </Paper>
                    <br/>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={12} xl={8} lg={8} md={8} >
                            {
                                this.state.cartItem.map((data,index) => {
                                    return (
                                        <Card style={{ marginBottom: '8px', padding: '20px' }}>
                                            <Grid container spacing={2}>
                                                <Grid md={4} lg={4} sm={6} xs={6} >
                                                    <img src={data.filename}
                                                        class="img-fluid"
                                                        style={{
                                                            maxHeight: 120,
                                                            maxWidth: 120,
                                                            height: "auto",
                                                            width: "100%",
                                                            border: "solid #515151 1px"
                                                        }}></img>
                                                </Grid>
                                                <Grid md={8} lg={8} sm={6} xs={6}>
                                                    <Grid container spacing={2} style={{paddingTop:'15px'}} >
                                                        <Grid md={3} lg={3} sm={12} xs={12}>
                                                            {data.title}
                                                        </Grid>
                                                        <Grid md={3} lg={3} sm={12} xs={12} >
                                                        {quantity} x  ${data.price}
                                                        </Grid>
                                                        <Grid md={2} lg={2} sm={12} xs={12}>
                                                        <b>$
                                                        {Math.round(quantity*data.price).toFixed(2)}</b>

                                                        </Grid>
                                                        <Grid md={2} lg={2} sm={6} xs={6}
                                                            style={{ textAlign: "center" }}>
                                                            <AddIcon
                                onClick={() => {
                                  this.IncrementItem(data);
                                }}
                                style={{
                                  display: "inline",
                                  color: "black",
                                  height: "20px",
                                  width: "20px",
                                  paddingTop:'0px'
                                }}
                              />
                               <div
                                style={{
                                  display: "inline",
                                  verticalAlign: "super",
                                  paddingLeft: "4px",
                                  color: "black",
                                  fontWeight: "bold",
                                  paddingRight: "4px",
                                  paddingTop:'0px'
                                }}
                              >
                                {this.state.quantity}
                              </div>
                              <RemoveIcon
                                style={{
                                  display: "inline",
                                  color: "black",
                                  height: "20px",
                                  width: "20px",
                                  paddingTop:'0px'
                                }}
                                onClick={() => {
                                  this.DecreaseItem(data);
                                }}
                                
                              />

                                                        </Grid>
                                                        <Grid md={2} lg={2} sm={6} xs={6}>
                                                        <Tooltip title="Delete">
                                <DeleteIcon
                                  style={{
                                    alignItems: "center",
                                    height: "20px",
                                    width: "20px",
                                    paddingTop:'2px'
                                  }}
                                  onClick={() =>
                                    {this.erase(data);}
                                  }
                                  
                                />
                              </Tooltip>
                                                        </Grid>

                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Card>
                                    )
                                })
                            }
                        </Grid>
                        <Grid item xs={12} sm={12} xl={4} lg={4} md={4} >
                        <Card >
                    <CardContent >
                      <Typography gutterBottom variant="h6"  style={{textDecoration:'underline'}}>
                        CHECKOUT
                      </Typography>
                      <p style={{ color:'black', fontSize:'14px'}}>
                      <Grid container spacing={2}>
                        <Grid md={6} lg={6} sm={6} xs={6} style={{textAlign:'initial'}}>TOTAL:{" "}</Grid>
                        <Grid md={6} lg={6} sm={6} xs={6} style={{textAlign:'end'}}>
                        ${this.props.cartData.reduce(
                          (sum, p) => sum + Math.round(quantity*p.price),
                          0
                        )}
                          
                          </Grid>
                          </Grid>
                      </p>
                      
                    </CardContent>
                  
                  <CardActions style={{alignItems:'center'}}>
                      <Button
                      fullWidth
                        variant="contained"
                        style={{ backgroundColor: "black", color: "white" }}
                        onClick={() => {
                         this.handleOpen()
                        }}
                      >
                        Proceed To Buy
                      </Button>
 
                     <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={this.state.open}
        onClose={this.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={this.state.open}>
          <div className={classes.paper} >
            <h2 id="transition-modal-title">Your Order Is Placed</h2>
            <Link to="/product" style={{color:"inherit", textDecoration:'none'}}>
 <Button variant="contained" color="primary" style={{textAlign:'center'}} onClick={()=> this.handleClose()}>Okay</Button>
 </Link>

</div>
        </Fade>
      </Modal>
                  </CardActions>
                </Card>
 
                        </Grid>

                                           </Grid>
                </Container>

            </div>
        )
    }
    else{
        return(
            <div style={{ padding: "20px" }}>
          <Paper style={{ width: "100% ! important" }}>
            <div
              style={{
                alignItems: "center",
                textAlign: "center",
                paddingTop: "100px",
                paddingBottom: "80px"
              }}
            >
              <div>
                <RemoveShoppingCartIcon
                  style={{ color: "grey", height: "100px ", width: "100%" }}
                />
              </div>
              <br />
              <div style={{ color: "grey", fontSize: "24px" }}>
                Your cart is empty !!!
              </div>
            </div>
          </Paper>
        </div>

        )
    }
    }
}
export default withStyles(styles)(Cart);