import { Box, Grid, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'

const Members = () => {
  const theme = useTheme()
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'))
  const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'))
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'))
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'))
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'))
  const xlBreakpointUp = useMediaQuery(theme.breakpoints.up('xl'))

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

  /*   const theme = useTheme()
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'))
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg')) */

  return (
    <Grid
      container

      /*      columns={4} */
      /*       width="100%"
      maxWidth="2290px" */
      /*       paddingY="40px"
      paddingX={`${
        smBreakpointDown ? '20px' : lgBreakpointUp ? '120px' : '42px'
      }`} */
      /*       spacing={{ sm: 3, md: 3, lg: 3 }}
       */
    >
      {data.map((member) => (
        <Grid item container md={3} xs={8} sm={4} key={member.key} direction="column">
          <Grid item position="relative" height={100} width={100}>
            <Image src={member.image} alt="Image Application" layout="fill" />
          </Grid>
          <Grid item>
            <p style={{ fontWeight: 'bold' }}>{member.name}</p>
            <p>{member.role}</p>
          </Grid>
          {/* Has to be the Image, height and width already set!!! */}
          {/*           <Box
            sx={{
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
              border: 'solid 2px black',
            }}
          > */}
          {/*             <Image
              src={member.image}
              layout="fill"
              objectFit="fill"
              alt="Image Application"
             /> */}
          {/*           </Box>
           */}{' '}
        </Grid>
      ))}
    </Grid>
  )
}

export default Members
