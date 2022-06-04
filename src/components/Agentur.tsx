import { Box, CardMedia, useMediaQuery, useTheme, Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

/* Assets */
import application from '../assets/application.png'
import applicationFull from '../assets/applicationFull.png'

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
      sx={{ margin: `${smBreakpointUp ? '4rem 0 4rem 0' : 0}` }}
    >
      {/* Agentur - Top Part */}
      <Box>
        {smBreakpointUp ? (
          <Box
            sx={{
              width: `${
                lgBreakpointUp ? '800px' : xlBreakpointUp ? '1000px' : '500px'
              }`,
              height: `${
                lgBreakpointUp ? '586px' : xlBreakpointUp ? '733px' : '366px'
              }`,
              position: 'absolute',
              right: 0,
              zIndex: '-1',
            }}
          >
            <Image
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
            <Box
              className="polygonsmall"
              sx={{
                width: '100%',
                background: '#192D3E',
                height: '40rem',
                zIndex: '-1',
                position: 'absolute',
                top: 0,
              }}
            />
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
            width: `${smBreakpointUp ? '35%' : '75%'}`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginLeft: '10%',
            fontSize: `${smBreakpointUp ? '14px' : '18px'}`,
            paddingTop: `${smBreakpointUp ? '0' : '25rem'}`,
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
                width: '140px',
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
                width: '140px',
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
          height: `${
            xlBreakpointUp
              ? '70rem'
              : lgBreakpointUp
              ? '60rem'
              : mdBreakpointUp
              ? '40rem'
              : smBreakpointUp
              ? '42rem'
              : '42rem'
          }`,
          zIndex: -2,
        }}
      >
        {/* Polygon */}
        <Box
          className="polygon"
          sx={{
            height: `${
              xlBreakpointUp
                ? '100rem'
                : lgBreakpointUp
                ? '90rem'
                : mdBreakpointUp
                ? '60rem'
                : smBreakpointUp
                ? '60rem'
                : '60rem'
            }`,
            width: '100%',
            background: '#192D3E',
          }}
        />
        {/* Circles */}
        {xlBreakpointUp ? (
          <svg
            style={{ position: 'absolute', top: '29%' }}
            width="600"
            height="852"
            viewBox="0 0 744 852"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="84"
              cy="503"
              r="120.5"
              stroke="#0C1D2B"
              strokeWidth="33"
            />
            <circle
              cx="479.5"
              cy="728.5"
              r="107"
              stroke="#0C1D2B"
              strokeWidth="33"
            />
            <circle
              cx="275"
              cy="137"
              r="120.5"
              stroke="#0C1D2B"
              strokeWidth="33"
            />
            <circle
              cx="631.5"
              cy="311.5"
              r="96"
              stroke="#0C1D2B"
              strokeWidth="33"
            />
            <circle
              cx="383"
              cy="462"
              r="79.5"
              stroke="url(#paint0_linear_178_2359)"
              strokeWidth="33"
            />
            <circle
              cx="545.5"
              cy="62.5"
              r="50"
              stroke="url(#paint1_linear_178_2359)"
              strokeWidth="25"
            />
            <defs>
              <linearGradient
                id="paint0_linear_178_2359"
                x1="309.5"
                y1="350"
                x2="422.5"
                y2="548.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#BC27F6" />
                <stop offset="1" stopColor="#7514F5" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_178_2359"
                x1="497.648"
                y1="-10.4167"
                x2="571.216"
                y2="118.815"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#BC27F6" />
                <stop offset="1" stopColor="#7514F5" />
              </linearGradient>
            </defs>
          </svg>
        ) : lgBreakpointUp ? (
          <svg
            style={{ position: 'absolute', top: '25%' }}
            width="500"
            height="852"
            viewBox="0 0 744 852"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="84"
              cy="503"
              r="120.5"
              stroke="#0C1D2B"
              strokeWidth="33"
            />
            <circle
              cx="479.5"
              cy="728.5"
              r="107"
              stroke="#0C1D2B"
              strokeWidth="33"
            />
            <circle
              cx="275"
              cy="137"
              r="120.5"
              stroke="#0C1D2B"
              strokeWidth="33"
            />
            <circle
              cx="631.5"
              cy="311.5"
              r="96"
              stroke="#0C1D2B"
              strokeWidth="33"
            />
            <circle
              cx="383"
              cy="462"
              r="79.5"
              stroke="url(#paint0_linear_178_2359)"
              strokeWidth="33"
            />
            <circle
              cx="545.5"
              cy="62.5"
              r="50"
              stroke="url(#paint1_linear_178_2359)"
              strokeWidth="25"
            />
            <defs>
              <linearGradient
                id="paint0_linear_178_2359"
                x1="309.5"
                y1="350"
                x2="422.5"
                y2="548.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#BC27F6" />
                <stop offset="1" stopColor="#7514F5" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_178_2359"
                x1="497.648"
                y1="-10.4167"
                x2="571.216"
                y2="118.815"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#BC27F6" />
                <stop offset="1" stopColor="#7514F5" />
              </linearGradient>
            </defs>
          </svg>
        ) : mdBreakpointUp ? (
          <svg
            style={{ position: 'absolute', top: '35%' }}
            width="350"
            height="454"
            viewBox="0 0 425 454"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="73" cy="269" r="63" stroke="#0C1D2B" strokeWidth="20" />
            <path
              d="M339 388C339 419 314.08 444 283.5 444C252.92 444 228 419 228 388C228 357 252.92 332 283.5 332C314.08 332 339 357 339 388Z"
              stroke="#0C1D2B"
              strokeWidth="20"
            />
            <circle cx="175" cy="73" r="63" stroke="#0C1D2B" strokeWidth="20" />
            <path
              d="M415 166.5C415 194.469 392.536 217 365 217C337.464 217 315 194.469 315 166.5C315 138.531 337.464 116 365 116C392.536 116 415 138.531 415 166.5Z"
              stroke="#0C1D2B"
              strokeWidth="20"
            />
            <path
              d="M274 246.5C274 268.684 255.606 287ß 232.5 287C209.394 287 191 268.684 191 246.5C191 224.316 209.394 206 232.5 206C255.606 206 274 224.316 274 246.5Z"
              stroke="url(#paint0_linear_179_2360)"
              strokeWidth="20"
            />
            <path
              d="M345.5 33.5C345.5 48.5042 333.544 60.5 319 60.5C304.456 60.5 292.5 48.5042 292.5 33.5C292.5 18.4958 304.456 6.5 319 6.5C333.544 6.5 345.5 18.4958 345.5 33.5Z"
              stroke="url(#paint1_linear_179_2360)"
              strokeWidth="13"
            />
            <defs>
              <linearGradient
                id="paint0_linear_179_2360"
                x1="193.07"
                y1="187.583"
                x2="251.913"
                y2="292.995"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#BC27F6" />
                <stop offset="1" stopColor="#7514F5" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_179_2360"
                x1="293.734"
                y1="-5.58333"
                x2="333.467"
                y2="63.1711"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#BC27F6" />
                <stop offset="1" stopColor="#7514F5" />
              </linearGradient>
            </defs>
          </svg>
        ) : (
          <svg
            style={{ position: 'absolute', top: '33%' }}
            width="300"
            height="431"
            viewBox="0 0 355 431"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="46"
              cy="113"
              r="39.5"
              stroke="#0C1D2B"
              strokeWidth="13"
            />
            <circle
              cx="258.5"
              cy="379.5"
              r="35"
              stroke="#0C1D2B"
              strokeWidth="13"
            />
            <circle
              cx="228"
              cy="46"
              r="39.5"
              stroke="#0C1D2B"
              strokeWidth="13"
            />
            <circle
              cx="317"
              cy="151"
              r="31.5"
              stroke="#0C1D2B"
              strokeWidth="13"
            />
            <path
              d="M109.5 399.5C109.5 413.699 97.575 425.5 82.5 425.5C67.425 425.5 55.5 413.699 55.5 399.5C55.5 385.301 67.425 373.5 82.5 373.5C97.575 373.5 109.5 385.301 109.5 399.5Z"
              stroke="url(#paint0_linear_179_2361)"
              strokeWidth="11"
            />
            <circle
              cx="177"
              cy="130"
              r="17"
              stroke="url(#paint1_linear_179_2361)"
              strokeWidth="8"
            />
            <defs>
              <linearGradient
                id="paint0_linear_179_2361"
                x1="57.6172"
                y1="362.75"
                x2="94.0954"
                y2="428.863"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#BC27F6" />
                <stop offset="1" stopColor="#7514F5" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_179_2361"
                x1="160.922"
                y1="105.5"
                x2="185.641"
                y2="148.922"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#BC27F6" />
                <stop offset="1" stopColor="#7514F5" />
              </linearGradient>
            </defs>
          </svg>
        )}
        {/* Text */}
        <Box
          sx={{
            color: 'white',
            width: `${mdBreakpointDown ? '18rem' : '28rem'}`,
            position: 'absolute',
            left: `${smBreakpointDown ? '5%' : lgBreakpointUp ? '50%' : '50%'}`,
            top: '55%',
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
              border: 'none',
              borderBottomLeftRadius: `${mdBreakpointDown ? '30px' : '43px'}`,
              borderTopLeftRadius: `${mdBreakpointDown ? '30px' : '43px'}`,
              borderBottomRightRadius: `${mdBreakpointDown ? '30px' : '0'}`,
              borderTopRightRadius: `${mdBreakpointDown ? '30px' : '0'}`,
            }}
            image="https://www.youtube.com/embed/muuK4SpRR5M"
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
