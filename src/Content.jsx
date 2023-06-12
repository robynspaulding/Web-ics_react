import axios from "axios";
import { useState, useEffect } from "react";
import { ComicsIndex } from "./ComicsIndex";
import { Login } from "./Login";
import { Signup } from "./Signup";

export function Content() {
  // const [comics, setComics] = useState([]);

  const handleIndexComics = () => {
    console.log("handleIndexComics");
    axios.get("http://localhost:3000/comics.json").then((response) => {
      console.log(response.date);
      setComics(response.date);
    });
  };

  const comics = [
    { id: 1, title: "Test", image: "https://i.redd.it/w3kr4m2fi3111.png" },
    { id: 2, title: "Test 2", image: "https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_960_720.png" },
  ];

  useEffect(handleIndexComics, []);

  return (
    <div>
      <h1>Welcome to Web-ics!</h1>
      <Signup />
      <Login />
      <ComicsIndex comics={comics} />
    </div>
  );
}
