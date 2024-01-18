// import { useEffect, useState } from "react";
// import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);
  // async function fecthData() {
  //   setLoading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=xBXSBkKjAcya2VfFN0KuqBsiejkGBBzn`;
  //   // what is this {data}? => this is known as d-structuring (it means that i want only that particular key from json file)
  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   console.log(imageSource);
  //   setGif(imageSource);
  //   setLoading(false)
  // }
  // useEffect(() => {
  //   fecthData();
  // }, []);
  const {gif,loading,fetchData} = useGif();
  // function clickHandler() {
  //   fecthData();
  // }
  return (
    <>
      <div className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
        <h1 className="text-2xl underline uppercase font-bold mt-[15px]">
          A Random Gif
        </h1>

        {loading ? <Spinner /> : <img src={gif} alt="" width={450} />}
        <button
          onClick={()=>fetchData()}
          className="w-10/12 bg-white opacity-90 text-lg py-2 font-bold rounded-lg mb-[15px]"
        >
          Generate
        </button>
      </div>
    </>
  );
};
export default Random;
