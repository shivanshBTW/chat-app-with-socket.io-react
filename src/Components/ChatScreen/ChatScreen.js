import React, {Component} from 'react';
import Paper from "@material-ui/core/Paper";
import {withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import ChatBubble from "../ChatBubble/ChatBubble";

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
})

class ChatScreen extends Component {
    render() {
        let {classes} = this.props;
        return (
            <div>
                <Paper variant="elevation" elevation={3} className={classes.root}>
                    {/*Chat Body*/}
                    <Grid container direction={"row"} justify="center" alignItems="center">
                        <Grid item xs={7}>
                            <ChatBubble username={'amit'} message={'hi'}/>
                        </Grid>
                        <Grid item xs={7}>
                            <ChatBubble username={'suraj'} message={'ooooo'}/>
                        </Grid>
                    </Grid>
                    {/*Chat Box*/}
                    <br/>
                    <Grid container direction={"row"} alignItems="center" justify="center">
                        <Grid item xs={10}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Enter Your Message here!!!"
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
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(ChatScreen);