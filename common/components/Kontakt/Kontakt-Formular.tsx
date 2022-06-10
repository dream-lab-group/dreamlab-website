import {
  FormControl,
  TextField,
  Box,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material'

export const KontaktFormular = () => {
  const theme = useTheme()
  const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'))
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'))
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <>
      <FormControl sx={{ display: 'flex', alignItems: 'flex-end' }}>
        {/* Form */}
        <Box
          sx={{
            background: 'white',
            height: `${
              mdBreakpointUp ? '23rem' : smBreakpointUp ? '30rem' : '28rem'
            }`,
            width: `${
              mdBreakpointUp
                ? '42rem'
                : smBreakpointUp
                ? '35rem' /* ? xsBreakpointUp : "50rem"  */
                : '21rem'
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
    </>
  )
}
