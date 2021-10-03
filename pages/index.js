import Image from 'next/image'
import { Row, Col} from 'react-bootstrap';
import {Layout, Sidebar} from '../components/index'

const LogoLsp = () => (
  <Image
    src="/images/logoLSP.PNG" // Route of the image file
    height={123} // Desired size with correct aspect ratio
    width={271} // Desired size with correct aspect ratio
    alt="BPPTIK"
  />
)

const LogoBnsp = () => (
  <Image
    src="/images/bnsp.PNG" // Route of the image file
    height={123} // Desired size with correct aspect ratio
    width={271} // Desired size with correct aspect ratio
    alt="BPPTIK"
  />
)

const ButtonTwitter = () => (
  <div className='buttonShare twitterBtn' size="sm">
    Share on Twitter
  </div>
)

const ButtonFacebook = () => (
  <div className='buttonShare facebookBtn' size="sm">
    Share on Facebook
  </div>
)

const ButtonGoogle = () => (
  <div className='buttonShare googleBtn' size="sm">
    Share on Google +
  </div>
)

export default function Home() {
  return (
    <>
      <section>
        <h1>LSP BPPTIK</h1>
        <Row>
          <Col>
            <LogoLsp />
          </Col>
          <Col>
            <LogoBnsp />
          </Col>
        </Row>
        <br/>
        <p>
          LSP BPPTIK adalah lembaga pendukung BNSP yang bertanggung jawab untuk melaksanakan uji kompetensi dan 
          sertifikasi kompetensi di bidang TIK. LSP BPPTIK didirikan oleh Badan Penelitian dan Pengembangan Sumber Daya 
          Manusia (Balitbang SDM) Kementerian Komunikasi dan Informatika (Kominfo) melalui Surat Keputusan (SK) Kepala 
          Balitbang SDM Nomor 13 Tahun 2018 tanggal 1 Februari 2018 tentang Pembentukan Lembaga Sertifikasi Profesi Pihak 
          Kesatu Balai Pelatihan dan Pengembangan Teknologi Informasi dan Komunikasi.
        </p>
        <p>
          LSP BPPTIK memiliki fungsi melaksanakan sertifikasi kompetensi uji kompetensi, dan sertifikasi bidang TIK, dengan tugas:
        </p>
        <ol className="abc">
          <li>menyusun dan mengembangkan skema sertifikasi</li>
          <li>membuat perangkat asesmen dan uji kompetensi</li>
          <li>menyediakan tenaga penguji (asesor)</li>
          <li>melaksanakan uji kompetensi dan sertifikasi</li>
          <li>melaksanakan surveilan pemeliharaan sertifikasi</li>
          <li>menetapkan persyaratan, memverifikasi dan menetapkan Tempat Uji Kompetensi (TUK)</li>
          <li>memelihara kinerja asesor dan TUK dan</li>
          <li>mengembangkan pelayanan uji kompetensi dan sertifikasi.</li>
        </ol>
        <p>
          Dalam melaksanakan fungsi dan tugasnya, LSP BPPTIK mengacu pada pedoman yang dikeluarkan oleh BNSP. Dalam 
          pedoman tersebut ditetapkan persyaratan yang harus dipatuhi untuk menjamin agar lembaga sertifikasi menjalankan 
          sistem sertifikasi secara konsisten dan profesional, sehingga dapat diterima pada tingkat nasional yang relevan demi 
          kepentingan pengembangan sumber daya manusia dalam aspek peningkatan kualitas dan perlindungan tenaga kerja.
        </p>
        <ul>
          <li>Visi Dan Misi LSP BPPTIK</li>
          <li>Struktur Organisasi LSP BPPTIK</li>
          <li>Personil LSP BPPTIK</li>
          <li>Ruang Lingkup LSP BPPTIK</li>
          <li>Skema Sertifikasi</li>
          <li>Kontak</li>
        </ul>
        <br/>
        <div className='survei'>
          <h4>Survei</h4>
          <p>Apakah informasi pada konten ini sesuai dengan tujuan website BPPTIK?</p>
          <div className='rate'>
            <input type="radio" id="star5" name="rate" value="5" />
            <label htmlFor="star5" title="text"></label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label htmlFor="star4" title="text"></label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label htmlFor="star3" title="text"></label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label htmlFor="star2" title="text"></label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label htmlFor="star1" title="text"></label>        
          </div>
        </div>
        <br/>
        <div className='share'>
          <ButtonTwitter/>
          <ButtonFacebook/>
          <ButtonGoogle/>
          
        </div>
      </section>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    
    <Layout>
      {page}
      <Sidebar />
    </Layout>
  )
}