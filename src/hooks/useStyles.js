import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {},
    nav: {
      display: 'flex',
      justifyContent: 'space-evenly',
      margin: '40px auto 10px',
      maxWidth: '350px'
    },
    button: {
      margin: '20px auto 5px'
    },
    title: {
      flexGrow: 1,
      textTransform: 'capitalize'
    },
    titleMargin: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(2)
    },
    errorMessage: {
      textAlign: 'center',
      margin: '0px 0 15px'
    },
    content: {
      flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      },
      container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      },
      paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
      }
  }
});

export default useStyles;