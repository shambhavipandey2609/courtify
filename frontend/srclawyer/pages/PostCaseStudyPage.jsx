// import React, { useState } from "react";
// import axios from "axios";
// const PostCaseStudyPage = () => {
//   const [title, setTitle] = useState("");
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Title:", title);
//     console.log("File:", file);
//     // Handle form submission (e.g., send data to backend)
//   };

//   return (
//     <div className="container">
//       <h2>Post Case Study</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Case Study Title:</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Upload Case Study:</label>
//           <input type="file" onChange={handleFileChange} required />
//         </div>
//         <button type="submit">Post</button>
//       </form>
//     </div>
//   );
// };

// export default PostCaseStudyPage;

import React, { useState } from "react";
import axios from "axios";
import "./PostCaseStudyPage.css";

const PostCaseStudyPage = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    try {
      await axios.post(
        "http://localhost:4001/api/case-studies/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert("Case study uploaded successfully!");
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div className="container shadow-lg p-4 rounded bg-white">
      <h2 className="text-center text-primary">Post Case Study</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Case Study Title:</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Upload Case Study:</label>
          <input
            type="file"
            className="form-control"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Post
        </button>
      </form>
    </div>
  );
};

export default PostCaseStudyPage;
