import {Layout, Sidebar} from '../components/index'

export default function Profile() {
  return (
    <>
      <section>
        <h1>Profile LSP BPPTIK</h1>
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
        <p>
          Opsi layanan: Kelas online, layanan di tempat.
        </p>
        <p>
          Alamat: Jl. Sekolah Hijau Jl. Jababeka Raya No.2, Simpangan, Kec. Cikarang Utara, Bekasi, Jawa Barat 17530
        </p>
        <ol>
          <li>Senin: 08:00 - 16:00</li>
          <li>Selasa: 08:00 - 16:00</li>
          <li>Rabu: 08:00 - 16:00</li>
          <li>Kamis: 08:00 - 16:00</li>
          <li>Jumat: 08:00 - 16:30</li>
          <li>Sabtu: Tutup</li>
          <li>Minggu: Tutup</li>
        </ol>
        <p>
          Kesehatan & keselamatan: Perlu janji temu, Wajib mengenakan masker, Wajib mengukur suhu tubuh, Staf mengenakan masker,
          Staf telah melakukan pengukuran suhu tubuh, Staf wajib menyemprotkan disinfektan ke permukaan di antara kunjungan pelanggan.
        </p>
        <p>
          Telepon: (021) 28645000
        </p>
        <p>
          Provinsi: Jawa Barat
        </p>
      </section>
    </>
  )
}

Profile.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
      <Sidebar />
    </Layout>
  )
}