import React, { useEffect, useState } from "react";
import axios from "axios";

const url = `https://api.giphy.com/v1/gifs/random?api_key=xBXSBkKjAcya2VfFN0KuqBsiejkGBBzn`;
const useGif = (tag) => {
  // const [tag,setTag] = useState('')
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData(tag) {
    setLoading(true);
    let { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    let imageResource = data.data.images.downsized_large.url;
    setGif(imageResource);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { gif, loading, fetchData };
};

export default useGif;
