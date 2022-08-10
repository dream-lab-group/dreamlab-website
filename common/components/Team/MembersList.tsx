import { Box, Grid, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'

const Members = () => {
  const theme = useTheme()
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'))
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'))
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'))

  const data = [
    {
      key: 1,
      image: '/team/nikola.png',
      name: 'Nikola Vucic',
      role: 'Game Artist',
    },
    {
      key: 2,
      image: '/team/hadrian.png',
      name: 'Hadrian Chio',
      role: 'Web Developer',
    },
    {
      key: 3,
      image: '/team/michel.png',
      name: 'Michel Weber',
      role: 'VFX Artist',
    },
    {
      key: 4,
      image: '/team/jasmin.png',
      name: 'Jasmin Fischli',
      role: 'Web Designer',
    },
    {
      key: 5,
      image: '/team/claudio.png',
      name: 'Claudio Mühle',
      role: 'Film Producer',
    },
    {
      key: 6,
      image: '/team/sarah.png',
      name: 'Sarah Candolfi',
      role: 'Web Developer',
    },
    {
      key: 7,
      image: '/team/manu.png',
      name: 'Manuela Pfister',
      role: 'VFX Artist',
    },
    {
      key: 8,
      image: '/team/fiona.png',
      name: 'Fiona Hilpertshauser',
      role: 'Web Designer',
    },
  ]

  return (
    <Box>
      {smBreakpointDown ? (
        <Grid
          spacing={0}
          direction="column"
          container
          alignItems="center"
          justifyContent="center"
          sx={{
            minHeight: '100vh',
          }}
        >
          {data.map((member) => (
            <Grid container item xs={1} key={member.key}>
              <Grid item>
                <Grid
                  position="relative"
                  style={{
                    height: '18rem',
                    width: '18rem',
                  }}
                >
                  <Image
                    src={member.image}
                    alt="Image Application"
                    layout="fill"
                    quality={50}
                  />
                </Grid>
                <p style={{ fontWeight: 'bold' }}>{member.name}</p>
                <p>{member.role}</p>
              </Grid>
            </Grid>
          ))}
        </Grid>
      ) : mdBreakpointUp ? (
        <Grid container>
          {data.map((member) => (
            <Grid container item md={3} key={member.key}>
              <Grid item>
                <Grid
                  position="relative"
                  style={{
                    height: `${lgBreakpointUp ? '15rem' : '11rem'}`,
                    width: `${lgBreakpointUp ? '15rem' : '11rem'}`,
                  }}
                >
                  <Image
                    src={member.image}
                    alt="Image Application"
                    layout="fill"
                    priority
                    quality={50}
                  />
                </Grid>
                <p style={{ fontWeight: 'bold' }}>{member.name}</p>
                <p>{member.role}</p>
              </Grid>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container>
          {data.map((member) => (
            <Grid container item sm={4} key={member.key}>
              <Grid item>
                <Grid
                  position="relative"
                  style={{
                    height: '9rem',
                    width: '9rem',
                  }}
                >
                  <Image
                    src={member.image}
                    alt="Image Application"
                    layout="fill"
                    quality={50}
                  />
                </Grid>
                <p style={{ fontWeight: 'bold' }}>{member.name}</p>
                <p>{member.role}</p>
              </Grid>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  )
}

export default Members
