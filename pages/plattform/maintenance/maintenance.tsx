import { useMediaQuery, useTheme } from '@mui/material'
import MaintenanceLg from './maintenance-lg'
import MaintenanceMd from './maintenance-md'
import MaintenanceSm from './maintenance-sm'

const Maintenance = () => {
  const theme = useTheme()

  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'))
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <>
      {lgBreakpointUp ? (
        <MaintenanceLg />
      ) : mdBreakpointUp ? (
        <MaintenanceMd />
      ) : (
        <MaintenanceSm />
      )}
    </>
  )
}

export default Maintenance
