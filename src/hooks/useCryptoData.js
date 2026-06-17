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

        setError("");

        const response = await coinGeckoApi.get(endpoint, {
          params,
        });

        const extractedData = extractData(response);

        setData(extractedData);
      } catch (error) {
        setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [endpoint, JSON.stringify(params)]);

  return {
    data,

    loading,

    error,
  };
}

export default useCryptoData;
