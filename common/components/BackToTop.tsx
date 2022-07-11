import React, { useState, useEffect } from 'react'
import { Box } from '@mui/system'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <Box>
      {' '}
      {showTopBtn && (
        <FontAwesomeIcon
          icon={faCircleArrowUp}
          style={{
            marginRight: '1rem',
            fontSize: '2rem',
            color: "#AD23F6",
            position: 'fixed',
            right: '1rem',
            bottom: '5rem',
            zIndex: '10',
            cursor: 'pointer',
          }}
          onClick={goToTop}
        />
      )}{' '}
    </Box>
  )
}
