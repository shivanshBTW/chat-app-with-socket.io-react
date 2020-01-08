import React, {Component} from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
   root: {
      maxWidth: theme.spacing(60),
      minWidth: theme.spacing(20)
   },
   root2: {
      margin: `${theme.spacing(1)}px ${theme.spacing(0)}px`,
      padding: `${theme.spacing(1)}px`,
   },
})

class ChatBubble extends Component {
   static defaultProps = {
      username: 'uname',
      message: 'temporary message'
   }

   constructor(props) {
      super(props);
   }

   render() {
      let {classes} = this.props;
      return (
         <div className={classes.root}>
            <Paper elevation={3} className={classes.root2}>
               <Grid container direction={"row"}>
                  <Grid item>
                     <strong>{this.props.username}</strong>:&nbsp;
                  </Grid>
                  <br/>
                  <Grid item>
                     {this.props.message}
                  </Grid>
               </Grid>
            </Paper>
         </div>
      );
   }
}

export default withStyles(styles)(ChatBubble);