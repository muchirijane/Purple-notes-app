import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import Layout from "./components/Layout";
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
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
