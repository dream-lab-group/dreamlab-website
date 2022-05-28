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
      image: '/assets/nikola.png',
      name: 'Hadrian Chio',
      role: 'Web Developer',
    },
    {
      key: 3,
      image: '/assets/nikola.png',
      name: 'Michel Weber',
      role: 'VFX Artist',
    },
    {
      key: 4,
      image: '/assets/nikola.png',
      name: 'Jasmin Fischli',
      role: 'Web Designer',
    },
    {
      key: 5,
      image: '/assets/nikola.png',
      name: 'Claudio Mühle',
      role: 'Film Producer',
    },
    {
      key: 6,
      image: '/assets/nikola.png',
      name: 'Sarah Candolfi',
      role: 'Web Developer',
    },
    {
      key: 7,
      image: '/assets/nikola.png',
      name: 'Manuela Pfister',
      role: 'VFX Artist',
    },
    {
      key: 8,
      image: '/assets/nikola.png',
      name: 'Fiona Hilpertshauser',
      role: 'Web Designer',
    },
  ]

  /*   const theme = useTheme()
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'))
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg')) */

  return (
    <Grid
      container /*      columns={4} */
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
        <Grid item md={3} xs={8} sm={6} key={member.key}>
          {/*           <Image
            src={member.image}
            layout="fill"
            objectFit="fill"
            alt="Image Application"
          /> */}
          <Box
            sx={{
              height: `${
                  lgBreakpointUp ? '16rem' : smBreakpointUp ? '10.75rem' : '9.75rem'
                }`,
              width: `${
                lgBreakpointUp ? '16rem' : smBreakpointUp ? '11.06rem' : '10.3rem'
              }`,
              border: 'solid 2px black',
            }} 
          ></Box>
          <p style={{ fontWeight: 'bold' }}>{member.name}</p>
          <p>{member.role}</p>
        </Grid>
      ))}
    </Grid>
  )
}

export default Members
