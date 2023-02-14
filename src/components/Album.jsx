import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

const Album = (props) => {
  
  const [updatedAlbum, setUpdatedAlbum] = useState ([]);

  useEffect(() => setUpdatedAlbum(props.data), [props.data])

  // function to perform album deletion 

  const handleDelete = async (id) => {
    console.log("DELETED", id);
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
    .then(res => {
      if(res.status !== 200){
        return
      }else {
        setUpdatedAlbum(updatedAlbum.filter(album => {
          return album.id !== id;
        }))
      }
      alert("Album deleted successfully!");
    })
    .catch(err => console.log("ERROR: ", err))
  };

  console.log(updatedAlbum);

  // saving data to local storage so we can display it on the edit-album page as prefilled data

  const setToLocalStorage = (id, title, content) => {
    localStorage.setItem("id", id)
    localStorage.setItem("title", title);

    if (content === undefined){
      localStorage.setItem("content", "");
    } else {
      localStorage.setItem("content", content);
    }
    
  }

  return (
    <div className="container">
      {updatedAlbum && updatedAlbum.map((album) => {
        return (
          <div className="card" key={uuid()}>
            <div className="card-info">
              <h2>Album {album.id}</h2>
              <h4>{album.title}</h4>
              <p>{album.body}</p>
            </div>
            <div className="btns">
              <Link to="/edit-album"><button onClick={() => setToLocalStorage(album.id, album.title, album.body)}>Edit</button> </Link>
              <button onClick={() => handleDelete(album.id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Album;
