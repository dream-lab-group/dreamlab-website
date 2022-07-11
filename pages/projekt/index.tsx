import { Box, CardMedia, useMediaQuery, useTheme } from '@mui/material'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Kontakt from '../../common/components/Kontakt/Kontakt'
import Layout from '../../common/components/Layout'
import { ProjektTop } from './top/projekt-top'
import { ProjektMiddle } from './middle/projekt-middle'
import { ProjektPricing } from './pricing/projekt-pricing'
import { ProjektVideo } from './video/projekt-video'
import { Maintenance } from './maintenance/maintenance'
import { ScrollToTop } from '../../common/components/BackToTop'
function Projekt() {
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
          <ProjektTop />
          {/* Middle Part */}
          <ProjektMiddle />
          {/* Video Part */}
          <ProjektVideo />
          {/* Prices */}
          <ProjektPricing />
        </Box>
        {/* Maintenance */}
        <Maintenance />
      </Box>
      <Kontakt />
    </>
  )
}

// @ts-expect-error: Todo
Projekt.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Projekt
