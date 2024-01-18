import axios from "axios";
import React, { useEffect, useState } from "react";

const url = `https://api.giphy.com/v1/gifs/random?api_key=xBXSBkKjAcya2VfFN0KuqBsiejkGBBzn`;

const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fecthData(tag) {
    setLoading(true);
    
    // what is this {data}? => this is known as d-structuring (it means that i want only that particular key from json file)
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }
  useEffect(() => {
    fecthData('car');
  }, []);

  return { gif, loading, fecthData };
};

export default useGif;
