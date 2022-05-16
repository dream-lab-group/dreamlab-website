import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import logo from '../assets/dreamlab-logo.png'

function Navigation() {
  return (
    <div className="bar">
      <div className="logo">
        <Image src={logo}  width={152} height={49} alt="dream lab Logo" /> {/* layout="responsive" funktioniert nicht? */}
      </div>
      <nav>
        <ul className="mainNav">
          {/* Agentur */}
          <li>
            <Link href="/#agentur">
              <a>Agentur</a>
            </Link>
          </li>
          {/* Projekt */}
          <li>
            <Link href="/#projekt">
              <a>Projekt</a>
            </Link>
          </li>
          {/* Team */}
          <li>
            <Link href="/#team">
              <a>Team</a>
            </Link>
          </li>
          {/* Kontakt */}
          <li>
            <Link href="/#kontakt">
              <a>Kontakt</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
