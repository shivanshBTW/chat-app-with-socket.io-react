import React, {Component} from 'react';
import Paper from "@material-ui/core/Paper";
import {withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import ChatBubble from "../ChatBubble/ChatBubble";
import Container from "@material-ui/core/Container";
import {connect} from "react-redux";

const styles = theme => ({
   root: {
      margin: `${theme.spacing(3)}px ${theme.spacing(5)}px`,
      padding: theme.spacing(3),
      height: '100%'
   },
   button: {
      margin: theme.spacing(1),
      padding: `${theme.spacing(1.9)}px ${theme.spacing(1)}px`,
   }
});

class ChatScreen extends Component {
   constructor(props) {
      super(props);
      this.state = {
         input: ''
      }
   }

   handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
   };

   render() {
      let {classes} = this.props;
      return (
         <div>
            <Paper variant="elevation" elevation={3} className={classes.root}>
               {/*Chat Body*/}
               <Container maxWidth={'md'}>
                  <Grid container direction={"row"} justify="center" alignItems="center">
                     {this.props.messages.map(message => {
                        return (
                           <Grid item xs={7}>
                              <ChatBubble username={message.username} message={message.text}/>
                           </Grid>
                        )
                     })}
                  </Grid>
               </Container>
               {/*Chat Box*/}
               <br/>
               <Container maxWidth={'xs'}>
                  <Grid container direction={"row"} alignItems="center" justify="center">
                     <Grid item xs={10}>
                        <TextField
                           id="outlined-required"
                           label="Enter Your Message"
                           value={this.state.input}
                           onChange={this.handleChange}
                           name={'input'}
                           variant="outlined"
                           fullWidth={true}
                        />
                     </Grid>
                     <Grid item xs={2}>
                        <Button
                           variant="contained"
                           color="primary"
                           className={classes.button}
                        >
                           <Icon>send</Icon>
                        </Button>
                     </Grid>
                  </Grid>
               </Container>
            </Paper>
         </div>
      );
   }
}

let mapStateToProps = (state) => {
   return {
      messages: state.messages
   }
};

export default connect(mapStateToProps)(withStyles(styles)(ChatScreen));