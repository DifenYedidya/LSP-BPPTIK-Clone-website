import {Layout, Sidebar} from '../components/index'

export default function Pelatihan() {
  return (
    <>
      <section>
        <h1>Pelatihan yang diselenggarakan</h1>
        <p>
          LSP BPPTIK memiliki fungsi melaksanakan sertifikasi kompetensi uji kompetensi, dan sertifikasi bidang TIK. 
          Pelatihan-pelatihan tersebut meliputi:
        </p>
        <ol>
          <li>Pelatihan Teknisi Utama Jaringan Komputer</li>
          <li>Pelatihan Junior Graphic Junior</li>
          <li>Pelatihan Junior Network Administrator</li>
          <li>Pelatihan Junior Web Developer</li>
          <li>Pelatihan Junior Office Operator</li>
        </ol>
      </section>
    </>
  )
}

Pelatihan.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
      <Sidebar />
    </Layout>
  )
}