
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import useGif from "../hooks/useGif";
const Tag = () => {
  // const [gif,setGif] = useState('')
  
  //  const fetchData = async() => {
    //   const {data} = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=xBXSBkKjAcya2VfFN0KuqBsiejkGBBzn&tag=${tag}`)
    //   const imageResource = data.data.images.downsized_large.url;
    //   setGif(imageResource);
    // };
    
    // useEffect(()=>{
      //   fetchData();
      // },[])
      const [tag, setTag] = useState("");
      const { gif, loading, fetchData } = useGif(tag);
  return (
    <div className="flex flex-col h-[450px] bg-green-700 items-center">
      <p>Random gif generator</p>
      {loading ? (
        <Loading />
      ) : (
        <img src={gif} width={250} height={250} alt="" />
      )}
      <input
        type="text"
        onChange={(event) => setTag(event.target.value)}
        value={tag}
        className="w-[300px] h-[50px]"
      />
      <button
        onClick={fetchData(tag)}
        className="bg-yellow-500 w-[100px] h-[40px] text-black justify-"
      >
        Gerenate
      </button>
    </div>
  );
};

export default Tag;
