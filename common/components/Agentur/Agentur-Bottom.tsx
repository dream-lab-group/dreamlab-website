import { Box, CardMedia, useMediaQuery, useTheme } from '@mui/material'
import Link from 'next/link'

export const AgenturBottom = () => {
      const theme = useTheme()
      const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'))
      const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'))
      const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'))
      const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'))
      const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'))
      const xlBreakpointUp = useMediaQuery(theme.breakpoints.up('xl'))

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: `${mdBreakpointDown ? 'column' : 'row-reverse'}`,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <CardMedia
            component="iframe"
            style={{
              height: `${
                xlBreakpointUp
                  ? '34rem'
                  : lgBreakpointUp
                  ? '30rem'
                  : mdBreakpointUp
                  ? '24rem'
                  : smBreakpointUp
                  ? '22rem'
                  : '15rem'
              }`,
              width: `${
                xlBreakpointUp
                  ? '50rem'
                  : lgBreakpointUp
                  ? '45rem'
                  : mdBreakpointUp
                  ? '35rem'
                  : smBreakpointUp
                  ? '33rem'
                  : '18rem'
              }`,
              boxShadow: "0px 4px 38px -4px rgba(0, 0, 0, 0.2)",
              border: 'none',
              borderBottomLeftRadius: `${mdBreakpointDown ? '30px' : '43px'}`,
              borderTopLeftRadius: `${mdBreakpointDown ? '30px' : '43px'}`,
              borderBottomRightRadius: `${mdBreakpointDown ? '30px' : '0'}`,
              borderTopRightRadius: `${mdBreakpointDown ? '30px' : '0'}`,
            }}
            image="https://www.youtube.com/embed/u31qwQUeGuM"
          />
        </Box>
        <Box
          sx={{
            width: `${smBreakpointDown ? '18rem' : '33rem'}`,
            margin: '5rem 5rem 0 5rem',
          }}
        >
          <h1>Wir entwickeln individuelle Studenten Plattformen für Schulen</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad
            minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <Link href="/projekt">
            <p style={{ color: '#BC27F6', cursor:"pointer" }}>mehr erfahren</p>
          </Link>
        </Box>
      </Box>
    </>
  )
}
