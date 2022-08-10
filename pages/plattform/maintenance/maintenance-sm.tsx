import { Box } from '@mui/material'
import { BsCheck2 } from 'react-icons/bs'

const MaintenanceSm = () => {
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '55rem',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: '-2rem',
            top: '2rem',
            border: '9px solid #7514F5',
            height: '4rem',
            width: '4rem',
            borderRadius: '50%',
            background: 'white',
          }}
        />
        <Box width={'60%'}>
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
            width: '21rem',
            height: 'auto',
            borderRadius: '21px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '2rem 2rem 2rem 2rem',
            marginTop: '4rem',
          }}
        >
          {/* Item */}
          <Box
            sx={{
              width: '15rem',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <BsCheck2 style={{ marginRight: '1rem', fontSize: '1rem' }} />
            <p>Priorisierter Support</p>
          </Box>
          {/* Item */}
          <Box
            sx={{
              width: '15rem',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <BsCheck2 style={{ marginRight: '1rem', fontSize: '1rem' }} />
            <p>Kostenlose Funktions-Updates</p>
          </Box>
          {/* Item */}
          <Box
            sx={{
              width: '15rem',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <BsCheck2 style={{ marginRight: '1rem', fontSize: '1rem' }} />
            <p>Anpassungen Look</p>
          </Box>
          {/* Item */}
          <Box
            sx={{
              width: '15rem',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <BsCheck2 style={{ marginRight: '1rem', fontSize: '1rem' }} />
            <p>Optionale Entwicklung neuer Funktionen nach Absprache</p>
          </Box>
          {/* Item */}
          <Box
            sx={{
              width: '15rem',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <BsCheck2 style={{ marginRight: '1rem', fontSize: '1rem' }} />
            <p>
              Weiterentwicklung und Implementierung bestehender Funktionalitäten
            </p>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default MaintenanceSm
