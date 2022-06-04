import { ButtonBase, Typography } from '@mui/material'
import Link from 'next/link'

type MobileNavigationButtonProps = {
  navElement: string
}

export const MobileNavigationButton = ({
  navElement,
}: MobileNavigationButtonProps) => {
  return (
    <>
      <ButtonBase
        sx={{
          border: 'none',
          cursor: 'pointer',
          background: '#fff',
          paddingY: '0.5rem',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
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
          <Typography
            sx={{
              paddingRight: '2em',
              fontSize: '1.5rem',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {navElement}
          </Typography>
        </Link>
      </ButtonBase>
    </>
  )
}
