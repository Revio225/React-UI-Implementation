
import { useState } from "react";

import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import StudentTable from "./components/StudentTable";
import Clock from "./components/Jam";

function App() {
  // Data mahasiswa
  const [mahasiswa] = useState([
    {
      nim: "2401",
      nama: "Zaki Wira Wiri",
      noHp: "081234567890",
      email: "zaki@gmail.com",
      alamat: "Krian",
      prodi: "Sistem Informasi",
      tahunMasuk: "2024",
    },
    {
      nim: "2402",
      nama: "Hafid Trans",
      noHp: "081234567891",
      email: "hafid@gmail.com",
      alamat: "Tulungagung",
      prodi: "Sistem Informasi",
      tahunMasuk: "2024",
    },
    {
      nim: "2403",
      nama: "Mitya Mendeleev",
      noHp: "081234567892",
      email: "mitya@gmail.com",
      alamat: "Malang",
      prodi: "Fisika",
      tahunMasuk: "2023",
    },
    {
      nim: "2404",
      nama: "Tsaritsa Anastasia",
      noHp: "081234567893",
      email: "tsaritsa@gmail.com",
      alamat: "Bandung",
      prodi: "Hubungan Internasional",
      tahunMasuk: "2023",
    },
    {
      nim: "2405",
      nama: "Columbina Hyposelenia",
      noHp: "081234567894",
      email: "columbina@gmail.com",
      alamat: "Jakarta",
      prodi: "Teknik Informatika",
      tahunMasuk: "2024",
    },
  ]);

  return (
    <main className="min-h-screen bg-(--page-bg) text-(--text-color)">

      <div className="mx-auto w-full max-w-300 px-7.5 py-7.5 max-[700px]:px-3.75">

        {/* Header */}
        <Header />

        {/* Subheader */}
        <h2 className="mb-5 text-xl font-bold">
          Daftar Data Mahasiswa
        </h2>

        {/* Summary Cards */}
        <div className="mb-6 flex gap-5 max-[700px]:flex-col">

          <StudentCard
            title="Total Mahasiswa"
            value={mahasiswa.length}
          />

          <Clock />

        </div>

        {/* Student Table */}
        <StudentTable mahasiswa={mahasiswa} />

      </div>

    </main>
  );
}

export default App;
