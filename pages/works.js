import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Link from '../src/Link'

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Works
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor nec diam ac tincidunt.
          Vivamus pellentesque mattis consequat. Integer pellentesque ipsum eget elit finibus tincidunt.
          Vestibulum at odio facilisis, viverra nunc quis, tristique nisi. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Mauris tortor lorem, sodales at felis.
        </Typography>
      </Box>
    </Container>
  )
}
