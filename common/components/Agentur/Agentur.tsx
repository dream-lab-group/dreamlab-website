import { Box, useMediaQuery, useTheme } from '@mui/material'

import { AgenturBottom } from './Agentur-Bottom'
import { AgenturMiddle } from './Agentur-Middle'
import { AgenturTop } from './Agentur-Top'

function Agentur() {
  const theme = useTheme()
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Box
      sx={{
        margin: `${mdBreakpointUp ? '4rem 0 4rem 0' : 0}`,
        width: '100%',
      }} /* Vorher smBreakpointUp */
    >
      {/* Agentur - Top Part */}
      <AgenturTop />
      {/* Agentur - Middle Part */}
      <AgenturMiddle />
      {/* Agentur - Bottom Part */}
      <AgenturBottom />
    </Box>
  )
}

export default Agentur
