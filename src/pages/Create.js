import {useState} from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  field:{
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
});

export default function Create(props) {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [initialCategory, setInitialCategory] = useState('todos');
  const classes = useStyles(props);
  const titleHandler =(e)=>{
    const titleValue = e.target.value;
    setTitle(titleValue);

  }
  const detailHandler = (e)=>{
    const detailsValue = e.target.value;
    setDetails(detailsValue);
  }
  const categoryHandler =(e)=>{
    setInitialCategory(e.target.value);
  }

  const formHandler = (e)=>{
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);
    const noteTitle = title;
    const noteDetails = details;
    noteTitle.length > 1 && noteTitle.length !== 0 ? setTitleError(false): setTitleError(true);
    noteDetails.length > 1 && noteDetails.length !== 0 ? setDetailsError(false): setDetailsError(true);

    const noteValues ={
      noteTitle,
      noteDetails,
      initialCategory
    }

    if(noteTitle && noteDetails) console.log(noteValues);



  }
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
     <FormControl component='fieldset' className={classes.field}>
       <FormLabel component='legend'> Category</FormLabel>
     <RadioGroup aria-label='Category' value={initialCategory} name='Category' onChange={categoryHandler}>
       <FormControlLabel value='personal' label='Personal' control={<Radio/>}>Personal</FormControlLabel>
     <FormControlLabel value='work' label='Work'  control={<Radio/>}>Work</FormControlLabel>
   <FormControlLabel value='todos' label='Todos' control={<Radio/>}>Todos</FormControlLabel>
 <FormControlLabel value='reminders' label='Reminders'  control={<Radio/>}>Reminders</FormControlLabel>

     </RadioGroup>

     </FormControl>
     <form noValidate autoComplete='off' onSubmit={formHandler}>
       <TextField id='outlined-basic'
         className={classes.field}
         onChange={titleHandler}
         variant='outlined'
         color='secondary'
         label='Note Title'
         fullWidth
         required
         error={titleError}
       />
       <TextField id='outlined-basic'
         className={classes.field}
         onChange={detailHandler}
         variant='outlined'
         color='secondary'
         label='Details'
         fullWidth
         required
         multiline
         rows={4}
         error={detailsError}
       />
       <Button
         type='submit'
         className={classes.btn}
         color='secondary'
        variant='contained'
        endIcon={<ArrowForwardIosIcon/>}

         >
         submit
       </Button>
      </form>







   </Container>

  )
}
