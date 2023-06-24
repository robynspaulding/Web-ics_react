import axios from "axios";
import { useState, useEffect } from "react";
import { ComicsIndex } from "./ComicsIndex";
import { ComicsNew } from "./ComicsNew";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { Modal } from "./Modal";
import { ComicsShow } from "./ComicsShow";

export function Content() {
  const [comics, setComics] = useState([]);
  const [isComicShowVisible, setIsComicShowVisible] = useState(false);
  const [currentComic, setCurrentComic] = useState({});

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

  const handleShowComic = (comic) => {
    console.log("handleShowComic", comic);
    setIsComicShowVisible(true);
    setCurrentComic(comic);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsComicShowVisible(false);
  };

  useEffect(handleIndexComics, []);

  return (
    <div>
      <h1>Welcome to Web-ics!</h1>
      <Signup />
      <Login />
      <ComicsNew onCreateComic={handleCreateComic} />
      <ComicsIndex comics={comics} onShowComic={handleShowComic} />
      <Modal show={isComicShowVisible} onClose={handleClose}>
        <ComicsShow comic={currentComic} />
      </Modal>
    </div>
  );
}
