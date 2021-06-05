import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../styles/Styles';


export default function Header() {
    const classes = useStyles();

    const textStyle = {
        letterSpacing: 4,
        fontFamily: 'Abel',
        fontSize: 60,
        color: 'white'
    }

    return (
        <div>
            <div>
                <AppBar position="static" style={{ backgroundColor: '#28df99' }} classes={{ root: classes.header }}>
                    <Toolbar>
                        <Typography variant="h4" noWrap style={textStyle} className={classes.heading}>
                            CAR COUNTER
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    )

}

