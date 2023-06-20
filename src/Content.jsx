import axios from "axios";
import { useState, useEffect } from "react";
import { ComicsIndex } from "./ComicsIndex";
import { ComicsNew } from "./ComicsNew";
import { Login } from "./Login";
import { Signup } from "./Signup";

export function Content() {
  const [comics, setComics] = useState([]);

  const handleIndexComics = () => {
    console.log("handleIndexComics");
    axios.get("http://localhost:3000/comics.json").then((response) => {
      console.log(response.data);
      setComics(response.data);
    });
  };

  const handleCreateComic = (params) => {
    console.log("handleCreate", params);
    axios.post("http://localhost:3000/comics.json", params).then((response) => {
      setComics([...comics, response.data]);
    });
  };

  useEffect(handleIndexComics, []);

  return (
    <div>
      <h1>Welcome to Web-ics!</h1>
      <Signup />
      <Login />
      <ComicsNew onCreateComic={handleCreateComic} />
      <ComicsIndex comics={comics} />
    </div>
  );
}
