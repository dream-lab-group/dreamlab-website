import { Box, Button, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'

/* Assets */
import bgAbout from '../../../public/agentur/agentur-bg-lg.png'
import bgAboutSmall from '../../../public/agentur/agentur-bg-sm.png'

export const AgenturMiddle = () => {
  const theme = useTheme()
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'))
  const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'))
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'))
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'))
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'))
  const xlBreakpointUp = useMediaQuery(theme.breakpoints.up('xl'))

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          zIndex: -2,
        }}
      >
        <Box>
          {smBreakpointUp ? (
            <Image src={bgAbout} layout="responsive" alt="Image Application" />
          ) : (
            <Image
              src={bgAboutSmall}
              layout="responsive"
              alt="Image Application"
            />
          )}
        </Box>
        {/* Text */}
        <Box
          sx={{
            color: 'white',
            width: `${
              mdBreakpointDown ? '18rem' : xlBreakpointUp ? '35rem' : '20rem'
            }`,
            position: 'absolute',
            left: `${
              smBreakpointDown
                ? '11%'
                : lgBreakpointUp
                ? '60%'
                : mdBreakpointUp
                ? '52%'
                : '50%'
            }`,
            top: '35%',
          }}
        >
          <h1 style={{ color: '#D770FF' }}>Warum dream lab</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad
            minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex
            ea commodo consequat. Duis
          </p>
          <Button
            variant="contained"
            href="#team"
            sx={{
              width: `${smBreakpointUp ? '140px' : '120px'}`,
              height: '45px',
              backgroundImage: `linear-gradient(to bottom, #AD23F6 3.51%, #7E17F6 74.06%)`,
              borderRadius: '100px',
              marginTop:"1rem"
            }}
          >
            Team
          </Button>
        </Box>
      </Box>
    </>
  )
}
