import React, { useEffect } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Link from '../src/Link'

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
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: 25,
  },
}))

export default props => {
  const classes = useStyles()
  const theme = useTheme()

  const handleClick = () => {
    props.setValue(undefined)
  }

  const handleChange = (e, newValue) => {
    props.setValue(newValue)
  }

  const routes = [
    { name: 'About Me', link: '/about', navIndex: 0 },
    { name: 'Works', link: '/works', navIndex: 1 },
    { name: 'Contact Me', link: '/contact', navIndex: 2 }
  ]

  useEffect(() => {
    routes.forEach(route => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.navIndex) {
            props.setValue(route.navIndex)
          }
          break
        case '/':
          props.setValue(undefined)
        default:
          break
      }
    })
  }, [props.value, routes])

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography
              variant="h6"
              component={Link}
              href="/"
              style={{
                color: theme.palette.common.white,
                fontWeight: 500,
                textDecoration: 'none',
              }}
              onClick={handleClick}
            >
              Shinya Sato
            </Typography>
            <Tabs
              value={props.value}
              onChange={handleChange}
              className={classes.tabContainer}
            >
              {routes.map((route, index) => (
                <Tab
                  key={index}
                  className={classes.tab}
                  component={Link}
                  href={route.link}
                  label={route.name}
                  disableRipple
                />
              ))}
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
