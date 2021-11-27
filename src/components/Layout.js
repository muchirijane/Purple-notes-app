
 import {useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import { useHistory, useLocation } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { format } from 'date-fns';
import Avatar from "@material-ui/core/Avatar";
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    avatar: {
      marginLeft: theme.spacing(2)
    },
    date: {
      flexGrow: 1
    },
    active: {
      background: "#f4f4f4",
    },
    title: {
      padding: theme.spacing(2),
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function Layout({children, window}) {

    const classes = useStyles();

   const history = useHistory();
   const location = useLocation();
   const menuItems = [
     {
       text: "My Notes",
       icon: <SubjectOutlined color="secondary" />,
       path: "/",
       id: "1",
     },
     {
       text: "Create Notes",
       icon: <AddCircleOutlineOutlined color="secondary" />,
       path: "/create",
       id: "2",
     },

   ];
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen( (prevIsOpen) => !prevIsOpen)
    };

    const listToggleHandler = (item) => {
        history.push(item.path);
         setMobileOpen( (prevIsOpen) => !prevIsOpen)

    }

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <List>
                                 {menuItems.map((item) => (
                    <ListItem
                         key={item.id}
                         button
                         onClick={() => history.push(item.path)}
                         className={location.pathname === item.path ? classes.active : null}
                     >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                       <ListItemText primary={item.text} />
                     </ListItem>
                 ))}
               </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (

        <div className={classes.root}>

             <AppBar position="fixed" className={classes.appBar}>

                   <Toolbar>
                     <IconButton
                         color="inherit"
                         aria-label="open drawer"
                         edge="start"
                         onClick={handleDrawerToggle}
                         className={classes.menuButton}
                     >
                         <MenuIcon />
                     </IconButton>
                     <Typography className={classes.date}  >Today is the {format(new Date(), 'do MMMM Y')}</Typography>
                                <Typography>Aria</Typography>
                                <Avatar className={classes.avatar} src='/profile.png' />
                 </Toolbar>
             </AppBar>
             <nav className={classes.drawer} aria-label="mailbox folders">
                 {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                 <Hidden smUp implementation="css">
                     <Drawer
                         container={container}
                         variant="temporary"
                         anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                         open={mobileOpen}
                         onClose={handleDrawerToggle}
                         classes={{
                             paper: classes.drawerPaper,
                         }}
                         ModalProps={{
                             keepMounted: true, // Better open performance on mobile.
                         }}
                     >
                         {drawer}
                     </Drawer>
                 </Hidden>
                 <Hidden xsDown implementation="css">
                     <Drawer
                         classes={{
                             paper: classes.drawerPaper,
                         }}
                         variant="permanent"
                         open
                     >
                         {drawer}
                     </Drawer>
                 </Hidden>
             </nav>
             <div className={classes.page}>
                 <div className={classes.toolbar}/>
                 {children}
             </div>
        </div>
    );
};




