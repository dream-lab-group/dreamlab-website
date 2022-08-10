import { Box } from '@mui/material'

import Kontakt from '../../common/components/Kontakt/Kontakt'
import Layout from '../../common/components/Layout'
import Maintenance from './maintenance/maintenance'
import PlattformMiddle from './middle/projekt-middle'
import PlattformPricing from './pricing/projekt-pricing'
import PlattformTop from './top/projekt-top'
import PlattformVideo from './video/projekt-video'

function Plattform() {
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
