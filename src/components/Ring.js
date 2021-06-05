import React from 'react';
import { DonutMultiple } from 'react-donut-component';
import { DonutElement, DonutLabel } from 'react-donut-component';

export default function Ring({ title, value1, value2 }) {
    return (
        <DonutMultiple size={160} strokeWidth={9} >
            <DonutElement color='#4aa96c'>{value1.toString()}</DonutElement>
            <DonutElement color='#cc9b6d'>{value2.toString()}</DonutElement>
            <DonutLabel style={{ size: 1, letterSpacing: 1, fontWeight: 'normal', fontStyle: 'bold' }}>{title}</DonutLabel>
        </DonutMultiple>


    )
}