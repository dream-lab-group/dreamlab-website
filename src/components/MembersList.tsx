import { Box, Grid, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'

const Members = () => {
  const theme = useTheme()
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'))
  const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'))
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'))
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'))

  const data = [
    {
      key: 1,
      image: '/assets/team/nikola.png',
      name: 'Nikola Vucic',
      role: 'Game Artist',
    },
    {
      key: 2,
      image: '/assets/team/hadrian.png',
      name: 'Hadrian Chio',
      role: 'Web Developer',
    },
    {
      key: 3,
      image: '/assets/team/michel.png',
      name: 'Michel Weber',
      role: 'VFX Artist',
    },
    {
      key: 4,
      image: '/assets/team/jasmin.png',
      name: 'Jasmin Fischli',
      role: 'Web Designer',
    },
    {
      key: 5,
      image: '/assets/team/claudio.png',
      name: 'Claudio Mühle',
      role: 'Film Producer',
    },
    {
      key: 6,
      image: '/assets/team/sarah.png',
      name: 'Sarah Candolfi',
      role: 'Web Developer',
    },
    {
      key: 7,
      image: '/assets/team/manu.png',
      name: 'Manuela Pfister',
      role: 'VFX Artist',
    },
    {
      key: 8,
      image: '/assets/team/fiona.png',
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
          alignItems="center"
          justifyContent="center"
          sx={{
            minHeight: '100vh',
          }}
        >
          {data.map((member) => (
            <Grid container item md={1} key={1}>
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
            <Grid container item md={3} key={1}>
              <Grid item>
                <Grid
                  position="relative"
                  style={{
                    height: '11rem',
                    width: '11rem',
                  }}
                >
                  <Image
                    src={member.image}
                    alt="Image Application"
                    layout="fill"
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
            <Grid container item sm={4} key={1}>
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

/* 
import { Grid, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'

const Members = () => {
  const theme = useTheme()
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'))
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'))
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'))

  const data = [
    {
      key: 1,
      image: '/assets/nikola.png',
      name: 'Nikola Vucic',
      role: 'Game Artist',
    },
    {
      key: 2,
      image: '/assets/hadrian.png',
      name: 'Hadrian Chio',
      role: 'Web Developer',
    },
    {
      key: 3,
      image: '/assets/michel.png',
      name: 'Michel Weber',
      role: 'VFX Artist',
    },
    {
      key: 4,
      image: '/assets/jasmin.png',
      name: 'Jasmin Fischli',
      role: 'Web Designer',
    },
    {
      key: 5,
      image: '/assets/claudio.png',
      name: 'Claudio Mühle',
      role: 'Film Producer',
    },
    {
      key: 6,
      image: '/assets/sarah.png',
      name: 'Sarah Candolfi',
      role: 'Web Developer',
    },
    {
      key: 7,
      image: '/assets/manu.png',
      name: 'Manuela Pfister',
      role: 'VFX Artist',
    },
    {
      key: 8,
      image: '/assets/fiona.png',
      name: 'Fiona Hilpertshauser',
      role: 'Web Designer',
    },
  ]

  return (
    <Grid
      container
    >
      {data.map((member) => (
        <Grid
          item
          container
          columns={{ xs: 1, sm: 3, md: 4 }}
          key={member.key}
          direction="column"
        >
          <Grid
            item
            position="relative"
            style={{
              height: `${
                lgBreakpointUp
                  ? '14rem'
                  : mdBreakpointUp
                  ? '11rem'
                  : smBreakpointDown
                  ? '12rem'
                  : '9rem'
              }`,
              width: `${
                lgBreakpointUp
                  ? '14rem'
                  : mdBreakpointUp
                  ? '11rem'
                  : smBreakpointDown
                  ? '12rem'
                  : '9rem'
              }`,
            }}
          >
            <Image src={member.image} alt="Image Application" layout="fill" />
          </Grid>
          <Grid item>
            <p style={{ fontWeight: 'bold' }}>{member.name}</p>
            <p>{member.role}</p>
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}

export default Members
 */
