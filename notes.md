# Material UI Notes

## How to create custom CSS

- Import `markStyles` from material UI.

```js
import { makeStyles } from "@material-ui/core/styles";
```

- Add the Html elements as object and their properties as keys and add the value you want.

```jsx
const useStyles = makeStyles({
  title: {
    fontSize: 20,
  },
});
```

- Add the styles to your component

```jsx
const About = (props) => {
  const classes = useStyles(props);
  return (
    <>
      <h1 className={classes.title}> Firebase Note app</h1>
    </>
  );
};
export default About;
```

## How to customize the Theme

- Import `createTheme AND ThemeProvider` from material UI.

```js
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
```

- Customize the Theme by adding your own CSS

```jsx
const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: {
      main: purple[500],
    },
    typography: {
      fontFamily: "Quicksand",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightmedium: 600,
      fontWeightbold: 700,
    },
  },
});
```

#### 2) Wrap your app with the ThemeProvider

```js
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
```

- The whole code combined together will took like the code below.

```jsx
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: {
      main: purple[500],
    },
    typography: {
      fontFamily: "Quicksand",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightmedium: 600,
      fontWeightbold: 700,
    },
  },
});

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

## How to use the JSON Server

#### 1) Install Json server globally

- You can achieve this by add the code below in your terminal.

```bash
npm i -g json-server
```

#### 2) Run the json watcher to watch the changes of your Json file.

- The json file is in our root folder called data. Inside the data folder there is the db.json file.

- Run the following code in your terminal.

```bash
  json-server --watch data/db.json --port 8000
```

```js
const fetchNotes = async () => {
  try {
    const res = await fetch("http://localhost:8000/notes");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};
```

#### 3) Grid System in Material UI

- Import some packages from Material UI for the Grid.

```js
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
```

```jsx
<Container>
  <Grid container>
    <Grid item xs={12} sm={6} md={3}>
      <Paper>1</Paper>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <Paper>2</Paper>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <Paper>3</Paper>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <Paper>4</Paper>
    </Grid>
  </Grid>
</Container>
```
