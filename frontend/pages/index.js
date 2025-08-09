import { useEffect, useState } from "react";

export default function Home() {
  const [datasets, setDatasets] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/datasets")
      .then((res) => res.json())
      .then((data) => setDatasets(data));
  }, []);
  return (
    <div>
      <h1>Daftar Dataset Satu Data Prabumulih</h1>
      <ul>
        {datasets.map((ds) => (
          <li key={ds.id}>{ds.name} ({ds.year})</li>
        ))}
      </ul>
    </div>
  );
}