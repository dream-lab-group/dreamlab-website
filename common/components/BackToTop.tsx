import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

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
      {showTopBtn && (
        <BsFillArrowUpCircleFill
          style={{
            marginRight: '1rem',
            fontSize: '2rem',
            color: '#AD23F6',
            position: 'fixed',
            right: '1rem',
            bottom: '5rem',
            zIndex: '10',
            cursor: 'pointer',
          }}
          onClick={goToTop}
        />
      )}
    </Box>
  )
}
