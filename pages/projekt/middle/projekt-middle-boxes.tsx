import { Box, useMediaQuery, useTheme } from '@mui/material'

export const ProjektMiddleBoxes = () => {
  const theme = useTheme()
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'))
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'))
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'))
  const xlBreakpointUp = useMediaQuery(theme.breakpoints.up('xl'))

  const cardStyles = {
    height: '16rem',
    display: 'flex',
    flexDirection: 'column',
  }

  const data = [
    {
      key: 1,
      title: 'Titel',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud exercitation laboris nisi utaliquip ex ea commodo consequat. Duis',
    },
    {
      key: 2,
      title: 'Titel',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud exercitation laboris nisi utaliquip ex ea commodo consequat. Duis',
    },
    {
      key: 3,
      title: 'Titel',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud exercitation laboris nisi utaliquip ex ea commodo consequat. Duis',
    },
  ]

  return (
    <>
      {data.map((box) => (
        <Box
          key={box.key}
          sx={{
            cardStyles,
            width: `${
              xlBreakpointUp
                ? '24rem'
                : lgBreakpointUp
                ? '18rem'
                : mdBreakpointUp
                ? '16rem'
                : '21rem'
            }`,
            marginTop: `${mdBreakpointDown ? '3rem' : '1rem'}`,
          }}
        >
          <Box
            sx={{
              height: `${
                xlBreakpointUp
                  ? '16rem'
                  : lgBreakpointUp
                  ? '11rem'
                  : mdBreakpointUp
                  ? '10rem'
                  : '14rem'
              }`,
              width: `${
                xlBreakpointUp
                  ? '24rem'
                  : lgBreakpointUp
                  ? '18rem'
                  : mdBreakpointUp
                  ? '16rem'
                  : '21rem'
              }`,
              background: 'white',
              borderRadius: '21px',
            }}
          ></Box>
          <Box>
            <h2 style={{ color: '#BC27F6' }}>{box.title}</h2>
            <p style={{ color: 'white' }}>{box.description}</p>
          </Box>
        </Box>
      ))}
    </>
  )
}
