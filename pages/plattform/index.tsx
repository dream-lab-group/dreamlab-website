import { Box, useMediaQuery, useTheme } from '@mui/material'

import Kontakt from '../../common/components/Kontakt/Kontakt'
import Layout from '../../common/components/Layout'
import { Maintenance } from './maintenance/maintenance'
import { PlattformMiddle } from './middle/projekt-middle'
import { PlattformPricing } from './pricing/projekt-pricing'
import { PlattformTop } from './top/projekt-top'
import { PlattformVideo } from './video/projekt-video'

function Plattform() {
  const theme = useTheme()
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'))
  const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'))
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'))
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'))
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'))
  const xlBreakpointUp = useMediaQuery(theme.breakpoints.up('xl'))

  return (
    <>
      <Box>
        <Box sx={{ overflow: 'hidden' }}>
          {/* Upper Part */}
          <PlattformTop />
          {/* Middle Part */}
          <PlattformMiddle />
          {/* Video Part */}
          <PlattformVideo />
          {/* Prices */}
          <PlattformPricing />
        </Box>
        {/* Maintenance */}
        <Maintenance />
      </Box>
      <Kontakt />
    </>
  )
}

// @ts-expect-error: Todo
Plattform.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Plattform
