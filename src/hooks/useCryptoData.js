import { useEffect, useState } from "react";
import coinGeckoApi from "../api/coinGeckoApi";

function useCryptoData(endpoint, params = {}, extractData) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await coinGeckoApi.get(endpoint, { params });
        const extractedData = extractData(response);

        setData(extractedData);
      } catch (error) {
        setError(error.message || "Something went Wrong");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [endpoint]);

  return {
    data,
    loading,
    error,
  };
}

export default useCryptoData;
