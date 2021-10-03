import {Layout, Sidebar} from '../components/index'

const ButtonInfo = () => (
  <div className='buttonShare infoBtn' size="sm">
    Info lebih lanjut
  </div>
)

export default function Jadwal() {
  return (
    <>
      <section>
        <h1>Jadwal pelatihan yang sedang dilaksanakan</h1>
        <p>LSP BPPTIK memiliki fungsi melaksanakan sertifikasi kompetensi uji kompetensi, dan sertifikasi bidang TIK. Pelatihan dan sertifikasi bidang TIK berbasis SKKNI online gelombang ke-8:</p>
        <ol>
          <li>
            Pelatihan Teknisi Utama Jaringan Komputer
            <p>Tanggal Pendaftaran: 07 september - 12 september 2021</p>
            <p>Tanggal Pelaksanaan: 20 September - 19 Oktober 2021</p>
            <ButtonInfo/>
          </li>
          <li>
            Pelatihan Junior Graphic Junior
            <p>Tanggal Pendaftaran: 07 september - 12 september 2021</p>
            <p>Tanggal Pelaksanaan: 20 September - 19 Oktober 2021</p>
            <ButtonInfo/>
          </li>
          <li>
            Pelatihan Junior Network Administrator
            <p>Tanggal Pendaftaran: 07 september - 12 september 2021</p>
            <p>Tanggal Pelaksanaan: 20 September - 19 Oktober 2021</p>
            <ButtonInfo/>
          </li>
          <li>
            Pelatihan Junior Web Developer
            <p>Tanggal Pendaftaran: 07 september - 12 september 2021</p>
            <p>Tanggal Pelaksanaan: 20 September - 19 Oktober 2021</p>
            <ButtonInfo/>
          </li>
          <li>
            Pelatihan Junior Office Operator
            <p>Tanggal Pendaftaran: 07 september - 12 september 2021</p>
            <p>Tanggal Pelaksanaan: 20 September - 19 Oktober 2021</p>
            <ButtonInfo/>
          </li>
        </ol>
      </section>
    </>
  )
}

Jadwal.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
      <Sidebar />
    </Layout>
  )
}