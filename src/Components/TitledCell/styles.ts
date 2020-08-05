import { makeStyles } from '@material-ui/core';
import { mobileWidthPxl } from '../../Utils/constants';

export const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  title: {
    position: 'absolute',
    top: 0,
    height: 35,
    left: 0,
    right: 0,
    // backgroundColor: 'rgba(255,255,255,0.1)',
    display: 'flex',
    justifyContent: 'center',
    // padding: '0px 10px',
    alignItems: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    '& a': {
      textDecoration: 'none',
      color: 'white',
      '&:hover': {
        color: 'cyan'
      }
    }
  },
  content: {
    position: 'absolute',
    top: 35,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255,255,255,0)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  [`@media (max-width: ${mobileWidthPxl}px)`]: {
    title: {
      fontSize: 12
    }
  }
}));
