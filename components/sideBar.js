import Link from 'next/link'
import Image from 'next/image'
import styles from './sidebar.module.css'
import { Nav } from 'react-bootstrap'

const LogoPelatihan = () => (
  <Image
    src="/images/Pelatihan-Teknis-bidang-TIK.webp" // Route of the image file
    height={150} // Desired size with correct aspect ratio
    width={260} // Desired size with correct aspect ratio
    alt="Pelatihan-Teknis-bidang-TIK"
  />
)

const LogoSertifikasi = () => (
  <Image
    src="/images/Pelatihan-dan-Sertifikasi-SKKNI-Gratis.webp" // Route of the image file
    height={150} // Desired size with correct aspect ratio
    width={260} // Desired size with correct aspect ratio
    alt="Pelatihan-Teknis-bidang-TIK"
  />
)

function Sidebar() {
  return (
    <nav className={styles.nav}>
      <Link href="/" passHref>
       <Nav.Link>
         <LogoPelatihan/>
       </Nav.Link>
      </Link>
      <Link href="/profile" passHref>
        <Nav.Link>
          <LogoSertifikasi/>  
        </Nav.Link>        
      </Link>
      <Link href="/pelatihan" passHref>
        <a>Pelatihan</a>
      </Link>
    </nav>
  )
}

export default Sidebar