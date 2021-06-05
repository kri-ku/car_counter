import React from 'react';
import Container from '@material-ui/core/Container';
import { useStyles } from '../styles/Styles';



export default function Fronpage({ goToNext }) {
    const classes = useStyles()

    return (
        <Container className={classes.root} maxWidth="sm">
            <div className={classes.text}>
                <p style={{ fontSize: 30 }}><strong>Welcome to car counter</strong></p>
                <p>You will choose a car based on consumption, set distance and two speeds.</p>
                <p>Application will compare the two speeds based on used time and gasoline on the setted distance.</p>
            </div>

            <div className={classes.buttongroup}>
                <button style={{ marginLeft: 300 }} className={classes.button} onClick={() => goToNext()}>start</button>
            </div>
        </Container>
    )

}