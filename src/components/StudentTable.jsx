function StudentTable({ mahasiswa }) {
  return (
    <div className="rounded-xl bg-(--card-bg)] p-5 shadow-(--card-shadow)]">

      <h2 className="mb-5 text-xl font-bold">
        Data Mahasiswa
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full min-w-225 border-collapse">

          <thead>
            <tr className="bg-(--table-header-bg) text-white">

              <th className="p-3 text-left">NIM</th>
              <th className="p-3 text-left">Nama</th>
              <th className="p-3 text-left">No. HP</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Alamat</th>
              <th className="p-3 text-left">Program Studi</th>
              <th className="p-3 text-left">Tahun Masuk</th>

            </tr>
          </thead>

          <tbody>
            {mahasiswa.map((mhs) => (
              <tr
                key={mhs.nim}
                className="border-b border-(--table-border) transition-colors hover:bg-(--table-hover)"
              >

                <td className="p-3">{mhs.nim}</td>
                <td className="p-3">{mhs.nama}</td>
                <td className="p-3">{mhs.noHp}</td>
                <td className="p-3">{mhs.email}</td>
                <td className="p-3">{mhs.alamat}</td>
                <td className="p-3">{mhs.prodi}</td>
                <td className="p-3">{mhs.tahunMasuk}</td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
}

export default StudentTable;
