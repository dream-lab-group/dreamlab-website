import { Box, useMediaQuery, useTheme } from '@mui/material'

/* Components */
import { TeamPolygon } from './Team-Polygon'
import { TeamTextLg } from './text/Team-Text-lg'
import { TeamTextMd } from './text/Team-Text-md'
import { TeamTextSm } from './text/Team-Text-sm'
import { TeamContentLg } from './content/Team-Content-lg'
import { TeamContentSm } from './content/Team-Content-sm'
import { TeamContentXS } from './content/Team-Content-xs'

function Team() {
  const theme = useTheme()
  const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'))
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'))
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'))
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <Box
      id="team"
      sx={{
        position: 'relative',
        height: `${
          mdBreakpointUp ? '50rem' : smBreakpointUp ? '60rem' : '195rem'
        }`,
        background: `${mdBreakpointDown ? '#F8F8F8' : 'none'}`,
        width: '100%',
      }}
    >
      {/* Polygon */}
      <TeamPolygon />
      {/* Team Text */}
      {lgBreakpointUp ? (
            <TeamTextLg />
      ) : mdBreakpointUp ? (
            <TeamTextMd />
      ) : (
            <TeamTextSm />
      )}
      {/* Content */}
      {lgBreakpointUp ? (
            <TeamContentLg />
      ) : smBreakpointUp ? (
            <TeamContentSm />
      ) : (
            <TeamContentXS />
      )}
    </Box>
  )
}

export default Team
