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
      id="team"
      sx={{
        position: 'relative',
        height: `${
          mdBreakpointUp ? '50rem' : smBreakpointUp ? '60rem' : '195rem'
        }`,
        background: `${mdBreakpointDown ? '#F8F8F8' : 'none'}`,
      }}
    >
      {/* Polygon */}
      <Box
        /*         className={lgBreakpointUp ? "teamPoly" :  "mediumTeamPoly"}
         */
        className="teamPoly"
        sx={{
          /* height: '95rem', */
          height: `${
            lgBreakpointDown
              ? '100rem'
              : mdBreakpointDown
              ? '120rem'
              : smBreakpointDown
              ? '500rem'
              : '95rem'
          }`,
          width: '100%',
          zIndex: -4,
          background: '#F8F8F8 ',
          position: 'absolute',
          top: '-45rem' /* Distance to upper div */,
        }}
      />
      {/* Team Text */}
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
      ) : mdBreakpointUp ? (
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
            bottom: '45rem',
            display: `${smBreakpointDown ? 'none' : 'block'}`,
          }}
        >
          TEAM
        </p>
      )}
      {/* Content */}
      {lgBreakpointUp ? (
        <Box
          sx={{
            position: 'absolute',
            top: '2rem',
            left: '11rem',
          }}
        >
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
            Aufgestellt und motiviert
          </p>
          <Members />
        </Box>
      ) : smBreakpointUp ? (
        <Box
          sx={{
            position: 'absolute',
            top: '12rem',
            left: '5rem',
          }}
        >
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
            Aufgestellt und motiviert
          </p>
          <Members />
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <p style={{ fontSize: '18px', fontWeight: 'bold', marginTop: `${smBreakpointDown ? "3rem" : "0"}` }}>
            Aufgestellt und motiviert
          </p>
          <Members />
        </Box>
      )}
    </Box>
  )
}

export default Team
