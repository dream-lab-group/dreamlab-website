import { Box, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import logo from '../../../public/dreamlab-logo.png'
import { Globals } from '../Utilities/Utils'
import { MobileNavigationButton } from './Mobile-Navigation-Button'
import { NavigationButton } from './Navigation-Button'

function Navigation() {
  const theme = useTheme()
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'))

  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  if (typeof window !== 'undefined') {
    if (hamburgerOpen === true) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = 'scroll'
    }
  }

  return (
    <Box sx={{ position: 'relative', height: '6rem', width: '100%' }}>
      {mdBreakpointUp ? (
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
                <AiOutlineClose size={30} style={{ cursor: 'pointer' }} />
              ) : (
                <FaBars size={30} style={{ cursor: 'pointer' }} />
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
                  key={navElement}
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
