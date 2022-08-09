import { Box } from '@mui/material'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export const MaintenanceMd = () => {
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '35rem',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: '-2rem',
            top: '3rem',
            border: '12px solid #7514F5',
            height: '5rem',
            width: '5rem',
            borderRadius: '50%',
            background: 'white',
          }}
        />
        <Box sx={{ width: '80%' }}>
          <h1>Maintenance Contract</h1>
          <p>
            Damit Sie sorgenfrei unsere Plattform jederzeit verwenden können,
            empfehlen wir zusätzlich zu dem gewählten Package unseren
            Maintenance Contract.
          </p>
        </Box>
        <Box
          sx={{
            boxShadow: 3,
            width: '48rem',
            height: '14rem',
            borderRadius: '21px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '2rem 2rem 2rem 2rem',
            marginTop: '4rem',
          }}
        >
          {/* Row */}
          <Box>
            {/* Item */}
            <Box
              sx={{
                width: '18rem',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <FontAwesomeIcon icon={faCheck} style={{ marginRight: '1rem' }} />
              <p>Priorisierter Support</p>
            </Box>
            {/* Item */}
            <Box
              sx={{
                width: '18rem',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <FontAwesomeIcon icon={faCheck} style={{ marginRight: '1rem' }} />
              <p>Kostenlose Funktions-Updates</p>
            </Box>
            {/* Item */}
            <Box
              sx={{
                width: '18rem',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <FontAwesomeIcon icon={faCheck} style={{ marginRight: '1rem' }} />
              <p>Anpassungen Look</p>
            </Box>
          </Box>
          {/* Row */}
          <Box>
            {/* Item */}
            <Box
              sx={{
                width: '18rem',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <FontAwesomeIcon icon={faCheck} style={{ marginRight: '1rem' }} />
              <p>Optionale Entwicklung neuer Funktionen nach Absprache</p>
            </Box>
            {/* Item */}
            <Box
              sx={{
                width: '18rem',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <FontAwesomeIcon icon={faCheck} style={{ marginRight: '1rem' }} />
              <p>
                {' '}
                Weiterentwicklung und Implementierung bestehender
                Funktionalitäten
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
