import { Box, CardMedia, useMediaQuery, useTheme, Button } from '@mui/material'
import shadows from '@mui/material/styles/shadows'
import Image from 'next/image'
import Link from 'next/link'

/* Assets */
import application from '../../public/agentur/application.png'
import applicationFull from '../../public/agentur/applicationFull.png'
import bgAbout from '../../public/agentur/agentur-bg-lg.png'
import bgAboutSmall from '../../public/agentur/agentur-bg-sm.png'

function Agentur() {
  const theme = useTheme()
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'))
  const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'))
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'))
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'))
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'))
  const xlBreakpointUp = useMediaQuery(theme.breakpoints.up('xl'))

  return (
    <Box
      id="agentur"
      sx={{ margin: `${mdBreakpointUp ? '4rem 0 4rem 0' : 0}`, width: '100%' }} /* Vorher smBreakpointUp */
    >
      {/* Agentur - Top Part */}
      <Box
        sx={{
          display: `${mdBreakpointUp ? 'block' : 'flex'}`, /* Vorher smBreakpointUp */
          justifyContent: `${mdBreakpointUp ? 'block' : 'center'}`, /* Vorher smBreakpointUp */
          flexDirection: `${mdBreakpointUp ? 'block' : 'column'}`, /* Vorher smBreakpointUp */
          alignItems: `${mdBreakpointUp ? 'block' : 'center'}`, /* Vorher smBreakpointUp */
        }}
      >
        {mdBreakpointUp ? (
          <Box
            sx={{
              width: `${
                lgBreakpointUp ? '650px' : xlBreakpointUp ? '1000px' : '500px'
              }`,
              height: `${
                lgBreakpointUp ? '476px' : xlBreakpointUp ? '733px' : '366px'
              }`,
              position: 'absolute',
              right: 0,
              zIndex: '-1',
            }}
          >
            <Image
            priority
              src={application}
              layout="fill"
              objectFit="fill"
              alt="Image Application"
            />
          </Box>
        ) : (
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              width="1500"
              viewBox="0 0 375 185"
              fill="fill"
              xmlns="http://www.w3.org/2000/svg"
              style={{ zIndex: '-100' }}
            >
              <path
                d="M-0.5 0.5H375V184.5L-0.5 159.5L-0.5 0.5Z"
                fill="#192D3E"
              />
            </svg>

            <Box
              sx={{
                width: '300px',
                height: '220px',
                position: 'absolute',
                top: 45,
                zIndex: '-1',
              }}
            >
              <Image
                src={applicationFull}
                layout="fill"
                objectFit="fill"
                priority
                alt="Image Application"
              />
            </Box>
          </Box>
        )}
        {/* Application Text */}
        <Box
          sx={{
            width: `${smBreakpointDown ? '18rem' : '30rem'}`,
            marginLeft: `${smBreakpointDown ? '0' : '5rem'}`,
            /*             margin: '5rem 5rem 0 5rem',
             */ display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            fontSize: `${smBreakpointUp ? '14px' : '18px'}`,
            paddingTop: `${smBreakpointUp ? '0' : '7rem'}`,
          }}
        >
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</h1>
          <p>
            Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis
          </p>
          {/* Buttons */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              marginTop: '1rem',
              flexDirection: 'row',
            }}
          >
            <Button
              variant="contained"
              href="#team"
              sx={{
                width: `${smBreakpointUp ? '140px' : '120px'}`,
                height: '45px',
                backgroundImage: `linear-gradient(to bottom, #AD23F6 3.51%, #7E17F6 74.06%)`,
                borderRadius: '100px',
                marginRight: '1rem',
              }}
            >
              Team
            </Button>
            <Button
              variant="contained"
              href="#team"
              sx={{
                width: `${smBreakpointUp ? '140px' : '120px'}`,
                height: '45px',
                ml: '2rem',
                bgcolor: '#DADADA',
                borderRadius: '100px',
                color: 'rgba(0, 0, 0, 0.46)',
                margin: `${smBreakpointUp ? 0 : 0}`,
                ':hover': {
                  background: '#DADADA',
                },
              }}
            >
              Kontakt
            </Button>
          </Box>
        </Box>
      </Box>
      {/* Agentur - Middle Part */}
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
        </Box>
      </Box>
      {/* Agentur - Bottom Part */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: `${mdBreakpointDown ? 'column' : 'row-reverse'}`,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <CardMedia
            component="iframe"
            style={{
              height: `${
                xlBreakpointUp
                  ? '34rem'
                  : lgBreakpointUp
                  ? '30rem'
                  : mdBreakpointUp
                  ? '24rem'
                  : smBreakpointUp
                  ? '22rem'
                  : '15rem'
              }`,
              width: `${
                xlBreakpointUp
                  ? '50rem'
                  : lgBreakpointUp
                  ? '45rem'
                  : mdBreakpointUp
                  ? '35rem'
                  : smBreakpointUp
                  ? '33rem'
                  : '18rem'
              }`,
              boxShadow: "0px 4px 38px -4px rgba(0, 0, 0, 0.2)",
              border: 'none',
              borderBottomLeftRadius: `${mdBreakpointDown ? '30px' : '43px'}`,
              borderTopLeftRadius: `${mdBreakpointDown ? '30px' : '43px'}`,
              borderBottomRightRadius: `${mdBreakpointDown ? '30px' : '0'}`,
              borderTopRightRadius: `${mdBreakpointDown ? '30px' : '0'}`,
            }}
            image="https://www.youtube.com/embed/u31qwQUeGuM"
          />
        </Box>
        <Box
          sx={{
            width: `${smBreakpointDown ? '18rem' : '33rem'}`,
            margin: '5rem 5rem 0 5rem',
          }}
        >
          <h1>Wir entwickeln individuelle Studenten Plattformen für Schulen</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad
            minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <Link href="/projekt">
            <p style={{ color: '#BC27F6' }}>mehr erfahren</p>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Agentur
