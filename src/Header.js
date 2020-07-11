import React, { useState, useEffect } from 'react'
import Link from '../src/Link'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Hidden from '@material-ui/core/Hidden'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const ElevationScroll = props => {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const useStyles = makeStyles(theme => ({
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
  logoText: {
    color: theme.palette.common.white,
    fontWeight: 500,
    '&:hover': {
      textDecoration: 'none',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    minWidth: 10,
    marginLeft: 25,
    textTransform: 'none',
    transition: 'opacity 0.1s ease-out',
    '&:hover': {
      opacity: 1,
      textDecoration: 'none',
    },
    '&:active': {
      animation: 'none',
    },
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    "&:hover": {
      backgroundColor: 'transparent',
    },
  },
  drawerIcon: {
    height: 36,
    width: 36,
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
  },
  drawerItemText: {
    color: 'white',
    opacity: 0.7,
    transition: 'opacity 0.1s ease-out',
    '&:hover': {
      opacity: 1,
    },
  },
}))

export default props => {
  const classes = useStyles()
  const theme = useTheme()
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const [openDrawer, setOpenDrawer] = useState(false)

  const routes = [
    { id: 0, name: 'About Me', link: '#about' },
    { id: 1, name: 'Works', link: '#works' },
    { id: 2, name: 'Contact Me', link: '#contact' }
  ]

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.appbar}>
          <Toolbar>
            <Typography
              variant="h6"
              component={Link}
              href="/"
              className={classes.logoText}
            >
              Shinya Sato
            </Typography>

            <Hidden xsDown>
              <Tabs
                className={classes.tabContainer}
              >
                {routes.map((route, i) => (
                  <Tab
                    key={i}
                    href={route.link}
                    label={route.name}
                    disableRipple
                    className={classes.tab}
                    classes={{selected: {opacity: 0.7}}}
                  />
                ))}
              </Tabs>
            </Hidden>

            <Hidden smUp>
              <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                classes={{ paper: classes.drawer }}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
              >
                <Toolbar />
                {routes.map((route, i) => (
                  <ListItem
                    key={i}
                    divider
                    button
                    component={'a'}
                    href={route.link}
                    onClick={() => setOpenDrawer(false)}
                  >
                    <ListItemText className={classes.drawerItemText} disableTypography>
                      {route.name}
                    </ListItemText>
                  </ListItem>
                ))}
              </SwipeableDrawer>

              <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
                <MenuIcon className={classes.drawerIcon} />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment >
  );
}
