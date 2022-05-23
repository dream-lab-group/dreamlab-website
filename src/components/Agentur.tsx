import Button from '@mui/material/Button'
import { Container, Box, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'

/* Assets */
import application from '../assets/application.png'

function Agentur() {
  const theme = useTheme()
  const smBreakpointDown = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <Box sx={{ margin: '4rem 0 4rem 0' }}>
      {smBreakpointDown ? (
        <Container>
          {' '}
          {/* sx={{marginBottom:"5rem"}} */}
          {/* Application */}
          <Container
            sx={{
              width: 500,
              height: 366,
              position: 'absolute',
              right: -40,
              zIndex: '-1',
            }}
          >
            <Image
              src={application}
              layout="fill"
              objectFit="fill"
              alt="Image Application"
            />
          </Container>
          {/* Application Text */}
          <Container
            className="upperpartText"
            sx={{
              width: '55%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
              margin: 0,
            }}
          >
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
            </h1>
            <p>
              Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis
            </p>
            {/* Buttons */}
            <Container
              sx={{ display: 'flex', alignItems: 'left', marginTop: '1rem' }}
            >
              <Button
                variant="contained"
                href="/#team"
                sx={{
                  width: '140px',
                  height: '45px',
                  backgroundImage: `linear-gradient(to bottom, #AD23F6 3.51%, #7E17F6 74.06%)`,
                  borderRadius: '100px',
                }}
              >
                Team
              </Button>
              <Button
                variant="contained"
                href="/#team"
                sx={{
                  width: '140px',
                  height: '45px',
                  ml: '2rem',
                  bgcolor: '#DADADA',
                  borderRadius: '100px',
                  color: 'rgba(0, 0, 0, 0.46)',
                  ':hover': {
                    background: '#DADADA',
                  },
                }}
              >
                Kontakt
              </Button>
            </Container>
          </Container>
        </Container>
      ) : (
        /* =============================== */
        /* Phone Size */
        /* =============================== */
        <Container>
          {/* Application */}
          <Container
            sx={{
              width: 300,
              height: 220,
              position: 'absolute',
              right: -40,
              zIndex: '-1',
            }}
          >
            <Image
              src={application}
              layout="fill"
              objectFit="fill"
              alt="Image Application"
            />
          </Container>
          {/* Application Text */}
          <Container
            className="upperpartText"
            sx={{
              width: '85%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
              margin: 0,
            }}
          >
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
            </h1>
            <p>
              Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis
            </p>
            {/* Buttons */}
            <Container sx={{ flexDirection: 'column', marginLeft: 0 }}>
              {' '}
              {/* display:"flex", alignItems:"left", marginTop: "1rem" */}
              <Button
                variant="contained"
                href="/#team"
                sx={{
                  width: '140px',
                  height: '45px',
                  backgroundImage: `linear-gradient(to bottom, #AD23F6 3.51%, #7E17F6 74.06%)`,
                  borderRadius: '100px',
                }}
              >
                Team
              </Button>
              <Button
                variant="contained"
                href="/#team"
                sx={{
                  width: '140px',
                  height: '45px',
                  ml: '2rem',
                  bgcolor: '#DADADA',
                  borderRadius: '100px',
                  color: 'rgba(0, 0, 0, 0.46)',
                  marginLeft: 0,
                  marginTop: 3,
                  ':hover': {
                    background: '#DADADA',
                  },
                }}
              >
                Kontakt
              </Button>
            </Container>
          </Container>
        </Container>
      )}

      {/* About */}
      <Container sx={{ position: "relative" }}>
        <Box
          sx={{
            width: '100vw',
            height: '20vh',
            position: 'absolute',
            left: 0,
            zIndex: -2,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <g fill="#192D3E">
              <polygon points="0,15  100, 10  100, 70  0, 65" />{' '}
            </g>
          </svg>
        </Box>

        {/* Text */}
        <Container sx={{ color: 'white', position:"absolute", top:"0", left:"50%" }}>
          <h1 style={{ color: '#D770FF' }}>Warum dream lab</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad
            minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex
            ea commodo consequat. Duis
          </p>
        </Container>
      </Container>

    </Box>
  )
}

export default Agentur
