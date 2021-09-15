import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, orange } from '@material-ui/core/colors';
const theme = createTheme({
  palette:{
    primary:{
      main: '#fefefe'
    },
    secondary: {
      main: green[500],
    },
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
