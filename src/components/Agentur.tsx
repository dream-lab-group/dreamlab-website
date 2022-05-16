import Button from '@mui/material/Button'
import Image from 'next/image'

import application from '../assets/application.png'
/* import bgAbout from '../assets/bg-about.png'
 */
function Agentur() {
  return (
    <section id="agentur" className="content">
      <div className="application">
        <Image
          src={application}
          /* layout="responsive" */
          width={500}
          height={347.99}
          alt="Image Application"
        />
      </div>
      <div className="upperpartText">
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</h1>
        <p>
          Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis
        </p>
      </div>
      <div className="buttonContainer">
        <Button
          variant="contained"
          href="/#team"
          sx={{
            width: '140px',
            height: '45px',
            backgroundImage: `linear-gradient(to bottom, #AD23F6 3.51%, #7E17F6 74.06%)`,
            borderRadius: '100px',
          }}
        >
          Team
        </Button>
        <Button
          variant="contained"
          href="/#team"
          sx={{
            width: '140px',
            height: '45px',
            ml: '2rem',
            bgcolor: '#DADADA',
            borderRadius: '100px',
            color: 'rgba(0, 0, 0, 0.46)',
          }}
        >
          Kontakt
        </Button>
      </div>
{/*       <div className="bgabout">
        <Image src={bgAbout} layout="responsive" alt="Image Application" />
      </div> */}
      <div className="lowerpartText">
        <h1>Warum dream lab</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad
          minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea
          commodo consequat. Duis
        </p>
      </div>
    </section>
  )
}

export default Agentur
