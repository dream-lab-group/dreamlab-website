import { Box, CardMedia, Button, useMediaQuery, useTheme } from '@mui/material'
import shadows from '@mui/material/styles/shadows'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Assets */
import application from '../assets/application.png'

import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Kontakt from '../../common/components/Kontakt'
import Layout from '../../common/components/Layout'

function Projekt() {
  const theme = useTheme()
  const xsBreakpointDown = useMediaQuery(theme.breakpoints.down('xs'))
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'))
  const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'))
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'))
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'))
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'))
  const xlBreakpointUp = useMediaQuery(theme.breakpoints.up('xl'))

  const cardStyles = {
    height: '16rem',
    display: 'flex',
    flexDirection: 'column',
  }

  return (
    <>
      <Box>
        <Box sx={{ overflow: 'hidden' }}>
          {/* Upper Part */}
          <Box
            sx={{
              height: '35rem',
              width: '100%',
              display: 'flex',
              /*               justifyContent: 'space-around',
               */ alignItems: 'center',
              justifyContent: `${mdBreakpointUp ? 'space-around' : 'center'}`,
              flexDirection: `${smBreakpointUp ? 'row' : 'row-reverse'}`,
              position: 'relative',
            }}
          >
            {/* Image - Left Side */}
            <Box
              sx={{
                marginRight: `${
                  lgBreakpointUp ? '3rem' : mdBreakpointUp ? '.5rem' : '0'
                }`,
                position: `${mdBreakpointDown ? 'absolute' : 'relative'}`,
                right: `${mdBreakpointDown ? '-1rem' : '0'}`,
                top: `${mdBreakpointDown ? '5rem' : '0'}`,
                zIndex: `${mdBreakpointDown ? '-4' : '3'}`,
              }}
            >
              <svg
                width={`${
                  lgBreakpointUp
                    ? '40rem'
                    : mdBreakpointUp
                    ? '32rem'
                    : smBreakpointUp
                    ? '25rem'
                    : '23rem'
                }`}
                height="auto"
                viewBox="0 0 657 573"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_247_2624)">
                  <rect
                    x="206"
                    y="407"
                    width="269"
                    height="146"
                    rx="21"
                    fill="#FCFCFC"
                  />
                </g>
                <g filter="url(#filter1_d_247_2624)">
                  <rect
                    x="345"
                    y="202"
                    width="242"
                    height="146"
                    rx="21"
                    fill="#FCFCFC"
                  />
                </g>
                <g filter="url(#filter2_d_247_2624)">
                  <rect
                    x="16"
                    y="202"
                    width="242"
                    height="146"
                    rx="21"
                    fill="#FCFCFC"
                  />
                </g>
                <g filter="url(#filter3_d_247_2624)">
                  <rect
                    x="534"
                    y="47"
                    width="107"
                    height="107"
                    rx="21"
                    fill="#FCFCFC"
                  />
                </g>
                <g filter="url(#filter4_d_247_2624)">
                  <rect
                    x="277"
                    y="12"
                    width="107"
                    height="107"
                    rx="21"
                    fill="#FCFCFC"
                  />
                </g>
                <path
                  d="M348 376.5L348 375C347.602 375 347.221 375.158 346.939 375.439C346.658 375.721 346.5 376.102 346.5 376.5L348 376.5ZM446 376.5L446 378C446.828 378 447.5 377.328 447.5 376.5L446 376.5ZM439.085 352.022C441.306 355.841 446.203 357.137 450.022 354.915C453.841 352.694 455.137 347.797 452.915 343.978C450.694 340.159 445.797 338.863 441.978 341.085C438.159 343.306 436.863 348.203 439.085 352.022ZM349.5 399.3C349.5 398.472 348.828 397.8 348 397.8C347.172 397.8 346.5 398.472 346.5 399.3L349.5 399.3ZM346.5 382.2C346.5 383.028 347.172 383.7 348 383.7C348.828 383.7 349.5 383.028 349.5 382.2L346.5 382.2ZM352.9 378C353.728 378 354.4 377.328 354.4 376.5C354.4 375.672 353.728 375 352.9 375L352.9 378ZM367.6 375C366.772 375 366.1 375.672 366.1 376.5C366.1 377.328 366.772 378 367.6 378L367.6 375ZM377.4 378C378.228 378 378.9 377.328 378.9 376.5C378.9 375.672 378.228 375 377.4 375L377.4 378ZM392.1 375C391.272 375 390.6 375.672 390.6 376.5C390.6 377.328 391.272 378 392.1 378L392.1 375ZM401.9 378C402.728 378 403.4 377.328 403.4 376.5C403.4 375.672 402.728 375 401.9 375L401.9 378ZM416.6 375C415.772 375 415.1 375.672 415.1 376.5C415.1 377.328 415.772 378 416.6 378L416.6 375ZM426.4 378C427.228 378 427.9 377.328 427.9 376.5C427.9 375.672 427.228 375 426.4 375L426.4 378ZM441.1 375C440.272 375 439.6 375.672 439.6 376.5C439.6 377.328 440.272 378 441.1 378L441.1 375ZM447.5 370.8C447.5 369.972 446.828 369.3 446 369.3C445.172 369.3 444.5 369.972 444.5 370.8L447.5 370.8ZM444.5 353.7C444.5 354.528 445.172 355.2 446 355.2C446.828 355.2 447.5 354.528 447.5 353.7L444.5 353.7ZM349.5 405L349.5 399.3L346.5 399.3L346.5 405L349.5 405ZM349.5 382.2L349.5 376.5L346.5 376.5L346.5 382.2L349.5 382.2ZM348 378L352.9 378L352.9 375L348 375L348 378ZM367.6 378L377.4 378L377.4 375L367.6 375L367.6 378ZM392.1 378L401.9 378L401.9 375L392.1 375L392.1 378ZM416.6 378L426.4 378L426.4 375L416.6 375L416.6 378ZM441.1 378L446 378L446 375L441.1 375L441.1 378ZM447.5 376.5L447.5 370.8L444.5 370.8L444.5 376.5L447.5 376.5ZM447.5 353.7L447.5 348L444.5 348L444.5 353.7L447.5 353.7ZM348 376.5L348 373.5C347.204 373.5 346.441 373.816 345.879 374.379C345.316 374.941 345 375.704 345 376.5L348 376.5ZM446 376.5L446 379.5C447.657 379.5 449 378.157 449 376.5L446 376.5ZM432.169 356.044C436.612 363.683 446.406 366.273 454.044 361.831C461.683 357.388 464.274 347.594 459.831 339.956C455.388 332.317 445.594 329.726 437.956 334.169C430.317 338.612 427.727 348.406 432.169 356.044ZM351 399.3C351 397.643 349.657 396.3 348 396.3C346.343 396.3 345 397.643 345 399.3L351 399.3ZM345 382.2C345 383.857 346.343 385.2 348 385.2C349.657 385.2 351 383.857 351 382.2L345 382.2ZM352.9 379.5C354.557 379.5 355.9 378.157 355.9 376.5C355.9 374.843 354.557 373.5 352.9 373.5L352.9 379.5ZM367.6 373.5C365.943 373.5 364.6 374.843 364.6 376.5C364.6 378.157 365.943 379.5 367.6 379.5L367.6 373.5ZM377.4 379.5C379.057 379.5 380.4 378.157 380.4 376.5C380.4 374.843 379.057 373.5 377.4 373.5L377.4 379.5ZM392.1 373.5C390.443 373.5 389.1 374.843 389.1 376.5C389.1 378.157 390.443 379.5 392.1 379.5L392.1 373.5ZM401.9 379.5C403.557 379.5 404.9 378.157 404.9 376.5C404.9 374.843 403.557 373.5 401.9 373.5L401.9 379.5ZM416.6 373.5C414.943 373.5 413.6 374.843 413.6 376.5C413.6 378.157 414.943 379.5 416.6 379.5L416.6 373.5ZM426.4 379.5C428.057 379.5 429.4 378.157 429.4 376.5C429.4 374.843 428.057 373.5 426.4 373.5L426.4 379.5ZM441.1 373.5C439.443 373.5 438.1 374.843 438.1 376.5C438.1 378.157 439.443 379.5 441.1 379.5L441.1 373.5ZM449 370.8C449 369.143 447.657 367.8 446 367.8C444.343 367.8 443 369.143 443 370.8L449 370.8ZM443 353.7C443 355.357 444.343 356.7 446 356.7C447.657 356.7 449 355.357 449 353.7L443 353.7ZM351 405L351 399.3L345 399.3L345 405L351 405ZM351 382.2L351 376.5L345 376.5L345 382.2L351 382.2ZM348 379.5L352.9 379.5L352.9 373.5L348 373.5L348 379.5ZM367.6 379.5L377.4 379.5L377.4 373.5L367.6 373.5L367.6 379.5ZM392.1 379.5L401.9 379.5L401.9 373.5L392.1 373.5L392.1 379.5ZM416.6 379.5L426.4 379.5L426.4 373.5L416.6 373.5L416.6 379.5ZM441.1 379.5L446 379.5L446 373.5L441.1 373.5L441.1 379.5ZM449 376.5L449 370.8L443 370.8L443 376.5L449 376.5ZM449 353.7L449 348L443 348L443 353.7L449 353.7Z"
                  fill="#C6C6C6"
                />
                <path
                  d="M445.386 171.796L446.886 171.796C446.886 170.967 446.215 170.296 445.386 170.296L445.386 171.796ZM329.5 171.796L328 171.796C328 172.624 328.672 173.296 329.5 173.296L329.5 171.796ZM322.585 123.022C324.806 126.841 329.703 128.137 333.522 125.915C337.341 123.694 338.637 118.797 336.415 114.978C334.194 111.159 329.297 109.863 325.478 112.085C321.659 114.306 320.363 119.203 322.585 123.022ZM328 124.28C328 125.108 328.672 125.78 329.5 125.78C330.328 125.78 331 125.108 331 124.28L328 124.28ZM331 140.118C331 139.29 330.328 138.618 329.5 138.618C328.672 138.618 328 139.29 328 140.118L331 140.118ZM328 150.677C328 151.506 328.672 152.177 329.5 152.177C330.328 152.177 331 151.506 331 150.677L328 150.677ZM331 166.516C331 165.688 330.328 165.016 329.5 165.016C328.672 165.016 328 165.688 328 166.516L331 166.516ZM334.135 173.296C334.964 173.296 335.635 172.624 335.635 171.796C335.635 170.967 334.964 170.296 334.135 170.296L334.135 173.296ZM348.042 170.296C347.213 170.296 346.542 170.967 346.542 171.796C346.542 172.624 347.213 173.296 348.042 173.296L348.042 170.296ZM357.313 173.296C358.141 173.296 358.813 172.624 358.813 171.796C358.813 170.967 358.141 170.296 357.313 170.296L357.313 173.296ZM371.219 170.296C370.391 170.296 369.719 170.967 369.719 171.796C369.719 172.624 370.391 173.296 371.219 173.296L371.219 170.296ZM380.49 173.296C381.318 173.296 381.99 172.624 381.99 171.796C381.99 170.967 381.318 170.296 380.49 170.296L380.49 173.296ZM394.396 170.296C393.568 170.296 392.896 170.967 392.896 171.796C392.896 172.624 393.568 173.296 394.396 173.296L394.396 170.296ZM403.667 173.296C404.496 173.296 405.167 172.624 405.167 171.796C405.167 170.967 404.496 170.296 403.667 170.296L403.667 173.296ZM417.574 170.296C416.745 170.296 416.074 170.967 416.074 171.796C416.074 172.624 416.745 173.296 417.574 173.296L417.574 170.296ZM426.845 173.296C427.673 173.296 428.345 172.624 428.345 171.796C428.345 170.967 427.673 170.296 426.845 170.296L426.845 173.296ZM440.751 170.296C439.922 170.296 439.251 170.967 439.251 171.796C439.251 172.624 439.922 173.296 440.751 173.296L440.751 170.296ZM443.886 177.496C443.886 178.324 444.558 178.996 445.386 178.996C446.215 178.996 446.886 178.324 446.886 177.496L443.886 177.496ZM446.886 194.596C446.886 193.767 446.215 193.096 445.386 193.096C444.558 193.096 443.886 193.767 443.886 194.596L446.886 194.596ZM328 119L328 124.28L331 124.28L331 119L328 119ZM328 140.118L328 150.677L331 150.677L331 140.118L328 140.118ZM328 166.516L328 171.796L331 171.796L331 166.516L328 166.516ZM329.5 173.296L334.135 173.296L334.135 170.296L329.5 170.296L329.5 173.296ZM348.042 173.296L357.313 173.296L357.313 170.296L348.042 170.296L348.042 173.296ZM371.219 173.296L380.49 173.296L380.49 170.296L371.219 170.296L371.219 173.296ZM394.396 173.296L403.667 173.296L403.667 170.296L394.396 170.296L394.396 173.296ZM417.574 173.296L426.845 173.296L426.845 170.296L417.574 170.296L417.574 173.296ZM440.751 173.296L445.386 173.296L445.386 170.296L440.751 170.296L440.751 173.296ZM443.886 171.796L443.886 177.496L446.886 177.496L446.886 171.796L443.886 171.796ZM443.886 194.596L443.886 200.296L446.886 200.296L446.886 194.596L443.886 194.596ZM445.386 171.796L448.386 171.796C448.386 170.139 447.043 168.796 445.386 168.796L445.386 171.796ZM329.5 171.796L326.5 171.796C326.5 173.453 327.843 174.796 329.5 174.796L329.5 171.796ZM315.669 127.044C320.112 134.683 329.906 137.274 337.544 132.831C345.183 128.388 347.774 118.594 343.331 110.956C338.888 103.317 329.094 100.727 321.456 105.169C313.817 109.612 311.227 119.406 315.669 127.044ZM326.5 124.28C326.5 125.936 327.843 127.28 329.5 127.28C331.157 127.28 332.5 125.936 332.5 124.28L326.5 124.28ZM332.5 140.118C332.5 138.461 331.157 137.118 329.5 137.118C327.843 137.118 326.5 138.461 326.5 140.118L332.5 140.118ZM326.5 150.677C326.5 152.334 327.843 153.677 329.5 153.677C331.157 153.677 332.5 152.334 332.5 150.677L326.5 150.677ZM332.5 166.516C332.5 164.859 331.157 163.516 329.5 163.516C327.843 163.516 326.5 164.859 326.5 166.516L332.5 166.516ZM334.135 174.796C335.792 174.796 337.135 173.453 337.135 171.796C337.135 170.139 335.792 168.796 334.135 168.796L334.135 174.796ZM348.042 168.796C346.385 168.796 345.042 170.139 345.042 171.796C345.042 173.453 346.385 174.796 348.042 174.796L348.042 168.796ZM357.313 174.796C358.97 174.796 360.313 173.453 360.313 171.796C360.313 170.139 358.97 168.796 357.313 168.796L357.313 174.796ZM371.219 168.796C369.562 168.796 368.219 170.139 368.219 171.796C368.219 173.453 369.562 174.796 371.219 174.796L371.219 168.796ZM380.49 174.796C382.147 174.796 383.49 173.453 383.49 171.796C383.49 170.139 382.147 168.796 380.49 168.796L380.49 174.796ZM394.396 168.796C392.739 168.796 391.396 170.139 391.396 171.796C391.396 173.453 392.739 174.796 394.396 174.796L394.396 168.796ZM403.667 174.796C405.324 174.796 406.667 173.453 406.667 171.796C406.667 170.139 405.324 168.796 403.667 168.796L403.667 174.796ZM417.574 168.796C415.917 168.796 414.574 170.139 414.574 171.796C414.574 173.453 415.917 174.796 417.574 174.796L417.574 168.796ZM426.845 174.796C428.501 174.796 429.845 173.453 429.845 171.796C429.845 170.139 428.501 168.796 426.845 168.796L426.845 174.796ZM440.751 168.796C439.094 168.796 437.751 170.139 437.751 171.796C437.751 173.453 439.094 174.796 440.751 174.796L440.751 168.796ZM442.386 177.496C442.386 179.153 443.729 180.496 445.386 180.496C447.043 180.496 448.386 179.153 448.386 177.496L442.386 177.496ZM448.386 194.596C448.386 192.939 447.043 191.596 445.386 191.596C443.729 191.596 442.386 192.939 442.386 194.596L448.386 194.596ZM326.5 119L326.5 124.28L332.5 124.28L332.5 119L326.5 119ZM326.5 140.118L326.5 150.677L332.5 150.677L332.5 140.118L326.5 140.118ZM326.5 166.516L326.5 171.796L332.5 171.796L332.5 166.516L326.5 166.516ZM329.5 174.796L334.135 174.796L334.135 168.796L329.5 168.796L329.5 174.796ZM348.042 174.796L357.313 174.796L357.313 168.796L348.042 168.796L348.042 174.796ZM371.219 174.796L380.49 174.796L380.49 168.796L371.219 168.796L371.219 174.796ZM394.396 174.796L403.667 174.796L403.667 168.796L394.396 168.796L394.396 174.796ZM417.574 174.796L426.845 174.796L426.845 168.796L417.574 168.796L417.574 174.796ZM440.751 174.796L445.386 174.796L445.386 168.796L440.751 168.796L440.751 174.796ZM442.386 171.796L442.386 177.496L448.386 177.496L448.386 171.796L442.386 171.796ZM442.386 194.596L442.386 200.296L448.386 200.296L448.386 194.596L442.386 194.596Z"
                  fill="#C6C6C6"
                />
                <defs>
                  <filter
                    id="filter0_d_247_2624"
                    x="190"
                    y="395"
                    width="301"
                    height="178"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="8" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_247_2624"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_247_2624"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_247_2624"
                    x="329"
                    y="190"
                    width="274"
                    height="178"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="8" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_247_2624"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_247_2624"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d_247_2624"
                    x="0"
                    y="190"
                    width="274"
                    height="178"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="8" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_247_2624"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_247_2624"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_d_247_2624"
                    x="518"
                    y="35"
                    width="139"
                    height="139"
                    filterUnits="userSpaceOnUse"
                    color-interpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="8" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_247_2624"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_247_2624"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter4_d_247_2624"
                    x="261"
                    y="0"
                    width="139"
                    height="139"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="8" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_247_2624"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_247_2624"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </Box>
            {/* Text - Right Side */}
            <Box sx={{width:"60%", position: `${mdBreakpointDown ? "absolute" : "box"}`, top: `${mdBreakpointDown ? "5rem" : "0"}`}}>
              <h1>
                <span
                  style={{
                    color: '#BC27F6',
                  }}
                >
                  Die Plattform
                </span>
                <br />
                von Studenten für Studenten
              </h1>
              {/* Buttons */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: `${smBreakpointDown ? 'column' : 'row'}`,
                  alignItems: 'flex-start',
                  marginTop: '1rem',
                }}
              >
                <Button
                  variant="contained"
                  href="/"
                  sx={{
                    width: '140px',
                    height: '45px',
                    backgroundImage: `linear-gradient(to bottom, #AD23F6 3.51%, #7E17F6 74.06%)`,
                    borderRadius: '100px',
                    marginRight: '1rem',
                  }}
                >
                  Demo testen
                </Button>
                <Button
                  variant="contained"
                  href="/"
                  sx={{
                    width: '140px',
                    height: '45px',
                    ml: '2rem',
                    bgcolor: '#DADADA',
                    borderRadius: '100px',
                    color: 'rgba(0, 0, 0, 0.46)',
                    margin: `${smBreakpointDown ? '1rem 0 0 0' : 0}`,
                    ':hover': {
                      background: '#DADADA',
                    },
                  }}
                >
                  Kontakt
                </Button>
              </Box>
            </Box>
          </Box>
          {/* Middle Part */}
          <Box sx={{ position: 'relative', width:"100vw" }}>
            {/* Polygon */}
            <Box
              className="polygonProject"
              sx={{
                background: '#192D3E',
                width: '100vw',
                /*                 height: '60rem',
                 */ height: `${mdBreakpointDown ? '125rem' : '60rem'}`,
                zIndex: '-1',
                position: 'absolute',
                top: '-10rem',
              }}
            />
            {/* Text */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <h1
                style={{
                  color: '#BC27F6',
                  marginBottom: '5rem',
                  width: '80%',
                }}
              >
                Investieren Sie mit uns in die Weiterentwicklung und Vernetzung
                Ihrer Studenten
              </h1>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: `${mdBreakpointDown ? 'column' : 'row'}`,
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                {/* Box 1 */}
                <Box
                  sx={{
                    cardStyles,
                    width: `${
                      xlBreakpointUp
                        ? '24rem'
                        : lgBreakpointUp
                        ? '18rem'
                        : mdBreakpointUp
                        ? '16rem'
                        : '21rem'
                    }`,
                  }}
                >
                  <Box
                    sx={{
                      height: `${
                        xlBreakpointUp
                          ? '16rem'
                          : lgBreakpointUp
                          ? '11rem'
                          : mdBreakpointUp
                          ? '10rem'
                          : '14rem'
                      }`,
                      width: `${
                        xlBreakpointUp
                          ? '24rem'
                          : lgBreakpointUp
                          ? '18rem'
                          : mdBreakpointUp
                          ? '16rem'
                          : '21rem'
                      }`,
                      background: 'white',
                      borderRadius: '21px',
                    }}
                  ></Box>
                  <Box>
                    <h2 style={{ color: '#BC27F6' }}>Titel</h2>
                    <p style={{ color: 'white' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut ad minim veniam, quis nostrud exercitation
                      laboris nisi ut aliquip ex ea commodo consequat. Duis
                    </p>
                  </Box>
                </Box>
                {/* Box 2 */}
                <Box
                  sx={{
                    cardStyles,
                    width: `${
                      xlBreakpointUp
                        ? '24rem'
                        : lgBreakpointUp
                        ? '18rem'
                        : mdBreakpointUp
                        ? '16rem'
                        : '21rem'
                    }`,
                  }}
                >
                  <Box
                    sx={{
                      height: `${
                        xlBreakpointUp
                          ? '16rem'
                          : lgBreakpointUp
                          ? '11rem'
                          : mdBreakpointUp
                          ? '10rem'
                          : '14rem'
                      }`,
                      width: `${
                        xlBreakpointUp
                          ? '24rem'
                          : lgBreakpointUp
                          ? '18rem'
                          : mdBreakpointUp
                          ? '16rem'
                          : '21rem'
                      }`,
                      background: 'white',
                      borderRadius: '21px',
                    }}
                  ></Box>
                  <Box>
                    <h2 style={{ color: '#BC27F6' }}>Titel</h2>
                    <p style={{ color: 'white' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut ad minim veniam, quis nostrud exercitation
                      laboris nisi ut aliquip ex ea commodo consequat. Duis
                    </p>
                  </Box>
                </Box>
                {/* Box 3 */}
                <Box
                  sx={{
                    cardStyles,
                    width: `${
                      xlBreakpointUp
                        ? '24rem'
                        : lgBreakpointUp
                        ? '18rem'
                        : mdBreakpointUp
                        ? '16rem'
                        : '21rem'
                    }`,
                  }}
                >
                  <Box
                    sx={{
                      height: `${
                        xlBreakpointUp
                          ? '16rem'
                          : lgBreakpointUp
                          ? '11rem'
                          : mdBreakpointUp
                          ? '10rem'
                          : '14rem'
                      }`,
                      width: `${
                        xlBreakpointUp
                          ? '24rem'
                          : lgBreakpointUp
                          ? '18rem'
                          : mdBreakpointUp
                          ? '16rem'
                          : '21rem'
                      }`,
                      background: 'white',
                      borderRadius: '21px',
                    }}
                  ></Box>
                  <Box>
                    <h2 style={{ color: '#BC27F6' }}>Titel</h2>
                    <p style={{ color: 'white' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut ad minim veniam, quis nostrud exercitation
                      laboris nisi ut aliquip ex ea commodo consequat. Duis
                    </p>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* Video Part */}
          <Box
            sx={{
              height:`${
                  xlBreakpointUp
                    ? '50rem'
                    : lgBreakpointUp
                    ? '50rem'
                    : mdBreakpointUp
                    ? '45rem'
                    : smBreakpointUp
                    ? '45rem'
                    : '35rem'
                }`,
                marginTop:"10rem",
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <svg
              style={{ position: 'absolute', zIndex: '-2' }}
              /*             width="1448"
                                height="1050" */
              width={`${
                xlBreakpointUp
                  ? '1448'
                  : lgBreakpointUp
                  ? '1200'
                  : mdBreakpointUp
                  ? '900'
                  : smBreakpointUp
                  ? '650'
                  : '450'
              }`}
              /*                 height={`${
                                      lgBreakpointUp ? '1050' : mdBreakpointUp ? "850" : smBreakpointUp ? '450' : '650'
                                    }`} */
              height="auto"
              viewBox="0 0 1598 1050"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="1276.5"
                cy="147.5"
                r="131"
                stroke="#F3F3F3"
                strokeWidth="33"
              />
              <circle
                cx="1122"
                cy="946"
                r="87.5"
                stroke="#F3F3F3"
                strokeWidth="33"
              />
              <circle
                cx="90.5"
                cy="932.5"
                r="74"
                stroke="#F9F9F9"
                strokeWidth="33"
              />
              <circle
                cx="90.5"
                cy="932.5"
                r="74"
                stroke="#F9F9F9"
                strokeWidth="33"
              />
              <circle
                cx="1507.5"
                cy="578.5"
                r="74"
                stroke="#F9F9F9"
                strokeWidth="33"
              />
              <circle
                cx="1507.5"
                cy="578.5"
                r="74"
                stroke="#F9F9F9"
                strokeWidth="33"
              />
              <circle
                cx="229"
                cy="295"
                r="92.5"
                stroke="#F9F9F9"
                strokeWidth="33"
              />
              <circle
                cx="229"
                cy="295"
                r="92.5"
                stroke="#F9F9F9"
                strokeWidth="33"
              />
            </svg>
            {/* Video */}
            <CardMedia
              component="iframe"
              style={{
                height: `${
                  xlBreakpointUp
                    ? '34rem'
                    : lgBreakpointUp
                    ? '30rem'
                    : mdBreakpointUp
                    ? '24rem'
                    : smBreakpointUp
                    ? '22rem'
                    : '15rem'
                }`,
                width: `${
                  xlBreakpointUp
                    ? '50rem'
                    : lgBreakpointUp
                    ? '45rem'
                    : mdBreakpointUp
                    ? '35rem'
                    : smBreakpointUp
                    ? '33rem'
                    : '18rem'
                }`,
                border: 'none',
                borderRadius: `${mdBreakpointDown ? '30px' : '43px'}`,
              }}
              image="https://www.youtube.com/embed/muuK4SpRR5M"
            />
          </Box>
          {/* Prices */}
          <Box
            sx={{
              background: '#F8F8F8',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column' /* padding: '5rem 0 5rem 0' */,
              padding: '2rem 0 2rem 0',
            }}
          >
            <h1
              style={{
                padding: `${mdBreakpointDown ? '0 2rem 0 2rem' : '0 0 0 0'}`,
              }}
            >
              Der passende Preisplan für Ihre Bedürfnisse
            </h1>
            {lgBreakpointUp ? (
              /* Items */
              <Box
                sx={{
                  height: '65rem',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}
              >
                {/* First Item */}
                <Box
                  sx={{
                    height: '52rem',
                    width: '23rem',
                    borderRadius: '21px',
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                  }}
                >
                  {/* List */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {/* Title */}
                    <Box>
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '-2rem',
                          border: '18px solid #D770FF',
                          height: '6rem',
                          width: '6rem',
                          borderRadius: '50%',
                          background: 'white',
                        }}
                      />
                      <h2 style={{ color: '#D770FF', marginLeft: '8rem' }}>
                        Light
                      </h2>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      {/* Item */}
                      <Box
                        sx={{
                          width: '18rem',
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: '3rem',
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Implementierung der Grundplattform</p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Individuelle Anpassungen am Look</p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Auswahl von max. 5 bestehenden Funktionen</p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Optionale kostenpflichtige Funktions-Updates</p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Optionaler Maintenance Contract</p>
                      </Box>
                    </Box>
                  </Box>
                  {/* AnfrageButton */}
                  <Box
                    sx={{
                      background: '#D770FF',
                      width: '100%',
                      height: '5rem',
                      borderBottomLeftRadius: '21px',
                      borderBottomRightRadius: '21px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: 'white',
                      fontSize: '1.5rem',
                      cursor: 'pointer',
                    }}
                  >
                    <Link href="/">
                      <p>ANFRAGEN</p>
                    </Link>
                  </Box>
                  {/* Ende Item */}
                </Box>

                {/* Second Item */}
                <Box
                  sx={{
                    height: '52rem',
                    width: '23rem',
                    borderRadius: '21px',
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                  }}
                >
                  {/* List */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {/* Title */}
                    <Box>
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '-2rem',
                          border: '18px solid #BC27F6',
                          height: '6rem',
                          width: '6rem',
                          borderRadius: '50%',
                          background: 'white',
                        }}
                      />
                      <h2 style={{ color: '#BC27F6', marginLeft: '8rem' }}>
                        Extended
                      </h2>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      {/* Item */}
                      <Box
                        sx={{
                          width: '18rem',
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: '3rem',
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Implementierung der Grundplattform</p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Individuelle Anpassungen am Look</p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Auswahl von max. 10 bestehenden Funktionen</p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>
                          Implementierung zusätzlicher Funktionen nach Absprache
                        </p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Design und Animation eines eigenen Maskottchens</p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Inkl. 1 Jahr Maintenance Contract</p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Optionale Maintenance Contract Verlängerung</p>
                      </Box>
                    </Box>
                  </Box>
                  {/* AnfrageButton */}
                  <Box
                    sx={{
                      background: '#BC27F6',
                      width: '100%',
                      height: '5rem',
                      borderBottomLeftRadius: '21px',
                      borderBottomRightRadius: '21px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: 'white',
                      fontSize: '1.5rem',
                      cursor: 'pointer',
                    }}
                  >
                    <Link href="/">
                      <p>ANFRAGEN</p>
                    </Link>
                  </Box>
                  {/* Ende Item */}
                </Box>

                {/* Third Item */}
                <Box
                  sx={{
                    height: '52rem',
                    width: '23rem',
                    borderRadius: '21px',
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                  }}
                >
                  {/* List */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {/* Title */}
                    <Box>
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '-2rem',
                          border: '18px solid #7514F5',
                          height: '6rem',
                          width: '6rem',
                          borderRadius: '50%',
                          background: 'white',
                        }}
                      />
                      <h2 style={{ color: '#7514F5', marginLeft: '8rem' }}>
                        Extended
                      </h2>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      {/* Item */}
                      <Box
                        sx={{
                          width: '18rem',
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: '3rem',
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Implementierung der Grundplattform</p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>
                          Individuelle Anpassungen am Look inkl. Maskottchen
                        </p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Unlimitierte Auswahl an bestehenden Funktionen</p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>
                          Entwicklung und Implementierung individueller
                          Funktionen
                        </p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Optionaler Maintenance Contract</p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Inkl. 1 Jahr Maintenance Contract</p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Optionale Maintenance Contract Verlängerung</p>
                      </Box>
                    </Box>
                  </Box>
                  {/* AnfrageButton */}
                  <Box
                    sx={{
                      background: '#7514F5',
                      width: '100%',
                      height: '5rem',
                      borderBottomLeftRadius: '21px',
                      borderBottomRightRadius: '21px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: 'white',
                      fontSize: '1.5rem',
                      cursor: 'pointer',
                    }}
                  >
                    <Link href="/">
                      <p>ANFRAGEN</p>
                    </Link>
                  </Box>
                  {/* Ende Item */}
                </Box>
              </Box>
            ) : mdBreakpointUp ? (
              /* Items */
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: '5rem',
                  height: 'auto',
                }}
              >
                {/* First Item */}
                <Box
                  sx={{
                    height: '27rem',
                    width: '48rem',
                    borderRadius: '21px',
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                  }}
                >
                  {/* List */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {/* Title */}
                    <Box>
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '-2rem',
                          border: '12px solid #D770FF',
                          height: '5rem',
                          width: '5rem',
                          borderRadius: '50%',
                          background: 'white',
                        }}
                      />
                      <h2 style={{ color: '#D770FF', marginLeft: '8rem' }}>
                        Light
                      </h2>
                    </Box>
                    {/* Box of Items */}
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={{ marginRight: '1rem' }}
                          />
                          <p>Implementierung der Grundplattform</p>
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={{ marginRight: '1rem' }}
                          />
                          <p>Individuelle Anpassungen am Look</p>
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={{ marginRight: '1rem' }}
                          />
                          <p>Auswahl von max. 5 bestehenden Funktionen</p>
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={{ marginRight: '1rem' }}
                          />
                          <p>Optionale kostenpflichtige Funktions-Updates</p>
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={{ marginRight: '1rem' }}
                          />
                          <p>Optionaler Maintenance Contract</p>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  {/* AnfrageButton */}
                  <Box
                    sx={{
                      background: '#D770FF',
                      width: '100%',
                      height: '5rem',
                      borderBottomLeftRadius: '21px',
                      borderBottomRightRadius: '21px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: 'white',
                      fontSize: '1.5rem',
                      cursor: 'pointer',
                    }}
                  >
                    <Link href="/">
                      <p>ANFRAGEN</p>
                    </Link>
                  </Box>
                  {/* Ende Item */}
                </Box>
                {/* Second Item */}
                <Box
                  sx={{
                    height: '27rem',
                    width: '48rem',
                    borderRadius: '21px',
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    marginTop: '5rem',
                  }}
                >
                  {/* List */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {/* Title */}
                    <Box>
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '-2rem',
                          border: '12px solid #BC27F6',
                          height: '5rem',
                          width: '5rem',
                          borderRadius: '50%',
                          background: 'white',
                        }}
                      />
                      <h2 style={{ color: '#BC27F6', marginLeft: '8rem' }}>
                        Light
                      </h2>
                    </Box>
                    {/* Box of Items */}
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={{ marginRight: '1rem' }}
                          />
                          <p>Implementierung der Grundplattform</p>
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={{ marginRight: '1rem' }}
                          />
                          <p>Individuelle Anpassungen am Look</p>
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={{ marginRight: '1rem' }}
                          />
                          <p>Auswahl von max. 10 bestehenden Funktionen</p>
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={{ marginRight: '1rem' }}
                          />
                          <p>
                            Implementierung zusätzlicher Funktionen nach
                            Absprache
                          </p>
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={{ marginRight: '1rem' }}
                          />
                          <p>Design und Animation eines eigenen Maskottchens</p>
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={{ marginRight: '1rem' }}
                          />
                          <p>Inkl. 1 Jahr Maintenance Contract</p>
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={{ marginRight: '1rem' }}
                          />
                          <p>Optionale Maintenance Contract Verlängerung</p>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  {/* AnfrageButton */}
                  <Box
                    sx={{
                      background: '#BC27F6',
                      width: '100%',
                      height: '5rem',
                      borderBottomLeftRadius: '21px',
                      borderBottomRightRadius: '21px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: 'white',
                      fontSize: '1.5rem',
                      cursor: 'pointer',
                    }}
                  >
                    <Link href="/">
                      <p>ANFRAGEN</p>
                    </Link>
                  </Box>
                  {/* Ende Item */}
                </Box>
                {/* Third Item */}
                <Box
                  sx={{
                    height: '27rem',
                    width: '48rem',
                    borderRadius: '21px',
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    marginTop: '5rem',
                  }}
                >
                  {/* List */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {/* Title */}
                    <Box>
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '-2rem',
                          border: '12px solid #7514F5',
                          height: '5rem',
                          width: '5rem',
                          borderRadius: '50%',
                          background: 'white',
                        }}
                      />
                      <h2 style={{ color: '#7514F5', marginLeft: '8rem' }}>
                        Light
                      </h2>
                    </Box>
                    {/* Box of Items */}
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={{ marginRight: '1rem' }}
                          />
                          <p>Implementierung der Grundplattform</p>
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={{ marginRight: '1rem' }}
                          />
                          <p>
                            Individuelle Anpassungen am Look inkl. Maskottchen
                          </p>
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={{ marginRight: '1rem' }}
                          />
                          <p>Unlimitierte Auswahl an bestehenden Funktionen</p>
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={{ marginRight: '1rem' }}
                          />
                          <p>
                            Entwicklung und Implementierung individueller
                            Funktionen
                          </p>
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={{ marginRight: '1rem' }}
                          />
                          <p>Optionaler Maintenance Contract</p>
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={{ marginRight: '1rem' }}
                          />
                          <p>Inkl. 1 Jahr Maintenance Contract</p>
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={{ marginRight: '1rem' }}
                          />
                          <p>Optionale Maintenance Contract Verlängerung</p>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  {/* AnfrageButton */}
                  <Box
                    sx={{
                      background: '#7514F5',
                      width: '100%',
                      height: '5rem',
                      borderBottomLeftRadius: '21px',
                      borderBottomRightRadius: '21px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: 'white',
                      fontSize: '1.5rem',
                      cursor: 'pointer',
                    }}
                  >
                    <Link href="/">
                      <p>ANFRAGEN</p>
                    </Link>
                  </Box>
                  {/* Ende Item */}
                </Box>
              </Box>
            ) : (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: '5rem',
                  height: 'auto',
                }}
              >
                {/* First Item */}
                <Box
                  sx={{
                    height: '32rem',
                    width: '21rem',
                    borderRadius: '21px',
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                  }}
                >
                  {/* List */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {/* Title */}
                    <Box>
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '-2rem',
                          border: '9px solid #D770FF',
                          height: '4rem',
                          width: '4rem',
                          borderRadius: '50%',
                          background: 'white',
                        }}
                      />
                      <h2 style={{ color: '#D770FF', marginLeft: '8rem' }}>
                        Light
                      </h2>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      {/* Item */}
                      <Box
                        sx={{
                          width: '18rem',
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Implementierung der Grundplattform</p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Individuelle Anpassungen am Look</p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Auswahl von max. 5 bestehenden Funktionen</p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Optionale kostenpflichtige Funktions-Updates</p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Optionaler Maintenance Contract</p>
                      </Box>
                    </Box>
                  </Box>
                  {/* AnfrageButton */}
                  <Box
                    sx={{
                      background: '#D770FF',
                      width: '100%',
                      height: '5rem',
                      borderBottomLeftRadius: '21px',
                      borderBottomRightRadius: '21px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: 'white',
                      fontSize: '1.5rem',
                      cursor: 'pointer',
                    }}
                  >
                    <Link href="/">
                      <p>ANFRAGEN</p>
                    </Link>
                  </Box>
                  {/* Ende Item */}
                </Box>
                {/* Second Item */}
                <Box
                  sx={{
                    height: '40rem',
                    width: '21rem',
                    borderRadius: '21px',
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    marginTop: '5rem',
                  }}
                >
                  {/* List */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {/* Title */}
                    <Box>
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '-2rem',
                          border: '9px solid #BC27F6',
                          height: '4rem',
                          width: '4rem',
                          borderRadius: '50%',
                          background: 'white',
                        }}
                      />
                      <h2 style={{ color: '#BC27F6', marginLeft: '8rem' }}>
                        Extended
                      </h2>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      {/* Item */}
                      <Box
                        sx={{
                          width: '18rem',
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Implementierung der Grundplattform</p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Individuelle Anpassungen am Look</p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Auswahl von max. 10 bestehenden Funktionen</p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>
                          Implementierung zusätzlicher Funktionen nach Absprache
                        </p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Design und Animation eines eigenen Maskottchens</p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Inkl. 1 Jahr Maintenance Contract</p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Optionale Maintenance Contract Verlängerung</p>
                      </Box>
                    </Box>
                  </Box>
                  {/* AnfrageButton */}
                  <Box
                    sx={{
                      background: '#BC27F6',
                      width: '100%',
                      height: '5rem',
                      borderBottomLeftRadius: '21px',
                      borderBottomRightRadius: '21px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: 'white',
                      fontSize: '1.5rem',
                      cursor: 'pointer',
                    }}
                  >
                    <Link href="/">
                      <p>ANFRAGEN</p>
                    </Link>
                  </Box>
                  {/* Ende Item */}
                </Box>
                {/* Third Item */}
                <Box
                  sx={{
                    height: '40rem',
                    width: '21rem',
                    borderRadius: '21px',
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    marginTop: '5rem',
                  }}
                >
                  {/* List */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {/* Title */}
                    <Box>
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '-2rem',
                          border: '9px solid #7514F5',
                          height: '4rem',
                          width: '4rem',
                          borderRadius: '50%',
                          background: 'white',
                        }}
                      />
                      <h2 style={{ color: '#7514F5', marginLeft: '8rem' }}>
                        Light
                      </h2>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      {/* Item */}
                      <Box
                        sx={{
                          width: '18rem',
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Implementierung der Grundplattform</p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>
                          Individuelle Anpassungen am Look inkl. Maskottchen
                        </p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Unlimitierte Auswahl an bestehenden Funktionen</p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>
                          Entwicklung und Implementierung individueller
                          Funktionen
                        </p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Optionaler Maintenance Contract</p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Inkl. 1 Jahr Maintenance Contract</p>
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
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ marginRight: '1rem' }}
                        />
                        <p>Optionale Maintenance Contract Verlängerung</p>
                      </Box>
                    </Box>
                  </Box>
                  {/* AnfrageButton */}
                  <Box
                    sx={{
                      background: '#7514F5',
                      width: '100%',
                      height: '5rem',
                      borderBottomLeftRadius: '21px',
                      borderBottomRightRadius: '21px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: 'white',
                      fontSize: '1.5rem',
                      cursor: 'pointer',
                    }}
                  >
                    <Link href="/">
                      <p>ANFRAGEN</p>
                    </Link>
                  </Box>
                  {/* Ende Item */}
                </Box>
              </Box>
            )}
          </Box>
        </Box>
        {/* Maintenance */}
        {lgBreakpointUp ? (
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
                border: '18px solid #7514F5',
                height: '6rem',
                width: '6rem',
                borderRadius: '50%',
                background: 'white',
              }}
            />
            <Box>
              <h1>Maintenance Contract</h1>
              <p>
                Damit Sie sorgenfrei unsere Plattform jederzeit verwenden
                können, empfehlen wir zusätzlich zu dem gewählten Package
                unseren Maintenance Contract.
              </p>
            </Box>
            <Box
              sx={{
                boxShadow: 3,
                width: '65rem',
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
                    width: '31rem',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ marginRight: '1rem' }}
                  />
                  <p>Priorisierter Support</p>
                </Box>
                {/* Item */}
                <Box
                  sx={{
                    width: '31rem',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ marginRight: '1rem' }}
                  />
                  <p>Kostenlose Funktions-Updates</p>
                </Box>
                {/* Item */}
                <Box
                  sx={{
                    width: '31rem',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ marginRight: '1rem' }}
                  />
                  <p>Anpassungen Look</p>
                </Box>
              </Box>
              {/* Row */}
              <Box>
                {/* Item */}
                <Box
                  sx={{
                    width: '31rem',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ marginRight: '1rem' }}
                  />
                  <p>Optionale Entwicklung neuer Funktionen nach Absprache</p>
                </Box>
                {/* Item */}
                <Box
                  sx={{
                    width: '31rem',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ marginRight: '1rem' }}
                  />
                  <p>
                    {' '}
                    Weiterentwicklung und Implementierung bestehender
                    Funktionalitäten
                  </p>
                </Box>
              </Box>
            </Box>
          </Box>
        ) : mdBreakpointUp ? (
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
                Damit Sie sorgenfrei unsere Plattform jederzeit verwenden
                können, empfehlen wir zusätzlich zu dem gewählten Package
                unseren Maintenance Contract.
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
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ marginRight: '1rem' }}
                  />
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
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ marginRight: '1rem' }}
                  />
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
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ marginRight: '1rem' }}
                  />
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
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ marginRight: '1rem' }}
                  />
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
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ marginRight: '1rem' }}
                  />
                  <p>
                    {' '}
                    Weiterentwicklung und Implementierung bestehender
                    Funktionalitäten
                  </p>
                </Box>
              </Box>
            </Box>
          </Box>
        ) : (
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
                Damit Sie sorgenfrei unsere Plattform jederzeit verwenden
                können, empfehlen wir zusätzlich zu dem gewählten Package
                unseren Maintenance Contract.
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
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ marginRight: '1rem' }}
                />
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
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ marginRight: '1rem' }}
                />
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
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ marginRight: '1rem' }}
                />
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
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ marginRight: '1rem' }}
                />
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
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ marginRight: '1rem' }}
                />
                <p>
                  {' '}
                  Weiterentwicklung und Implementierung bestehender
                  Funktionalitäten
                </p>
              </Box>
            </Box>
          </Box>
        )}
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
