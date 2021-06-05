import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { useStyles } from '../styles/Styles';

export default function Result({ settings, setSettings, goToPrev, goToNext }) {
    const classes = useStyles()
    const [speed1, setSpeed1] = useState('')
    const [speed2, setSpeed2] = useState('')
    const [consumption1, setConsumption1] = useState('')
    const [consumption2, setConsumption2] = useState('')

    useEffect(() => {
        setSpeed1(countTime(settings.speed1, settings.distance))
        setSpeed2(countTime(settings.speed2, settings.distance))
        setConsumption1(countConsumptionForDistance(settings.car, settings.speed1, settings.distance))
        setConsumption2(countConsumptionForDistance(settings.car, settings.speed2, settings.distance))
    }, [settings])

    const countTime = (speed, distance) => {
        const time = countTimeAsHours(distance, speed)
        if (time % 1 !== 0) {
            const minutesAsDecimal = time % 1
            const minutes = Math.round(60 * minutesAsDecimal)
            const hours = Math.floor(time)
            if (hours === 0) {
                return `${minutes} minutes`
            } else {
                return `${hours} hours ${minutes} minutes`
            }
        }
        return `${Math.floor(time)} hours`
    }

    const countConsumptionForDistance = (cons, speed, distance) => {
        const newConsumption = countConsumptionPer100km(cons, speed)
        return newConsumption / 100 * distance
    }

    const countTimeAsHours = (distance, speed) => distance / speed

    const countConsumptionPer100km = (cons, speed) => {
        const speedIncreased = speed - 1
        const newc = Math.pow(1.009, speedIncreased) * cons
        return newc
    }

    const handleGoToNextPage = () => {
        const time1 = countTimeAsHours(settings.distance, settings.speed1)
        const time2 = countTimeAsHours(settings.distance, settings.speed2)
        setSettings({ ...settings, time1: time1, time2: time2, consumption1: consumption1, consumption2: consumption2 })
        goToNext()
    }

    return (
        <Container className={classes.root} maxWidth="sm">

            <div className={classes.text} style={{ marginBottom: 50 }}>
                <p style={{ fontSize: 28 }}><strong>When your journey is {settings.distance} km,</strong></p>
                <p>If you drive <strong className={classes.highlight}>{settings.speed1} km/h</strong>,</p>
                <p>you will be in your destination after <strong>{speed1}</strong>.</p>
                <p>Your fuel consumpiton is <strong>{parseFloat(consumption1).toFixed(2)} litres</strong>.</p>
                <p>-----------------------------------------------------</p>
                <p>If you drive <strong className={classes.highlight}>{settings.speed2} km/h</strong></p>
                <p>you will be in your destination after <strong>{speed2}.</strong></p>
                <p>Your fuel consumption is <strong>{parseFloat(consumption2).toFixed(2)} litres</strong>.</p>
            </div>
            <div className={classes.buttongroup}>
                <button style={{ marginRight: 260 }} className={classes.button} onClick={() => goToPrev()}>previous</button>
                <button className={classes.button} onClick={() => handleGoToNextPage()}>next</button>
            </div>
        </Container>
    )
}
