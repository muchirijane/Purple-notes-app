# Material UI Notes

## How to create custom CSS
- Import `markStyles` from material UI.

```js
import { makeStyles } from '@material-ui/core/styles';

```
- Add the Html elements as object and their properties as keys and add the value you want.

```jsx
const useStyles = makeStyles({
  title:{
    fontSize: 20
  }
});
```
- Add the styles to your component
```jsx
const About = (props)=>{
  const classes = useStyles(props);
  return(
    <>
    <h1 className={classes.title}> Firebase Note app</h1>
  </>
    )
}
export default About
```

## How to customize the Theme

```jsx
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
const theme = createTheme({
  palette:{
    primary:{
      main: '#fefefe'
    },
    secondary: {
      main: purple[500],
    },
    typography:{
      fontFamily: "Quicksand",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightmedium: 600,
      fontWeightbold: 700,
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
  );
}

export default App;

```
