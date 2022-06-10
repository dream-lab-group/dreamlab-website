import { useMediaQuery, useTheme } from '@mui/material'

export const TeamTextSm = () => {
      const theme = useTheme()
      const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
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
    </>
  )
}
