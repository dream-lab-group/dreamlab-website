import { Box, useMediaQuery, useTheme } from '@mui/material'
import Link from 'next/link'
import { BsCheck2 } from 'react-icons/bs'

const PlattformPricingBoxes = () => {
  const theme = useTheme()
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'))
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'))

  const data = [
    {
      key: 1,
      title: 'SAI-Plattform',
      content: [
        'Implementierung der Grundplattform',
        'Individuelle Anpassungen am Look',
        'Inbegriffen 500 Nutzer mit opt. Erweiterung',
        'Inbegriffen 500GB CloudStorage',
        'Optionale kostenpflichtige Funktions-Updates',
        'Optionaler Maintenance Contract',
        'Optionales designtes und animiertes Maskottchen',
      ],
    },
    {
      key: 2,
      title: 'SAI-Plattform Development',
      content: [
        'Die Plattform wird komplett auf der Grundlage der Wünsche des Kunden entwickelt.',
        'Alle Elemente aus dem Standard-Produkt können zusätzlich genutzt werden.',
        'Die Plattform entspricht komplett Ihren Bedürfnissen und ist ein Unikat',
        'Diese Option ist nur auf Anfrage erhältlich.',
      ],
    },
  ]
  const dataRow = [
    {
      key: 1,
      title: 'SAI-Plattform',
      contentFirstRow: [
        'Implementierung der Grundplattform',
        'Individuelle Anpassungen am Look',
        'Inbegriffen 500 Nutzer mit opt. Erweiterung',
        'Inbegriffen 500GB CloudStorage',
      ],
      contentSecondRow: [
        'Optionale kostenpflichtige Funktions-Updates',
        'Optionaler Maintenance Contract',
        'Optionales designtes und animiertes Maskottchen',
      ],
    },
    {
      key: 2,
      title: 'SAI-Plattform Development',
      contentFirstRow: [
        'Die Plattform wird komplett auf der Grundlage der Wünsche des Kunden entwickelt.',
        'Alle Elemente aus dem Standard-Produkt können zusätzlich genutzt werden.',
      ],
      contentSecondRow: [
        'Die Plattform entspricht komplett Ihren Bedürfnissen und ist ein Unikat',
        'Diese Option ist nur auf Anfrage erhältlich.',
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
                      box.key === 1
                        ? 'sai-plattform-border'
                        : box.key === 2
                        ? 'developement-border'
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
                      box.key === 1
                        ? 'sai-plattform-color'
                        : box.key === 2
                        ? 'developement-color'
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
                        <BsCheck2 size={20} style={{ marginRight: '.5rem' }} />
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
                  box.key === 1
                    ? 'sai-plattform-bgcolor'
                    : box.key === 2
                    ? 'developement-bgcolor'
                    : ''
                }
                sx={{
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
                      box.key === 1
                        ? 'sai-plattform-border'
                        : box.key === 2
                        ? 'developement-border'
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
                      box.key === 1
                        ? 'sai-plattform-color'
                        : box.key === 2
                        ? 'developement-color'
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
                          <BsCheck2
                            size={20}
                            style={{ marginRight: '.5rem' }}
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
                          <BsCheck2
                            size={20}
                            style={{ marginRight: '.5rem' }}
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
                  box.key === 1
                    ? 'sai-plattform-bgcolor'
                    : box.key === 2
                    ? 'developement-bgcolor'
                    : ''
                }
                sx={{
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
            height: 'auto',
          }}
        >
          {data.map((box) => (
            <Box
              key={box.key}
              sx={{
                height: '38rem',
                width: '21rem',
                borderRadius: '21px',
                boxShadow: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                marginTop: '5rem',
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
                      box.key === 1
                        ? 'sai-plattform-border'
                        : box.key === 2
                        ? 'developement-border'
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
                      box.key === 1
                        ? 'sai-plattform-color'
                        : box.key === 2
                        ? 'developement-color'
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
                        <BsCheck2 size={20} style={{ marginRight: '.5rem' }} />
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
                  box.key === 1
                    ? 'sai-plattform-bgcolor'
                    : box.key === 2
                    ? 'developement-bgcolor'
                    : ''
                }
                sx={{
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

export default PlattformPricingBoxes
