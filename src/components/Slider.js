import React from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../styles/Styles';

export default function SpeedSlider({ handleSpeed, title }) {
    const classes = useStyles()
    return (
        <div>
            <Typography id="discrete-slider-always" gutterBottom className={classes.text} style={{ marginBottom: 30 }}>
                {title}</Typography>
            <Slider
                color="secondary"
                className={classes.text}
                onChange={handleSpeed}
                defaultValue={0}
                step={10}
                valueLabelDisplay="on"
                min={0}
                max={250}
            />

        </div>
    )
}
