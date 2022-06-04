import {
  FormControl,
  TextField,
  Box,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material'

function Kontakt() {
  const theme = useTheme()
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'))
  const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'))
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'))
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'))
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <Box
      id="kontakt"
      sx={{
        background: '#192D3E',
        color: 'white',
        height: `${lgBreakpointUp ? '40rem' : '60rem'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'space-between',
        flexDirection: `${lgBreakpointUp ? 'row' : 'column'}`,
        padding: '0 5rem 0 5rem',
      }}
    >
      <Box
        sx={{
          width: `${lgBreakpointUp ? '30%' : smBreakpointDown ? "140%" : '100%'}`,
          margin: `${lgBreakpointUp ? '0 4rem 0 0' : '0 0 4rem 0'}`,
        }}
      >
        <h1 style={{ color: '#D770FF' }}>Kontaktiere uns!</h1>
        <p>
          Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </Box>
      <FormControl sx={{ display: 'flex', alignItems: 'flex-end' }}>
        {/* Form */}
        <Box
          sx={{
            background: 'white',
            height: `${
              mdBreakpointUp ? '23rem' : smBreakpointUp ? '30rem' : '28rem'
            }`,
            width: `${
              mdBreakpointUp ? '42rem' : smBreakpointUp ? '35rem' /* ? xsBreakpointUp : "50rem"  */: '21rem'
            }`,
            borderRadius: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: `${
                mdBreakpointUp ? '40rem' : smBreakpointUp ? '33rem' : '19rem'
              }`,
              display: 'flex',
              flexDirection: `${mdBreakpointDown ? 'column' : 'row'}`,
              justifyContent: 'space-between',
            }}
          >
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              margin="normal"
              required
              sx={{
                width: `${
                  mdBreakpointUp ? '14rem' : smBreakpointUp ? '33rem' : '19rem'
                }`,
              }}
            />
            <TextField
              id="outlined-basic"
              label="E-Mail"
              variant="outlined"
              margin="normal"
              required
              sx={{
                width: `${
                  mdBreakpointUp ? '25rem' : smBreakpointUp ? '33rem' : '19rem'
                }`,
              }}
            />
          </Box>
          <TextField
            id="outlined-multiline-static"
            label="Nachricht"
            multiline
            rows={9}
            margin="normal"
            required
            sx={{
              width: `${
                mdBreakpointUp ? '40rem' : smBreakpointUp ? '33rem' : '19rem'
              }`,
            }}
          />
        </Box>
        {/* Button */}
        <Button
          variant="contained"
          href="/#team"
          sx={{
            marginTop: '1rem',
            width: '140px',
            height: '45px',
            backgroundImage: `linear-gradient(to bottom, #AD23F6 3.51%, #7E17F6 74.06%)`,
            borderRadius: '100px',
          }}
        >
          SENDEN
        </Button>
      </FormControl>
    </Box>
  )
}

export default Kontakt
