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
import Hidden from '@material-ui/core/Hidden'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import GitHubIcon from '@material-ui/icons/GitHub'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import MailIcon from '@material-ui/icons/Mail'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'

const useStyles = makeStyles(theme => ({
  mainContainer: {
    padding: '3em',
    [theme.breakpoints.down('sm')]: {
      padding: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '1.5em',
    },
  },
  sectionContainer: {
    paddingTop: 'calc(3em + 64px)',
    marginTop: 'calc(-3em - 64px)',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 'calc(2em + 64px)',
      marginTop: 'calc(-2em - 64px)',
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: 'calc(1.5em + 56px)',
      marginTop: 'calc(-1.5em - 56px)',
    },
  },
  divider: {
    marginTop: '2em',
    marginBottom: '2em',
    [theme.breakpoints.down('sm')]: {
      marginTop: '1.5em',
      marginBottom: '1.5em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '1em',
      marginBottom: '1em',
    },
  },
  btn: {
    '&:hover': {
      textDecoration: 'none'
    }
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

  const techs = [
    'HTML & (S)CSS',
    'JavaScript (ES6+)',
    'React',
    'Next.js',
    'Node.js',
    'Material-UI',
    'Firebase',
  ]

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
    <Grid container direction='column' className={classes.mainContainer}>
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
        item
        container
        direction="row"
        id="about"
        className={classes.sectionContainer}
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
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Hello! I'm Shinya, a software engineer based in Vancouver.
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
              My goal is to always build products that provide pixel-perfect, performant experiences.
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Shortly after working in an engineering company as a mechanical engineer for 4 years, I enrolled Langara College
              and took web & mobile app development program to dive into new field.
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Here are a few technologies I've learned:
            </Typography>
            <List dense style={{ paddingRight: '8em' }}>
              <Grid container direction='row'>
                {techs.map((tech, i) => (
                  <Grid item key={i} sm={6} xs={12}>
                    <ListItem>
                      <ListItemText
                        primary={tech}
                        primaryTypographyProps={{ color: 'secondary' }}
                      />
                    </ListItem>
                  </Grid>
                ))}
              </Grid>
            </List>
          </Grid>
          <Grid item container direction='row'>
            <Grid item style={{ marginRight: '2em' }}>
              <Button
                component={Link}
                href="/about"
                variant="contained"
                color="primary"
                disableRipple
                size="large"
                className={classes.btn}
              >
                Resume
            </Button>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                href="#contact"
                variant="contained"
                color="primary"
                disableRipple
                size="large"
                className={classes.btn}
              >
                Contact Me
            </Button>
            </Grid>
          </Grid>
        </Grid>
        <Hidden mdUp>
          <Grid item style={{ marginTop: '2em' }}>
            <img src="/portrait.jpg" alt="portrait" width="100%" />
          </Grid>
        </Hidden>
      </Grid>

      <Divider className={classes.divider} />

      <Grid item container direction="column" id="works" className={classes.sectionContainer}>
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

      <Divider className={classes.divider} />

      <Grid item container direction="column" id="contact" className={classes.sectionContainer}>
        <Grid item style={{ marginBottom: '2em' }}>
          <Typography variant={matchesXS ? 'h4' : 'h2'}>Contact Me</Typography>
        </Grid>
        {contacts.map((contact, i) => (
          <Grid item key={i} className={classes.contact}>
            <Button size="small" color="secondary" disableRipple component={'a'} href={contact.link}>
              {contact.icon}&nbsp;&nbsp;&nbsp;{contact.id}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}
