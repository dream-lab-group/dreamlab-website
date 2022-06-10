import { Box, useMediaQuery, useTheme } from '@mui/material'
import Members from '../MembersList'

export const TeamContentXS = () => {
  const theme = useTheme()
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <p
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
            marginTop: `${smBreakpointDown ? '3rem' : '0'}`,
          }}
        >
          Aufgestellt und motiviert
        </p>
        <Members />
      </Box>
    </>
  )
}
