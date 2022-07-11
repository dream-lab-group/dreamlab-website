import { NextPage } from 'next'
import { Box, Typography } from '@mui/material'

import { useRouter } from 'next/router'

const NotFoundPage: NextPage = () => {
  const router = useRouter()

  const BackToHomePage = () => {
    router.push('/')
  }

  return (
    <>
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          background: 'white',
          backgroundImage: `linear-gradient(to bottom, #AD23F6 3.51%, #7E17F6 74.06%)`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            sx={{
              fontSize: '15rem',
              fontWeight: '500',
              color: 'white',
            }}
          >
            404
          </Typography>
          <Typography sx={{ fontSize: '2rem', color: 'white' }}>
            Page not found
          </Typography>
          <p
            onClick={BackToHomePage}
            style={{
              fontSize: '2rem',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            Go back
          </p>
        </Box>
      </Box>
    </>
  )
}

export default NotFoundPage
