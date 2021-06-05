import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import { useStyles } from '../styles/Styles';
import Ring from '../components/Ring';

export default function Result2({ goToPrev, goToNext, settings, setSettings }) {
    const classes = useStyles()
    const [faster, setFaster] = useState(Math.max(settings.speed1, settings.speed2))
    const [timediff, settimediff] = useState('')
    const [gasoDiff, setGasoDiff] = useState('')

    useEffect(() => {
        setFaster(Math.max(settings.speed1, settings.speed2))
        settimediff(countTimeDifference(settings.time1, settings.time2))
        setGasoDiff(countGasolineDifference(settings.consumption1, settings.consumption2))

    }, [settings])

    const countTimeDifference = (time1, time2) => {
        const diff = Math.max(time1, time2) - Math.min(time1, time2)// as hours
        if (diff % 1 !== 0) {
            const minutesAsDecimal = diff % 1
            const minutes = Math.round(60 * minutesAsDecimal)
            const hours = Math.floor(diff)

            if (hours === 0) {
                return `${minutes} minutes`
            } else {
                return `${hours} hours ${minutes} minutes`
            }
        }
        return `${Math.floor(diff)} hours`
    }

    const countGasolineDifference = (gaso1, gaso2) => {
        return Math.max(gaso1, gaso2) - Math.min(gaso1, gaso2)
    }

    /*const handleGoToHome = () => {
        goToNext()
    }*/

    return (
        <Container className={classes.root} maxWidth="sm">
            <div className={classes.text} style={{ flexDirection: 'row', display: 'flex' }}>
                <p style={{ marginRight: 10 }}>With speed <strong>{faster} km/h </strong>
                you are in your destination <p className={classes.highlight}>{timediff}</p> earlier than with speed <strong>{Math.min(settings.speed1, settings.speed2)} km/h</strong>.</p>
                <Ring title="speed" value1={settings.speed1} value2={settings.speed2}></Ring>
            </div>

            <div className={classes.text} style={{ flexDirection: 'row', display: 'flex' }}>
                <Ring title="consumption" value1={settings.consumption1} value2={settings.consumption2}></Ring>
                <p style={{ marginLeft: 10, marginTop: 20 }}>Gas consumption is <p className={classes.highlight}>{parseFloat(gasoDiff).toFixed(2)} litres</p> more than if you would drive slower.</p>
            </div>

            <div className={classes.buttongroup}>
                <button style={{ marginRight: 260 }} className={classes.button} onClick={() => goToPrev()}>previous</button>
                <button className={classes.button} onClick={() => goToNext()}>home</button>
            </div>

        </Container>
    )
}

