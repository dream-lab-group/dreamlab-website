import Button from '@mui/material/Button'
import { Container, Box, useMediaQuery, useTheme } from '@mui/material'

import React from 'react'

const Poly = (props: any) => {
  return (
        <Container sx={{position:"relative", margin: "0 4rem 0 0 "}}>

    <Box
      sx={{
        width: '100vw',
        /* height: '20vh', */
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: -2,
        display: "block"
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <g fill="#192D3E">
          <polygon points="0,15  100, 10  100, 70  0, 65" />
        </g>
      </svg>
    </Box>

      {/* Text */}
      <Container sx={{ color: 'white', position: "absolute", top:"0"}}>
        <h1 style={{ color: '#D770FF' }}>Warum dream lab</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad
          minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea
          commodo consequat. Duis
        </p>
      </Container>
        </Container>
  )
}

export default Poly
