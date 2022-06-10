import { Box } from '@mui/material'
import Members from '../MembersList'

export const TeamContentSm= () => {

  return (
    <>
        <Box
          sx={{
            position: 'absolute',
            top: '12rem',
            left: '5rem',
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
