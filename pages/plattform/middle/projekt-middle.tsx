import { Box, useMediaQuery, useTheme } from '@mui/material'
import PlattformMiddleBoxes from './projekt-middle-boxes'

const PlattformMiddle = () => {
  const theme = useTheme()
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <>
      <Box sx={{ position: 'relative', width: '100vw' }}>
        {/* Polygon */}
        <Box
          className="polygonProject"
          sx={{
            background: '#192D3E',
            width: '100vw',
            height: `${mdBreakpointDown ? '125rem' : '60rem'}`,
            zIndex: '-1',
            position: 'absolute',
            top: '-10rem',
          }}
        />
        {/* Text */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <h1
            style={{
              color: '#BC27F6',
              width: '80%',
            }}
          >
            Investieren Sie mit uns in die Weiterentwicklung und Vernetzung
            Ihrer Studenten
          </h1>
          <Box
            sx={{
              display: 'flex',
              flexDirection: `${mdBreakpointDown ? 'column' : 'row'}`,
              justifyContent: 'space-evenly',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <PlattformMiddleBoxes />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default PlattformMiddle
