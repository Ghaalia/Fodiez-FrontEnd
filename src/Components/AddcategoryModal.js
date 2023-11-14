import React from "react";

const AddcategoryModal = () => {
<<<<<<< HEAD
  return <div></div>;
=======
  const [name, setName] = useState("");
  const [Image, setImage] = useState("");
  const handle = () => {
    e.preventDefault();
  };
  return (
    <>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text ">Add Category Name:</span>
        </label>
        {/* <input onChange=(e) => {
            setName(e.target.value)}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs flex border border-round "
        /> */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-xs"
        />
        <input o type="submit" value="Submit" class="btn" />
        //{" "}
      </div>
    </>
  );
>>>>>>> 86c2d9b59a45605d829d85f6148ac39fad1bd8d6
};

export default AddcategoryModal;
