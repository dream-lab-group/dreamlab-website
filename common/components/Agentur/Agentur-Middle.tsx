import { Box, Button, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'

/* Assets */
import bgAbout from '../../../public/agentur/agentur-bg-lg.webp'
import bgAboutSmall from '../../../public/agentur/agentur-bg-sm.webp'

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
        id="agentur"
        sx={{
          position: 'relative',
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
            dream lab ist eine Gruppe aus engagierten und jungen Köpfen. Als
            ehemalige Studierende wollen wir eine Plattform erstellen, wo
            Studierende sich für Projekte finden und weiterentwickeln.
          </p>
          <Button
            variant="contained"
            href="#team"
            sx={{
              width: `${smBreakpointUp ? '140px' : '120px'}`,
              height: '45px',
              backgroundImage: `linear-gradient(to bottom, #AD23F6 3.51%, #7E17F6 74.06%)`,
              borderRadius: '100px',
              marginTop: '1rem',
              cursor: 'pointer',
            }}
            className="fontfamily"
          >
            Team
          </Button>
        </Box>
      </Box>
    </>
  )
}
