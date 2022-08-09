import { Box, useMediaQuery, useTheme } from '@mui/material'
import { PlattformPricingBoxes } from './projekt-pricing-boxes'

export const PlattformPricing = () => {
  const theme = useTheme()
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <>
      <Box
        sx={{
          background: '#F8F8F8',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '2rem 0 2rem 0',
        }}
      >
        <h1
          style={{
            padding: `${mdBreakpointDown ? '0 2rem 0 2rem' : '0 0 2rem 0'}`,
          }}
        >
          Der passende Preisplan für Ihre Bedürfnisse
        </h1>
        <PlattformPricingBoxes />
      </Box>
    </>
  )
}
