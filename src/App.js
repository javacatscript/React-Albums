import { useEffect, useState } from "react";
import Album from "./components/Album";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddAlbum from "./components/AddAlbum";
import EditAlbum from "./components/EditAlbum";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((response) => setData(response));
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Album data={data} />} />
          <Route path="/add-album" element={<AddAlbum data={data}/>} />
          <Route path="/edit-album" element={<EditAlbum data={data}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
