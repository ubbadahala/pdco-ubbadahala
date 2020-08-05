import { makeStyles } from '@material-ui/core';
import { mobileWidthPxl } from '../../Utils/constants';

export const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateRows: '1fr 3fr',
    gridTemplateColumns: 'repeat(1, minmax(0px,1fr))'
  },
  title: {
    // backgroundColor: 'rgba(255,255,255,0.1)',
    gridColumn: '1 / 2',
    gridRow: '1 / 2',
    display: 'flex',
    justifyContent: 'center',
    padding: '0px 10px',
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
    backgroundColor: 'rgba(255,255,255,0)',
    // backgroundColor: 'pink',
    gridColumn: '1 / 2',
    gridRow: '2 / 3',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  [`@media (max-width: ${mobileWidthPxl}px)`]: {
    title: {
      fontSize: 14
    }
  }
}));
