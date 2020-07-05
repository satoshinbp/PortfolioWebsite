import React from 'react'
import Head from 'next/head'
import Link from '../src/Link'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import GitHubIcon from '@material-ui/icons/GitHub'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import MailIcon from '@material-ui/icons/Mail'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: '3em',
    paddingBottom: '3em',
    paddingLeft: '3em',
    paddingRight: '3em',
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    [theme.breakpoints.down('sm')]: {
      paddingTop: '2em',
      paddingBottom: '2em',
      paddingLeft: '2em',
      paddingRight: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '1.5em',
      paddingBottom: '1.5em',
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
  root: {
    height: 500,
  },
  media: {
    height: 140,
  },
  contact: {
    marginBottom: '0.5em',
    textDecoration: 'none',
  },
}))

export default () => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

  const works = [
    {
      img: '/portrait.jpg',
      title: 'Portfolio Website',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vestibulum ante ipsum primis in faucibus orci luctus.
      `,
      tech: 'Next.js, React, JavaScript, Material-UI',
    },
    {
      img: '/portrait.jpg',
      title: 'Itinerary App',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Maecenas ac velit sapien.
      `,
      tech: 'Firebase, React, JavaScript, SCSS',
    },
    {
      img: '/portrait.jpg',
      title: 'Coming Soon',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      `,
      tech: 'Firebase',
    },
    {
      img: '/portrait.jpg',
      title: 'Coming Soon',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vestibulum ante ipsum primis in faucibus orci luctus.
      `,
      tech: 'Firebase',
    },
    {
      img: '/portrait.jpg',
      title: 'Coming Soon',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vestibulum ante ipsum primis in faucibus orci luctus.
      `,
      tech: 'Firebase',
    },
    {
      img: '/portrait.jpg',
      title: 'Coming Soon',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vestibulum ante ipsum primis in faucibus orci luctus.
      `,
      tech: 'Firebase',
    },
  ]

  const contacts = [
    {
      id: '0113shin.s@gmail.com',
      icon: <MailIcon />,
      link: 'mailto:0113shin.s@gmail.com',
    },
    {
      id: 'satoshinbp',
      icon: <GitHubIcon />,
      link: 'https://github.com/',
    },
    {
      id: 'Shinya Sato',
      icon: <LinkedInIcon />,
      link: 'https://www.linkedin.com/',
    },
    {
      id: 'Shinya Sato',
      icon: <FacebookIcon />,
      link: 'https://www.facebook.com/',
    },
    {
      id: '@ShinSG4',
      icon: <TwitterIcon />,
      link: 'https://www.twitter.com',
    },
    {
      id: 'satoshinbp',
      icon: <InstagramIcon />,
      link: 'https://www.instagram.com/',
    },
  ]

  return (
    <React.Fragment>
      <Head>
        <title key="title">Shinya Sato</title>
        {/* <meta
          name="description"
          key="description"
          content="Pristine software custom=designed form the ground up with cutting-edge optimizations.
          Use our free estimate calculator to check your project cost!"
        />
        <meta property="og:title" key="og:title" content="Bringing West Cost Technology to the Midwest | Arc Development" />
        <meta property="og:url" key="og:url" content="arc.com" />
        <meta rel="canonical" key="canonical" href="arc.com" /> */}
      </Head>

      <Grid
        container
        direction={matchesSM ? 'column' : 'row'}
        alignItems={matchesSM ? 'center' : undefined}
        className={classes.container}
      >
        <Hidden smDown>
          <Grid item md={4}>
            <img
              src="/portrait.jpg"
              alt="portrait"
              width={matchesMD ? '90%' : '360'}
            />
          </Grid>
        </Hidden>
        <Grid item container direction="column" spacing={2} md={8}>
          <Grid item>
            <Typography variant={matchesXS ? 'h4' : 'h2'}>
              Hi, I'm Shinya.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor nec diam ac tincidunt.
              Vivamus pellentesque mattis consequat. Integer pellentesque ipsum eget elit finibus tincidunt.
              Vestibulum at odio facilisis, viverra nunc quis, tristique nisi. Interdum et malesuada fames ac
              ante ipsum primis in faucibus. Mauris tortor lorem, sodales at felis.
            </Typography>
          </Grid>
          <Grid item>
            <Button
              component={Link}
              href="/about"
              variant="contained"
              color="primary"
              disableRipple
            >
              About Me
            </Button>
          </Grid>
        </Grid>
        <Hidden mdUp>
          <Grid item style={{ marginTop: '2em' }}>
            <img src="/portrait.jpg" alt="portrait" width="100%" />
          </Grid>
        </Hidden>
      </Grid>

      <Grid container direction="column" className={classes.container}>
        <Grid item style={{ marginBottom: '2em' }}>
          <Typography variant={matchesXS ? 'h4' : matchesSM ? 'h3' : 'h2'}>Works</Typography>
        </Grid>
        <Grid item container direction={matchesSM ? "column" : 'row'} spacing={4}>
          {works.map((work, i) => (
            <Grid item key={i} xl={3} lg={4} md={6}>
              <Card>
                <Grid container direction="column" justify="space-between" className={classes.root}>
                  <Grid item>
                    <CardMedia
                      className={classes.media}
                      image={work.img}
                      title={work.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5">
                        {work.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {work.description}
                      </Typography>
                    </CardContent>
                  </Grid>
                  <Grid item>
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" style={{ fontSize: '0.75em' }}>
                        {work.tech}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="secondary" disableRipple>
                        <GitHubIcon />
                      </Button>
                      <Button size="small" color="secondary" disableRipple>
                        <OpenInNewIcon />
                      </Button>
                    </CardActions>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid container direction="column" className={classes.container}>
        <Grid item style={{ marginBottom: '2em' }}>
          <Typography variant={matchesXS ? 'h4' : 'h2'}>Contact Me</Typography>
        </Grid>
        {contacts.map((contact, i) => (
          <Grid item key={i} component={'a'} href={contact.link} className={classes.contact}>
            <Button size="small" color="secondary" disableRipple>
              {contact.icon}&nbsp;&nbsp;&nbsp;{contact.id}
            </Button>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  )
}
