import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

});

export default function Create(props) {
  const classes = useStyles(props);
  return (
    <Container>
     <Typography
       className={classes.title}
       variant='h6'
       component='h2'
       color='textSecondary'
       gutterButtom
       >
         Create a new Note
     </Typography>

   <Button
     className={classes.btn}
     color='secondary'
    variant='contained'
    endIcon={<DeleteIcon/>}

     >
     Delete
   </Button>





   </Container>

  )
}
