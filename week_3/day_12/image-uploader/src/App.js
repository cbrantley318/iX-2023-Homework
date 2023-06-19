import { React, useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import FileService from "./services/file-service";
import ImageService from "./services/image-service";
import { Image } from "./models/Image";

function App() {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    blurb();
  },[])

  async function blurb() {
    const bleh = await ImageService.fetchImages();
    console.log(images);

    setTimeout(() => {
      setImages(...images, bleh);
    }, 5);
  }

  async function onFormSubmit(e) {
    e.preventDefault();

    try {
      // upload the file
      const downloadUrl = await FileService.uploadImage(file, (progress) => {
        console.log("Upload progress: ", progress);
      });
      console.log(downloadUrl);

      // save Movie to firebase firestore
      const temp = new Image(null, name, downloadUrl);
      console.log("Hello");
      console.log(temp);
      let image = await ImageService.createImage(temp);
      console.log(image);

      //add movie to movies list
      setImages([...images, image]);
    } catch (err) {
      console.log(err);
    }
  }

  function onFileSelected(e) {
    if (e.target.files.length) {
      setFile(e.target.files[0]);
    } else {
      setFile(null);
    }
  }

  return (
    <div className="container p-3 mt-4 text-center">
      <div className="card card-body">
        <form onSubmit={onFormSubmit}>
          <div className="mb-3">
            <label className="form-label">Upload Image</label>
            <input
              onChange={onFileSelected}
              type="file"
              className="form-control"
              multiple
            ></input>
          </div>

          <div className="mb-3">
            <label className="form-label">Image Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter name"
            ></input>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary px-5">
              Upload Image
            </button>
          </div>
        </form>
      </div>

      <div>
        <table className="table table-bordered mt-5">
          <thead>
            <tr>
              <th className="col">Image Name</th>
              <th className="col">Image</th>
            </tr>
          </thead>

          <tbody>
            {images.map((image) => {
              return (
                <tr key={image.id}>
                  <td>{image.name}</td>
                  <td>
                    <img src={image.url} className="w-50"></img>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
