import React, { useState } from "react";

const AddAlbum = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const albums = props.data;
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: content,
      }),
      headers: {
         "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => albums.push(json));

      window.alert("Album added successfully at the bottom!");
      setTitle("");
      setContent("");
  };

  return (
    <div className="add-album">
      <form action="">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Title goes here"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          value={title}
          required
        />
        <hr />
        <label htmlFor="content">Content</label>
        <textarea
          placeholder="Say something about this..."
          id="content"
          onChange={(e) => setContent(e.target.value)}
          name="content"
          value={content}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default AddAlbum;
