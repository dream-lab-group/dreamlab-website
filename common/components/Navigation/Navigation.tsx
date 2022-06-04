import * as React from 'react'
import { useState } from 'react'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../assets/dreamlab-logo.png'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Globals } from '../Utilities/utils'
import { NavigationButton } from './Navigation-Button'
import { MobileNavigationButton } from './Mobile-Navigation-Button'

function Navigation() {
  const theme = useTheme()
  const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'))

  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  if (hamburgerOpen === true) {
    document.documentElement.style.overflow = 'hidden'
  } else {
    document.documentElement.style.overflow = 'scroll'
  }

  return (
    <Box sx={{ position: 'relative', height: '6rem', width: '100%' }}>
      {smBreakpointUp ? (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            paddingX: '3.5rem',
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
          <Box sx={{ display: 'flex' }}>
            {Globals.navigationElements.map((navElement) => (
              <NavigationButton key={navElement} navElement={navElement} />
            ))}
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            width: '100%',
            height: '6rem',
            paddingX: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <Box className="logo">
            <Link href="/">
              <Image src={logo} width={152} height={49} alt="dream lab Logo" />
            </Link>
          </Box>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              position: 'absolute',
              top: 0,
              right: 20,
            }}
          >
            <Box
              component="button"
              sx={{ border: 'none', background: 'none', padding: '0.3rem' }}
              onClick={toggleHamburger}
            >
              {hamburgerOpen ? (
                <FontAwesomeIcon
                  icon={faXmark}
                  size="2x"
                  style={{ cursor: 'pointer' }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBars}
                  size="2x"
                  style={{ cursor: 'pointer' }}
                />
              )}
            </Box>
          </Box>
          {hamburgerOpen && (
            <Box
              sx={{
                height: `${hamburgerOpen ? '100vh' : '0'}`,
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
                zIndex: 5000,
                width: '100%',
                left: 0,
                top: '6rem',
                background: '#fff',
              }}
            >
              {Globals.navigationElements.map((navElement) => (
                <MobileNavigationButton
                  navElement={navElement}
                  setHamburgerOpen={setHamburgerOpen}
                />
              ))}
            </Box>
          )}
        </Box>
      )}
    </Box>
  )
}

export default Navigation
