import { Box, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'
import portfolio from '../../../public/plattform/portfolio.png'
import teilen from '../../../public/plattform/teilen.png'
import vernetzen from '../../../public/plattform/vernetzen.png'

export const PlattformMiddleBoxes = () => {
  const theme = useTheme()
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'))
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'))
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'))
  const xlBreakpointUp = useMediaQuery(theme.breakpoints.up('xl'))

  const cardStyles = {
    height: '16rem',
    display: 'flex',
    flexDirection: 'column',
  }

  const data = [
    {
      key: 1,
      image: teilen,
      title: 'Teilen von Content',
      description:
        'Die Studenten können unkomliziert ein eigenes Profil erstellen und ihre Projekte in einem geschützten Raum teilen und sich von anderen Arbeiten inspirieren lassen.',
    },
    {
      key: 2,
      image: vernetzen,
      title: 'Vernetzung',
      description:
        'Auf unserer Plattform können sich Studierende verschiedener Fachrichtungen an einer Schule austauschen und untereinander vernetzen.',
    },
    {
      key: 3,
      image: portfolio,
      title: 'Portfolio',
      description:
        'Jedes hochgeladene Projekt erweitert das Portfolio der Studierenden, was die Chance direkt in den Arbeitsmarkt einzusteigen erhöht.',
    },
  ]

  return (
    <>
      {data.map((box) => (
        <Box
          key={box.key}
          sx={{
            cardStyles,
            width: `${
              xlBreakpointUp
                ? '24rem'
                : lgBreakpointUp
                ? '18rem'
                : mdBreakpointUp
                ? '16rem'
                : '21rem'
            }`,
            marginTop: `${mdBreakpointDown ? '3rem' : '1rem'}`,
          }}
        >
          <Box
            sx={{
              height: `${
                xlBreakpointUp
                  ? '16rem'
                  : lgBreakpointUp
                  ? '11rem'
                  : mdBreakpointUp
                  ? '10rem'
                  : '14rem'
              }`,
              width: `${
                xlBreakpointUp
                  ? '24rem'
                  : lgBreakpointUp
                  ? '18rem'
                  : mdBreakpointUp
                  ? '16rem'
                  : '21rem'
              }`,
              borderRadius: '21px',
            }}
          >
            <Image src={box.image} alt="Sai Plattform"></Image>
          </Box>
          <Box>
            <h2 style={{ color: '#BC27F6' }}>{box.title}</h2>
            <p style={{ color: 'white' }}>{box.description}</p>
          </Box>
        </Box>
      ))}
    </>
  )
}
