import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import useGif from "../hooks/useGif";
const Random = () => {
  // const url = "https://api.giphy.com/v1/gifs/random?api_key=xBXSBkKjAcya2VfFN0KuqBsiejkGBBzn";
  // const [gif,setGif] = useState('');
  // const [loading,setLoading] = useState(false);

  // async function fetchData(){
  //         setLoading(true)
  //         let {data} = await axios.get(url);
  //         let imageResource = data.data.images.downsized_large.url;
  //         setGif(imageResource);
  //         setLoading(false)
  // }

  // useEffect(()=>{
  //     fetchData();
  // },[])

  // function clickHandler(){
  //     fetchData()
  // }
  const { gif, loading, fetchData } = useGif();
  return (
    <div className="flex flex-col items-center bg-red-400 h-[450px] justify-evenly">
      <p>Random gif generator</p>
      {loading ? (
        <Loading />
      ) : (
        <img src={gif} width={250} height={250} alt="" />
      )}
      <button className="bg-black text-white" onClick={() => fetchData()}>
        Generate
      </button>
    </div>
  );
};

export default Random;
