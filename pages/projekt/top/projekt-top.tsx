import { Box, Button, useMediaQuery, useTheme } from '@mui/material'

import { ProjektTopSVG } from './projekt-top-svg'

export const ProjektTop = () => {
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
          height: '35rem',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: `${mdBreakpointUp ? 'space-around' : 'center'}`,
          flexDirection: `${smBreakpointUp ? 'row' : 'row-reverse'}`,
          position: 'relative',
        }}
      >
        {/* Image - Left Side */}
        <Box
          sx={{
            marginRight: `${
              lgBreakpointUp ? '5rem' : mdBreakpointUp ? '2rem' : '0'
            }`,
            marginLeft: `${
              xlBreakpointUp
                ? '10rem'
                : lgBreakpointUp
                ? '7rem'
                : mdBreakpointUp
                ? '4rem'
                : '0'
            }`,
            position: `${mdBreakpointDown ? 'absolute' : 'relative'}`,
            right: `${mdBreakpointDown ? '-3rem' : '0'}`,
            top: `${mdBreakpointDown ? '5rem' : '0'}`,
            zIndex: `${mdBreakpointDown ? '-4' : '3'}`,
          }}
        >
          <ProjektTopSVG />
        </Box>
        {/* Text - Right Side */}
        <Box
          sx={{
            width: '60%',
            position: `${mdBreakpointDown ? 'absolute' : 'box'}`,
            top: `${mdBreakpointDown ? '3rem' : '0'}`,
          }}
        >
          <h1>
            <span
              style={{
                color: '#BC27F6',
              }}
            >
              Die Plattform
            </span>
            <br />
            von Studenten für Studenten
          </h1>
          {/* Buttons */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: `${smBreakpointDown ? 'column' : 'row'}`,
              alignItems: 'flex-start',
              marginTop: '1rem',
            }}
          >
            <Button
              variant="contained"
              href="/"
              sx={{
                width: '140px',
                height: '45px',
                backgroundImage: `linear-gradient(to bottom, #AD23F6 3.51%, #7E17F6 74.06%)`,
                borderRadius: '100px',
                marginRight: '1rem',
              }}
            >
              Demo testen
            </Button>
            <Button
              variant="contained"
              href="/"
              sx={{
                width: '140px',
                height: '45px',
                ml: '2rem',
                bgcolor: '#DADADA',
                borderRadius: '100px',
                color: 'rgba(0, 0, 0, 0.46)',
                margin: `${smBreakpointDown ? '1rem 0 0 0' : 0}`,
                ':hover': {
                  background: '#DADADA',
                },
              }}
            >
              Kontakt
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}
