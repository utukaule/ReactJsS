import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {
  //   const [gif, setGif] = useState("");
  //   const [loading, setLoading] = useState(false);

  // async function fecthData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=xBXSBkKjAcya2VfFN0KuqBsiejkGBBzn&tag=${tag}`;
  //   // what is this {data}? => this is known as d-structuring (it means that i want only that particular key from json file)
  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   console.log(imageSource);
  //   setGif(imageSource);
  //   setLoading(false);
  // }
  // useEffect(() => {
  //   fecthData();
  // }, []);
  // function clickHandler() {
  //   fecthData();
  // }
  const [tag, setTag] = useState("car");
  const { gif, loading, fetchData } = useGif(tag);
  // function changeHandler(event){
  //     setTag(event.target.value);
  //     console.log(tag);
  // }
  return (
    <>
      <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
        <h1 className="text-2xl underline uppercase font-bold mt-[15px]">
          Random Gif
        </h1>

        {loading ? <Spinner /> : <img src={gif} alt="" width={450} />}
        <input
          type="text"
          className="w-10/12 text-lg py-2 font-bold rounded-lg"
          onChange={(event) => setTag(event.target.value)}
          value={tag}
        />
        <button
          onClick={() => fetchData(tag)}
          className="w-10/12 bg-white opacity-90 text-lg py-2 font-bold rounded-lg mb-[15px]"
        >
          Generate
        </button>
      </div>
    </>
  );
};

export default Tag;
