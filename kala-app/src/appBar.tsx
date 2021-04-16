import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import kala from './assets/kala_orange_clearbg.png';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import history from "./customHistory";
// font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage, faHandHoldingUsd, faBook, faHome } from '@fortawesome/free-solid-svg-icons';

const drawerWidth = 240;

/**
 * Sets the styles for the nav bar
 */
const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    display: 'flex',
    color: '#D6775A',
    backgroundColor: 'white',
    "& .MuiAppBar-root": {
      color: '#D6775A',
      backgroundColor: 'white',
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    }
  }, 
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
    title: {
      flexGrow: 1,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-start',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
    menuIcon: {
      color: 'black'
    },
    menuFont: {
      marginLeft: '.6em'
    },
    logoLink: {
      textDecoration: 'none',
      display: 'flex',
      height: '15%',
      width: '15%'
    },
    logoImg: {
      width: '80%',
      height: '100%',
    },
    kala: {
      width: '4em',
      height: '4em',
      paddingRight: '0.6em'
    }
  }),
);

/**
 * Creates & returns the right aligned hamburger menu navigation bar for the mobile view of site
 * Uses react router and custom browser history for navigation/routing
 */
export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const pushHistory = (path: string) => {
    history.push(path);
  }

  // Used to go to a specific category in library atm
  const pushHistorySearch = (path: string, search: string) => {
    history.push({
      pathname: path,
      search: search
      });
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        
        <Toolbar>
            <Link to="/" onClick={ () => pushHistory("/")} className={classes.logoLink}>
              <img src={kala} alt= "funding finder logo of kala the squid with 3 tentacles and a smiley face" 
              className={classes.kala}/>
            </Link>
            <Typography variant="h6" noWrap className={classes.title}>
              Funding Finder
            </Typography>
            
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button component={Link} to="/">
            <FontAwesomeIcon icon={faHome} size="1x" color="#808080" />
            <ListItemText className={classes.menuFont} primary={' Home Page'} onClick={ () => pushHistory("/")} />
          </ListItem>
          <ListItem button component={Link} to="/library">
            <FontAwesomeIcon icon={faBook} size="1x" color="#808080" />
            <ListItemText className={classes.menuFont} primary={' Library'} onClick={ () => pushHistory("/library")}/>
          </ListItem>
          <ListItem button component={Link} to="/form">
            <FontAwesomeIcon icon={faHandHoldingUsd} size="1x" color="#808080" />
            <ListItemText className={classes.menuFont} primary={' Funding & Assistance'} onClick={ () => pushHistory("/form")}/>
          </ListItem>
          <ListItem button component={Link} to="/form">
              <FontAwesomeIcon icon={faLanguage} size="1x" color="#808080" />
              <ListItemText className={classes.menuFont} primary={' Language Help'} onClick={ () => pushHistorySearch("/library", "lang")}/>
          </ListItem>
        </List>
      </Drawer>
      </Router>
    </div>
  );
}