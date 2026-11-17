
import { useState, useEffect } from "react";
import StudentCard from "./StudentCard";

function Clock() {
  const [waktu, setWaktu] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWaktu(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <StudentCard
      title="Waktu Sekarang"
      value={waktu.toLocaleTimeString("id-ID", {
        hour12: false,
      })}
    />
  );
}

export default Clock;
