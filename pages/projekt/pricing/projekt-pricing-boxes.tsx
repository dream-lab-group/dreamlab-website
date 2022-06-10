import { Box, useMediaQuery, useTheme } from '@mui/material'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export const ProjektPricingBoxes = () => {
  const theme = useTheme()
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'))
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'))

  const data = [
    {
      key: 1,
      title: 'Light',
      content: [
        'Implementierung der Grundplattform',
        'Individuelle Anpassungen am Look',
        'Auswahl von max. 5 bestehenden Funktionen',
        'Maximale Nutzeranzahl 500',
        'Optionale kostenpflichtige Funktions-Updates',
        'Optionaler Maintenance Contract',
      ],
    },
    {
      key: 2,
      title: 'Extended',
      content: [
        'Implementierung der Grundplattform',
        'Individuelle Anpassungen am Look',
        'Auswahl von max. 10 bestehenden Funktionen',
        "Maximale Nutzeranzahl 1'000",
        'Implementierung zusätzlicher Funktionen nach Absprache',
        'Design und Animation eines eigenen Maskottchens',
        'Inkl. 1 Jahr Maintenance Contract',
        'Optionale Maintenance Contract Verlängerung',
      ],
    },
    {
      key: 3,
      title: 'Unlimited',
      content: [
        'Implementierung der Grundplattform',
        'Individuelle Anpassungen am Look inkl. Maskottchen',
        'Unlimitierte Auswahl an bestehenden Funktionen',
        'Entwicklung und Implementierung individueller Funktionen',
        'Individuelle Anzahl an Nutzern',
        'Inkl. 1 Jahr Maintenance Contract',
        'Optionale Maintenance Contract Verlängerung',
      ],
    },
  ]
  const dataRow = [
    {
      key: 1,
      title: 'Light',
      contentFirstRow: [
        'Implementierung der Grundplattform',
        'Individuelle Anpassungen am Look',
        'Auswahl von max. 5 bestehenden Funktionen',
      ],
      contentSecondRow: [
        'Maximale Nutzeranzahl 500',
        'Optionale kostenpflichtige Funktions-Updates',
        'Optionaler Maintenance Contract',
      ],
    },
    {
      key: 2,
      title: 'Extended',
      contentFirstRow: [
        'Implementierung der Grundplattform',
        'Individuelle Anpassungen am Look',
        'Auswahl von max. 10 bestehenden Funktionen',
        "Maximale Nutzeranzahl 1'000",
      ],
      contentSecondRow: [
        'Implementierung zusätzlicher Funktionen nach Absprache',
        'Design und Animation eines eigenen Maskottchens',
        'Inkl. 1 Jahr Maintenance Contract',
        'Optionale Maintenance Contract Verlängerung',
      ],
    },
    {
      key: 3,
      title: 'Unlimited',
      contentFirstRow: [
        'Implementierung der Grundplattform',
        'Individuelle Anpassungen am Look inkl. Maskottchen',
        'Unlimitierte Auswahl an bestehenden Funktionen',
        'Entwicklung und Implementierung individueller Funktionen',
      ],
      contentSecondRow: [
        'Individuelle Anzahl an Nutzern',
        'Inkl. 1 Jahr Maintenance Contract',
        'Optionale Maintenance Contract Verlängerung',
      ],
    },
  ]

  return (
    <>
      {lgBreakpointUp ? (
        /* Items */
        <Box
          sx={{
            height: '65rem',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          {data.map((box) => (
            <Box
              key={box.key}
              sx={{
                height: '52rem',
                width: '23rem',
                borderRadius: '21px',
                boxShadow: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              {/* List */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Title */}
                <Box>
                  <Box
                    className={
                      box.title === 'Light'
                        ? 'light-border'
                        : box.title === 'Extended'
                        ? 'extended-border'
                        : box.title === 'Unlimited'
                        ? 'unlimited-border'
                        : ''
                    }
                    sx={{
                      position: 'absolute',
                      top: '-2rem',
                      height: '6rem',
                      width: '6rem',
                      borderRadius: '50%',
                      background: 'white',
                    }}
                  />
                  <h2
                    className={
                      box.title === 'Light'
                        ? 'light-color'
                        : box.title === 'Extended'
                        ? 'extended-color'
                        : box.title === 'Unlimited'
                        ? 'unlimited-color'
                        : ''
                    }
                    style={{
                      marginLeft: '8rem',
                      marginBottom: '3rem',
                    }}
                  >
                    {box.title}
                  </h2>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  {/* Item */}
                  {box.content.map((boxContent) => {
                    return (
                      <Box
                        key={boxContent}
                        sx={{
                          width: '18rem',
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>{boxContent}</p>
                      </Box>
                    )
                  })}

                  {/* Item End */}
                </Box>
              </Box>
              {/* AnfrageButton */}
              <Box
                className={
                  box.title === 'Light'
                    ? 'light-bgcolor'
                    : box.title === 'Extended'
                    ? 'extended-bgcolor'
                    : box.title === 'Unlimited'
                    ? 'unlimited-bgcolor'
                    : ''
                }
                sx={{
                  background: '#D770FF',
                  width: '100%',
                  height: '5rem',
                  borderBottomLeftRadius: '21px',
                  borderBottomRightRadius: '21px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                }}
              >
                <Link href="/">
                  <p>ANFRAGEN</p>
                </Link>
              </Box>
              {/* Ende Item */}
            </Box>
          ))}
        </Box>
      ) : mdBreakpointUp ? (
        /* Items */
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'auto',
          }}
        >
          {dataRow.map((box) => (
            <Box
              key={box.key}
              sx={{
                height: 'auto',
                width: '48rem',
                borderRadius: '21px',
                boxShadow: 3,
                marginBottom: '5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              {/* List */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Title */}
                <Box>
                  <Box
                    className={
                      box.title === 'Light'
                        ? 'light-border'
                        : box.title === 'Extended'
                        ? 'extended-border'
                        : box.title === 'Unlimited'
                        ? 'unlimited-border'
                        : ''
                    }
                    sx={{
                      position: 'absolute',
                      top: '-2rem',
                      height: '5rem',
                      width: '5rem',
                      borderRadius: '50%',
                      background: 'white',
                    }}
                  />
                  <h2
                    className={
                      box.title === 'Light'
                        ? 'light-color'
                        : box.title === 'Extended'
                        ? 'extended-color'
                        : box.title === 'Unlimited'
                        ? 'unlimited-color'
                        : ''
                    }
                    style={{
                      marginLeft: '8rem',
                    }}
                  >
                    {box.title}
                  </h2>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem 0 1rem 0',
                  }}
                >
                  <Box>
                    {/* Item */}
                    {box.contentFirstRow.map((boxContentFirstRow) => {
                      return (
                        <Box
                          key={boxContentFirstRow}
                          sx={{
                            width: '18rem',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={{ marginRight: '1rem' }}
                          />
                          <p>{boxContentFirstRow}</p>
                        </Box>
                      )
                    })}
                  </Box>
                  <Box>
                    {/* Item */}
                    {box.contentSecondRow.map((boxContentSecondRow) => {
                      return (
                        <Box
                          key={boxContentSecondRow}
                          sx={{
                            width: '18rem',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={{ marginRight: '1rem' }}
                          />
                          <p>{boxContentSecondRow}</p>
                        </Box>
                      )
                    })}
                  </Box>

                  {/* Item End */}
                </Box>
              </Box>
              {/* AnfrageButton */}
              <Box
                className={
                  box.title === 'Light'
                    ? 'light-bgcolor'
                    : box.title === 'Extended'
                    ? 'extended-bgcolor'
                    : box.title === 'Unlimited'
                    ? 'unlimited-bgcolor'
                    : ''
                }
                sx={{
                  background: '#D770FF',
                  width: '100%',
                  height: '5rem',
                  borderBottomLeftRadius: '21px',
                  borderBottomRightRadius: '21px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                }}
              >
                <Link href="/">
                  <p>ANFRAGEN</p>
                </Link>
              </Box>
              {/* Ende Item */}
            </Box>
          ))}
        </Box>
      ) : (
        /* Items */
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '5rem',
            height: 'auto',
          }}
        >
          {data.map((box) => (
            <Box
              key={box.key}
              className={
                box.title === 'Extended'
                  ? 'extended-size'
                  : box.title === 'Unlimited'
                  ? 'unlimited-size'
                  : ''
              }
              sx={{
                height: '32rem',
                width: '21rem',
                borderRadius: '21px',
                boxShadow: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              {/* List */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Title */}
                <Box>
                  <Box
                    className={
                      box.title === 'Light'
                        ? 'light-border'
                        : box.title === 'Extended'
                        ? 'extended-border'
                        : box.title === 'Unlimited'
                        ? 'unlimited-border'
                        : ''
                    }
                    sx={{
                      position: 'absolute',
                      top: '-2rem',
                      height: '4rem',
                      width: '4rem',
                      borderRadius: '50%',
                      background: 'white',
                    }}
                  />
                  <h2
                    className={
                      box.title === 'Light'
                        ? 'light-color'
                        : box.title === 'Extended'
                        ? 'extended-color'
                        : box.title === 'Unlimited'
                        ? 'unlimited-color'
                        : ''
                    }
                    style={{
                      marginLeft: '8rem',
                      marginBottom: '3rem',
                    }}
                  >
                    {box.title}
                  </h2>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  {/* Item */}
                  {box.content.map((boxContent) => {
                    return (
                      <Box
                        key={boxContent}
                        sx={{
                          width: '18rem',
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>{boxContent}</p>
                      </Box>
                    )
                  })}

                  {/* Item End */}
                </Box>
              </Box>
              {/* AnfrageButton */}
              <Box
                className={
                  box.title === 'Light'
                    ? 'light-bgcolor'
                    : box.title === 'Extended'
                    ? 'extended-bgcolor'
                    : box.title === 'Unlimited'
                    ? 'unlimited-bgcolor'
                    : ''
                }
                sx={{
                  background: '#D770FF',
                  width: '100%',
                  height: '5rem',
                  borderBottomLeftRadius: '21px',
                  borderBottomRightRadius: '21px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                }}
              >
                <Link href="/">
                  <p>ANFRAGEN</p>
                </Link>
              </Box>
              {/* Ende Item */}
            </Box>
          ))}
        </Box>
      )}
    </>
  )
}
