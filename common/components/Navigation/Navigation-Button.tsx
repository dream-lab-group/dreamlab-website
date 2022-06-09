import { ButtonBase, Typography } from '@mui/material'
import Link from 'next/link'

type NavigationButtonProps = {
  navElement: string
}

export const NavigationButton = ({ navElement }: NavigationButtonProps) => {
  return (
    <>
      <ButtonBase
        sx={{
          border: 'none',
          cursor: 'pointer',
          background: '#fff',
          paddingY: '0.5rem',
          width: '100%',
          paddingX: '10px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Link
          href={`${
            navElement === 'Agentur'
              ? '/#agentur'
              : navElement === 'Projekt'
              ? '/projekt'
              : navElement === 'Team'
              ? '/#team'
              : '/#kontakt'
          }`}
        >
          <Typography sx={{ paddingRight: '2em' }}>{navElement}</Typography>
        </Link>
      </ButtonBase>
    </>
  )
}
