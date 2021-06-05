import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Typography } from '@material-ui/core';
import {useStyles} from '../styles/Styles';

export default function RadioButtons({ handleRadioChange, car }) {
    const classes = useStyles()

    return (
        <FormControl>
            <FormLabel component="legend" className={classes.text} style={{marginBottom: 10}}> Choose your car</FormLabel>
            <RadioGroup name="car" value={car} onChange={handleRadioChange} defaultValue="3">
                <FormControlLabel
                    value="3"
                    control={<Radio></Radio>}
                    label={<Typography className={classes.text}>car A: 3l/100km</Typography>}
                    >
                </FormControlLabel>

                <FormControlLabel
                    className={classes.text}
                    value="3.5"
                    control={<Radio></Radio>}
                    label={<Typography className={classes.text}>car B: 3.5l/100km</Typography>}
                    >
                </FormControlLabel>

                <FormControlLabel
                    className={classes.text}
                    value="4"
                    control={<Radio></Radio>}
                    label={<Typography className={classes.text}>car C: 4l/100km</Typography>}
                    >
                </FormControlLabel>
            </RadioGroup>
        </FormControl>
    )
}
