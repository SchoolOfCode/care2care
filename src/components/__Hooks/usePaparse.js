import { useState, useEffect } from "react";
import Papa from "papaparse";

const usePaparse = (URL) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Papa.parse(URL, {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  }, [URL]);

  return [data];
};

export default usePaparse;
