import React, { useEffect } from "react";

const useFetch = () => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((response) => response.json())
      .then((data) => setLists(data))
      .catch((error) => console.error(error));
  }, []);
  return ;
};

export default useFetch;
