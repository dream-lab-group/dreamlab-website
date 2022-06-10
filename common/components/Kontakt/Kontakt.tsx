import {
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material'

import { KontaktText } from './Kontakt-Text'
import { KontaktFormular } from './Kontakt-Formular'

function Kontakt() {
  const theme = useTheme()
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <Box
      id="kontakt"
      sx={{
        background: '#192D3E',
        color: 'white',
        height: `${lgBreakpointUp ? '40rem' : '60rem'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'space-between',
        flexDirection: `${lgBreakpointUp ? 'row' : 'column'}`,
        padding: '0 5rem 0 5rem',
        width: '100%',
      }}
    >
      <KontaktText />
      <KontaktFormular/>

    </Box>
  )
}

export default Kontakt
