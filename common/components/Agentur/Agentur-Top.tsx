import { Box, useMediaQuery, useTheme, Button } from '@mui/material'
import Image from 'next/image'

/* Assets */
import application from '../../../public/agentur/application_.png'
import applicationFull from '../../../public/agentur/application_.png'

export const AgenturTop = () => {
  const theme = useTheme()
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'))
  const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'))
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'))
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'))
  const xlBreakpointUp = useMediaQuery(theme.breakpoints.up('xl'))

  return (
    <>
      <Box
        sx={{
          display: `${
            mdBreakpointUp ? 'block' : 'flex'
          }` /* Vorher smBreakpointUp */,
          justifyContent: `${
            mdBreakpointUp ? 'block' : 'center'
          }` /* Vorher smBreakpointUp */,
          flexDirection: `${
            mdBreakpointUp ? 'block' : 'column'
          }` /* Vorher smBreakpointUp */,
          alignItems: `${
            mdBreakpointUp ? 'block' : 'center'
          }` /* Vorher smBreakpointUp */,
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
            display: 'flex',
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
              href="#kontakt"
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
    </>
  )
}
