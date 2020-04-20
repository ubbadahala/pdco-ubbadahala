import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%'
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat'
  }
}));
