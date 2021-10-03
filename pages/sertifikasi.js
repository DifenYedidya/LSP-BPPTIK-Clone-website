import {Layout, Sidebar} from '../components/index'

export default function Sertifikasi() {
  return (
    <>
      <section>
        <h1>Sertifikasi SKKNI</h1>
        <p>
          Standar Kompetensi Kerja Nasional Indonesia (SKKNI) adalah rumusan kemampuan kerja yang mencakup 
          aspek pengetahuan, keterampilan, dan/atau keahlian serta sikap kerja yang relevan dengan pelaksanaan 
          tugas dan syarat jabatan yang ditetapkan.
        </p>
        <p>
          SKKNI dikembangkan melalui konsultasi dengan industri terkait, untuk memastikan kesesuaian kebutuhan 
          di tempat kerja. SKKNI digunakan terutama untuk merancang dan mengimplementasikan pelatihan kerja, 
          melakukan asesmen (penilaian) keluaran pelatihan, serta asesmen tingkat keterampilan dan keahlian terkini 
          yang dimiliki oleh seseorang. SKKNI ditetapkan oleh Menteri Ketenagakerjaan.
        </p>
        <h2>Sejarah SKKNI</h2>
        <p>
          Standar kompetensi tersebut menjadi SKKNI pertama yang diterbitkan pada tanggal 8 Juli 2004 melalui Keputusan 
          Menteri Tenaga Kerja dan Transmigrasi Nomor KEP.116/MEN/VII/2004 tentang Penetapan SKKNI Sektor Otomotif Subsektor 
          Kendaraan Ringan.
        </p>
        <p>
          Selanjutnya, dalam rangka mengurangi terjadinya kesenjangan kompetensi antara lulusan pendidikan/pelatihan dengan kebutuhan 
          pada sektor industri di Indonesia, maka orientasi pendidikan/pelatihan yang selama ini supply driven perlu diubah menjadi 
          demand driven. Para praktisi industri perlu terlibat langsung untuk menginformasikan kebutuhan kompetensi yang ada pada 
          bidangnya masing-masing dalam bentuk SKKNI. SKKNI tersebut nantinya akan digunakan sebagai acuan untuk penyusunan program 
          dan kurikulum pendidikan/pelatihan berbasis kompetensi (sampai dengan modul-modul pembelajarannya), untuk proses pembelajaran 
          pada lembaga pendidikan/pelatihan serta digunakan pula sebagai acuan untuk penyusunan materi uji kompetensi pada lembaga 
          sertifikasi profesi (LSP).
        </p>
        <p>
          Dengan konsep tersebut, kemampuan lulusan lembaga pendidikan/pelatihan akan sesuai dengan kebutuhan industri dan para lulusan 
          nantinya juga dapat memiliki sertifikat kompetensi setelah melalui uji kompetensi di LSP. Para tenaga kerja yang sudah bekerja 
          di industri juga perlu mendapatkan sertifikat kompetensi sebagai wujud pengakuan terhadap keahlian yang dikuasainya.
        </p>
        <p>
          SKKNI diamanatkan dalam pasal 10 ayat (2) Undang-Undang Nomor 13 Tahun 2003 tentang Ketenagakerjaan. Kemudian dalam pasal yang 
          sama ayat (4) disebutkan bahwa tata cara penetapan SKKNI diatur oleh menteri yang bertanggung jawab di bidang ketenagakerjaan. 
          Tata cara penetapan SKKNI telah beberapa kali mengalami perubahan dan terakhir diatur melalui Peraturan Menteri Ketenagakerjaan 
          Nomor 3 Tahun 2016 tentang Tata Cara Penetapan SKKNI. Tata cara penetapan SKKNI sebelumnya pernah diatur melalui peraturan sebagai berikut:
        </p>
        <ol>
          <li>Keputusan Menteri Tenaga Kerja dan Transmigrasi Nomor KEP.227/MEN/2003 tentang Tata Cara Penetapan SKKNI</li>
          <li>Keputusan Menteri Tenaga Kerja dan Transmigrasi Nomor KEP.69/MEN/V/2004 tentang Perubahan Lampiran Keputusan Menteri Tenaga Kerja dan Transmigrasi Nomor KEP.227/MEN/2003 tentang Tata Cara Penetapan SKKNI</li>
          <li>Peraturan Menteri Tenaga Kerja dan Transmigrasi Nomor PER.21/MEN/X/2007 tentang Tata Cara Penetapan SKKNI</li>
          <li>Peraturan Menteri Tenaga Kerja dan Transmigrasi Nomor 8 Tahun 2012 tentang Tata Cara Penetapan SKKNI</li>
        </ol>
      </section>
    </>
  )
}

Sertifikasi.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
      <Sidebar />
    </Layout>
  )
}