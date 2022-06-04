import * as React from 'react'
import { useState } from 'react'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from '../assets/dreamlab-logo.png'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Navigation() {
  const theme = useTheme()
  const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'))

  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  const liStyle = {
    listStyleType: 'none',
    paddingRight: '2rem',
  }

  return (
    <Box sx={{position:"relative", height:"6rem", width:"100%"}}>
      {smBreakpointUp ? (
        <Box
          sx={{
            width: '100%',
/*             height: 'auto', */
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '3rem',
          }}
        >
          <Box sx={{ marginLeft: '2rem' }}>
            <Link href="/">
              <Image src={logo} width={152} height={49} alt="dream lab Logo" />
            </Link>
          </Box>
          <nav>
            <ul style={{ display: 'flex' }}>
              {/* Agentur */}
              <li style={liStyle}>
                <Link href="/#agentur">
                  <a>Agentur</a>
                </Link>
              </li>
              {/* Projekt */}
              <li style={liStyle}>
                <Link href="/projekt">
                  <a>Projekt</a>
                </Link>
              </li>
              {/* Team */}
              <li style={liStyle}>
                <Link href="/#team">
                  <a>Team</a>
                </Link>
              </li>
              {/* Kontakt */}
              <li style={liStyle}>
                <Link href="/#kontakt">
                  <a>Kontakt</a>
                </Link>
              </li>
            </ul>
          </nav>
        </Box>
      ) : (
        <Box
          sx={{
/*             width: '100%', */
/*             height: "4rem", */
            padding: '2rem 2rem 2rem 0',
            display: 'flex',
            justifyContent: "space-between", 
            alignItems: 'center',
          }}
        >
          <Box
            className="logo"
            sx={{marginLeft:"2rem"}}
/*             sx={{ position: 'absolute', top: '1rem', left: '1.5rem' }}
 */          >
            <Link href="/">
              <Image src={logo} width={152} height={49} alt="dream lab Logo" style={{marginLeft:"2rem"}} />
            </Link>
          </Box>
          <nav style={{ height: `${hamburgerOpen ? '100vh' : '0'}` }}>
            <Box
              onClick={toggleHamburger}
              sx={{ fontSize: '1.5rem', /* position: 'absolute', right: '2rem' ,  */height:"100%"}}
            >
              {hamburgerOpen ? (
                <FontAwesomeIcon icon={faXmark} style={{ cursor: 'pointer' }} />
              ) : (
                <FontAwesomeIcon icon={faBars} style={{ cursor: 'pointer' }} />
              )}
            </Box>
            <ul
              style={{
                display: `${hamburgerOpen ? 'flex' : 'none'}`,
                width: '100vw',
                height: '100vh',
                listStyle: 'none',
                textAlign: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'absolute',
                top: "5rem",
                left: 0,
                zIndex: 2000,
                /* Added */
                backgroundColor:"pink",
              }}
            >
              {/* Agentur */}
              <li /* style={{ paddingTop: '6rem' }}  */onClick={toggleHamburger}>
                <Link href="/#agentur">
                  <a>Agentur</a>
                </Link>
              </li>
              {/* Projekt */}
              <li style={{ paddingTop: '2.5rem' }} onClick={toggleHamburger}>
                <Link href="/projekt">
                  <a>Projekt</a>
                </Link>
              </li>
              {/* Team */}
              <li style={{ paddingTop: '2.5rem' }} onClick={toggleHamburger}>
                <Link href="/#team">
                  <a>Team</a>
                </Link>
              </li>
              {/* Kontakt */}
              <li style={{ paddingTop: '2.5rem' }} onClick={toggleHamburger}>
                <Link href="/#kontakt">
                  <a>Kontakt</a>
                </Link>
              </li>
            </ul>
          </nav>
        </Box>
      )}
    </Box>
  )
}

export default Navigation
