// ADDING COMPONENTS

import Player from "./Components/Player";
import Song from "./Components/Song";
// IMPORT STYLES
import "./styles/app.scss";
// Import util

import data from "./Components/util";
import { useState } from "react";

function App() {
  // STATE
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
    </div>
  );
}

export default App;
