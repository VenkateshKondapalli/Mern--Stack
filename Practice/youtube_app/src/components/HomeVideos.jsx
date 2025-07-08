import { useEffect } from "react";

const HomeVideos = () => {
  const getData = async () => {
    const url =
      "https://youtube138.p.rapidapi.com/auto-complete/?q=desp&hl=en&gl=US";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "acb70a95c5msh7ed548c7a2d561ep17c55cjsn250cee316d40",
        "x-rapidapi-host": "youtube138.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log("error is coming :", err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return;
};

export { HomeVideos };
