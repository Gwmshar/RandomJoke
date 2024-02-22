import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});

  const getData = () => {
    axios.get("https://v2.jokeapi.dev/joke/Any").then((res) => {
      setData(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const handleButton = () => {
    getData();
  };

  return (
    <div className="min-h-screen bg-[#25453C]">
      <div className="min-h-28 flex items-center justify-center">
        <h1 className="text-2xl font-bold text-white">Random Jokes</h1>
      </div>
      <div className="min-h-96 bg-emerald-400 max-w-2xl mx-auto">
        <p className="p-5">{data && data.setup}</p>
        <p className="p-5">{data && data.delivery}</p>
      </div>
      <div className="flex justify-center mt-5">
        <button
          className="bg-[#D9D9D9] px-16 py-4 rounded-md text-xl"
          onClick={handleButton}
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default App;
