import { Box, useMediaQuery, useTheme } from '@mui/material'

import Members from './MembersList'

function Team() {
  const theme = useTheme()
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'))
  const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'))
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'))
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'))
  const lgBreakpointDown = useMediaQuery(theme.breakpoints.down('lg'))
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'))
  const xlBreakpointUp = useMediaQuery(theme.breakpoints.up('xl'))

  return (
    <Box
      sx={{
        position: 'relative',
/*         height: `${
          xlBreakpointUp
            ? '70rem'
            : lgBreakpointUp
            ? '60rem'
            : mdBreakpointUp
            ? '40rem'
            : smBreakpointUp
            ? '42rem'
            : '42rem'
        }`, */
      }}
    >
      <Box
        className="teamPoly"
        sx={{
          /* height: '95rem', */
          height: `${
            lgBreakpointDown
              ? '100rem'
              :  mdBreakpointDown
              ? '120rem'
              : smBreakpointDown
              ? '140rem'
              :
                '95rem'
          }`,
          width: '100%',
          background: '#F8F8F8',
          position: 'absolute',
          top: '-40rem',
        }}
      >
        {lgBreakpointUp ? (
          <p
            style={{
              fontWeight: 700,
              fontSize: '13.6rem',
              lineHeight: '24px',
              color: '#EEEEEE',
              letterSpacing: '7.46px',
              transform: 'rotate(-90deg)',
              position: 'absolute',
              left: '-16rem',
              bottom: '10rem',
            }}
          >
            TEAM
          </p>
        ) : (
            <p
              style={{
                fontWeight: 700,
                fontSize: '6.25rem',
                lineHeight: '24px',
                color: '#EEEEEE',
                letterSpacing: '7.46px',
                transform: 'rotate(-0deg)',
                position: 'absolute',
                right: '3rem',
                bottom: '32rem',
                display: `${smBreakpointDown ? "none" : "block"}`
              }}
            >
              TEAM
            </p>
        )}
        {/* Content */}
        <Box
          sx={{
            position: 'absolute',
            /* top: '47rem', */
            top: `${
              lgBreakpointDown
                ? '60rem'
                : /*               : mdBreakpointUp
                  ? '40rem'
                  : smBreakpointUp
                  ? '42rem' */
                  '47rem'
            }`,
            /*             left: '11rem',
             */ left: `${
              lgBreakpointDown
                ? '5rem'
                : /*               : mdBreakpointUp
                  ? '40rem'
                  : smBreakpointUp
                  ? '42rem' */
                  '11rem'
            }`,
          }}
        >
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
            Aufgestellt und motiviert
          </p>
          <Members />
        </Box>
      </Box>
    </Box>
  )
}

export default Team
