import { useMediaQuery, useTheme } from '@mui/material'

const PlattformVideoSVG = () => {
  const theme = useTheme()
  const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'))
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'))
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'))
  const xlBreakpointUp = useMediaQuery(theme.breakpoints.up('xl'))

  return (
    <>
      <svg
        style={{ position: 'absolute', zIndex: '-2' }}
        width={`${
          xlBreakpointUp
            ? '1448'
            : lgBreakpointUp
            ? '1200'
            : mdBreakpointUp
            ? '900'
            : smBreakpointUp
            ? '650'
            : '450'
        }`}
        height="auto"
        viewBox="0 0 1598 1050"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="1276.5"
          cy="147.5"
          r="131"
          stroke="#F3F3F3"
          strokeWidth="33"
        />
        <circle cx="1122" cy="946" r="87.5" stroke="#F3F3F3" strokeWidth="33" />
        <circle cx="90.5" cy="932.5" r="74" stroke="#F9F9F9" strokeWidth="33" />
        <circle cx="90.5" cy="932.5" r="74" stroke="#F9F9F9" strokeWidth="33" />
        <circle
          cx="1507.5"
          cy="578.5"
          r="74"
          stroke="#F9F9F9"
          strokeWidth="33"
        />
        <circle
          cx="1507.5"
          cy="578.5"
          r="74"
          stroke="#F9F9F9"
          strokeWidth="33"
        />
        <circle cx="229" cy="295" r="92.5" stroke="#F9F9F9" strokeWidth="33" />
        <circle cx="229" cy="295" r="92.5" stroke="#F9F9F9" strokeWidth="33" />
      </svg>
    </>
  )
}
export default PlattformVideoSVG
