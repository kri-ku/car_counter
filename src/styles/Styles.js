import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/abel';
import background from '../pictures/background.jpg';


const useStyles = makeStyles((theme) => ({

    root: {
        padding: 70,
        backgroundColor: '#99f3bd',
        borderRadius: 10,
    },
    button: {
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#28df99',
        borderColor: 'white',
        color: 'gray',
        width: 100,
        letterSpacing: 4,
        fontFamily: 'Abel',
    },
    form: {
        alignItems: 'center',
        justifyContent: 'center'

    },
    text: {
        letterSpacing: 4,
        fontFamily: 'Abel',
        fontSize: 16,
        lineHeight: 2.2
    },

    header: {
        backgroundColor: '#28df99',
        alignItems: 'center',
        height: 150,
        justifyContent: 'center',
        
    },
    heading: {
        letterSpacing: 4,
        fontFamily: 'Abel',
        fontSize: 60,
        color: 'white'
        
    },
    textfield: {
        marginTop: 20,
        marginBottom: 10
    },
    buttongroup: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    donut: {
        display: 'inline-block'
    },
    highlight: {
        color: 'red'
    },
    background_picture: {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
    }

}));

export { useStyles };

