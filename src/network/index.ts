"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState("data");

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(url)
        .then((_res) => setData(_res.data))
        .catch((_err) => setData(_err.response.data.message));
    };

    getData();
  }, []);

  return { data };
};
