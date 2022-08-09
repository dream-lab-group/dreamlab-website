import { Box, useMediaQuery, useTheme } from '@mui/material'

export const KontaktText = () => {
  const theme = useTheme()
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'))
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <>
      <Box
        sx={{
          width: `${
            lgBreakpointUp ? '30%' : smBreakpointDown ? '130%' : '100%'
          }`,
          margin: `${lgBreakpointUp ? '0 4rem 0 0' : '0 0 4rem 0'}`,
        }}
      >
        <h1 style={{ color: '#D770FF' }}>Kontaktiere uns!</h1>
        <p>
          Wir freuen uns auf Ihre Kontaktaufnahme und stehen für weitere Fragen
          gerne zur Verfügung.
        </p>
      </Box>
    </>
  )
}
