import { ButtonBase, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

type MobileNavigationButtonProps = {
  navElement: string
  setHamburgerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MobileNavigationButton = ({
  navElement,
  setHamburgerOpen,
}: MobileNavigationButtonProps) => {
  const handleOnButtonClick = () => {
    setHamburgerOpen(false)
  }

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
          marginBottom: '2rem',
        }}
        onClick={handleOnButtonClick}
      >
        <Link
          href={`${
            navElement === 'Agentur'
              ? '/#agentur'
              : navElement === 'Plattform'
              ? '/plattform'
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
            }}
          >
            {navElement}
          </Typography>
        </Link>
      </ButtonBase>
    </>
  )
}
