import React from 'react';
import RadioButtons from '../components/RadioButtons';
import SpeedSlider from '../components/Slider';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../styles/Styles';

export default function Form({ handleSubmit, settings, setSettings, goToPrev, message }) {
    const classes = useStyles()

    const handleRadioChange = (event) => {
        setSettings({ ...settings, car: event.target.value })
    }

    const handleSpeed1 = (event, value) => {
        setSettings({ ...settings, speed1: value })
    }

    const handleSpeed2 = (event, value) => {
        setSettings({ ...settings, speed2: value })
    }

    const handleDistance = (event) => {
        setSettings({ ...settings, distance: event.target.value })
    }

    return (
        <Container className={classes.root} maxWidth="sm">

            <form onSubmit={handleSubmit}>
                <RadioButtons handleRadioChange={handleRadioChange} car={settings.car}></RadioButtons>
                <br></br>

                <TextField id="outlined-basic" className={classes.textfield}
                    label={<Typography className={classes.text}>distance (km)</Typography>}
                    variant="outlined" type="number" value={settings.distance} onChange={handleDistance}></TextField>
                <br></br>

                <div style={{ marginTop: 20, marginBottom: 20 }}>
                    <SpeedSlider handleSpeed={handleSpeed1} title="Set first speed (km/h)"></SpeedSlider>
                    <SpeedSlider handleSpeed={handleSpeed2} title="Set second speed (km/h)"></SpeedSlider>
                </div>
                <p style={{ color: 'red' }} className={classes.text}>{message}</p>

                <div className={classes.buttongroup}>
                    <button style={{ marginRight: 260 }} className={classes.button} onClick={() => goToPrev()}>previous</button>
                    <input type="submit" value="count" className={classes.button}></input>
                </div>
            </form>
        </Container>
    )
}
