import { useState, useEffect } from "react";
import axios from "axios";


function useItemsInfo(queryParams) {
  const [itemsInfo, setItemsInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItemsInfo = async () => {
      try {
        const response = await axios.post(`http://localhost:3000/item-info/getInfoItem`, {
          offerUUID: queryParams.offerUUID,
          items: queryParams.items,
        });
        setItemsInfo(response.data);
      } catch (error) {
        setItemsInfo({ error: "Error fetching items info", details: error });
      } finally {
        setLoading(false);
      }
    };

    if (loading) {
      fetchItemsInfo();
    }
  },queryParams);

  return { itemsInfo, loading };
}

export default useItemsInfo;