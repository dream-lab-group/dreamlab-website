import { Box, CardMedia, useMediaQuery, useTheme } from '@mui/material'
import { PlattformVideoSVG } from './projekt-video-svg'

export const PlattformVideo = () => {
  const theme = useTheme()
  const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'))
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'))
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'))
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'))
  const xlBreakpointUp = useMediaQuery(theme.breakpoints.up('xl'))

  return (
    <>
      <Box
        sx={{
          height: `${
            xlBreakpointUp
              ? '50rem'
              : lgBreakpointUp
              ? '50rem'
              : mdBreakpointUp
              ? '45rem'
              : smBreakpointUp
              ? '45rem'
              : '35rem'
          }`,
          marginTop: '10rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <PlattformVideoSVG />
        {/* Video */}
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
            boxShadow: '0px 4px 38px -4px rgba(0, 0, 0, 0.2)',
            border: 'none',
            borderRadius: `${mdBreakpointDown ? '30px' : '43px'}`,
          }}
          image="https://www.youtube.com/embed/u31qwQUeGuM"
        />
      </Box>
    </>
  )
}
