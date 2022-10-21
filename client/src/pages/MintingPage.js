import { useState } from "react";
import '../asset/mintingPage.css'
import { create } from 'ipfs-http-client';
import { Buffer } from 'buffer';

const projectId = "2GP6hmvIjDCIGLy3xIv8FEtX6gr"
const projectSecret = "54c311eb5f5120891becb6a30380a04b"
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

 const client = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
      authorization: auth
    }
  })


function MintingPage() {
  const [imgData,setImgData] = useState();
  const [imageSrc, setImageSrc] = useState("");
  const [files, setFiles] = useState('');
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // todo : 버튼 클릭시, nft발행
  const handleSubmit = (e) => {
    e.preventDefault();

    // axios.post("http://localhost:8080/upload", img)
  };

  const encodeFileToBase64 = (e) => {
    const reader = new FileReader();
    const img = new FormData();

    reader.readAsDataURL(e.target.files[0]);

    new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);

        resolve();
      };
    });
    setFiles(e.target.files[0]);
    img.append("file", e.target.files[0]);
    setImgData(img)
    console.log(img);
  };

  const minting = async() => {
    const imgUrl = await client.add(files);
    console.log(imgUrl);
  }


  return (
    <div id="main">
      <div className="mintPage_container">
        <div className="mintPage">
          <h1 className="mintPage_head">Create New Item</h1>
        </div>
        <form className="mintPage_form" onSubmit={handleSubmit}>
          <p className="mintPage_form_1">
            <span style={{ color: "rgb(235, 87, 87)" }}>*</span> Required fields
          </p>
          <div className="mintPage_form_file">
            <div className="mintPage_form_file_info">
              <p className="mintPage_form_file_info_1">
                Image, Video, Audio, or 3D Model
                <span style={{ color: "rgb(235, 87, 87)", fontSize: "20px" }}>
                  *
                </span>
              </p>
              <p className="mintPage_form_file_info_2">
                File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
                OGG, GLB, GLTF. Max size: 100 MB
              </p>
            </div>
            <div className="mintPage_form_file_input">
              <input
                id="media"
                name="media"
                type="file"
                onChange={(e) => encodeFileToBase64(e)}
              />
              <div className="preview">
                {imageSrc && <img src={imageSrc} alt="preview-img" />}
              </div>
            </div>
          </div>
          <div className="mintPage_form_name">
            <p>
              Name{" "}
              <span style={{ color: "rgb(235, 87, 87)", fontSize: "20px" }}>
                *
              </span>
            </p>
            <div className="mintPage_form_name_input">
              <input
                id="name"
                name="name"
                className="mintPage_form_name_input_1"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mintPage_form_description">
            <div className="mintPage_form_description_info">
              <p className="mintPage_form_description_1">
                Description{" "}
                <span style={{ color: "rgb(235, 87, 87)", fontSize: "20px" }}>
                  *
                </span>
              </p>
              <p className="mintPage_form_description_2">
                The description will be included on the item's detail page
                underneath its image. Markdown syntax is supported.
              </p>
              <textarea
                id="description"
                name="description"
                className="mintPage_form_description_textarea"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mintPage_submit">
            <div>
              <button className="mintPage_submit_button" type="submit" onClick={minting}>
                Create
              </button>
            </div>
          </div>
        </form>
        <div>name : {formData.name}</div>
        <div>description : {formData.description}</div>
      </div>
    </div>
  );
}

export default MintingPage;
