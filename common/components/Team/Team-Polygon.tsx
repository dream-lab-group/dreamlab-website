import { Box, useMediaQuery, useTheme } from '@mui/material'

export const TeamPolygon = () => {
      const theme = useTheme()
      const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'))
      const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'))
      const lgBreakpointDown = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <>
      <Box
        className="teamPoly"
        sx={{
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
    </>
  )
}
