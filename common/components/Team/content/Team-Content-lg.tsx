import { Box } from '@mui/material'
import Members from '../MembersList'

export const TeamContentLg = () => {

  return (
    <>
        <Box
          sx={{
            position: 'absolute',
            top: '2rem',
            left: '11rem',
          }}
        >
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
            Aufgestellt und motiviert
          </p>
          <Members />
        </Box>
    </>
  )
}
