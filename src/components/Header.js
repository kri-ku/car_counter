import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {useStyles} from '../styles/Styles';


export default function Header() {
    const classes = useStyles();

    return (
        <div>
            <div>
                <AppBar position="static" className={classes.header} >
                    <Toolbar>
                        <Typography variant="h4" noWrap className={classes.heading}>
                            CAR COUNTER
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    )

}

