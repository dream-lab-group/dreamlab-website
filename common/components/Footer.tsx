import { Box, useMediaQuery, useTheme } from '@mui/material'

function Footer() {
  const theme = useTheme()
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Box
      sx={{
        background: '#0C1D2B',
        height: `${mdBreakpointUp ? '6.7rem' : '9rem'}`,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: `${mdBreakpointUp ? 'space-between' : 'center'}`,
        flexDirection: `${mdBreakpointUp ? 'row' : 'column'}`,
        padding: `${mdBreakpointUp ? '4rem' : '0'}`,
        fontSize: `${mdBreakpointUp ? '14px' : '12px'}`,
      }}
    >
      <Box>
        <a href="" style={{ marginRight: '1rem' }}>
          Datenschutzerklärung
        </a>
        <a href="">Impressum</a>
      </Box>
      <p>© 2022 made with ❤️ by dream lab. All rights reserved.</p>
    </Box>
  )
}

export default Footer
