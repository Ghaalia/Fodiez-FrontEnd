import React from "react";

const CategoryModal = () => {
  return (
    <div>
      <head>
        <title>Create New Category</title>
      </head>

      <h1>Create a New Category</h1>

      <form
        action="/submit_category"
        method="post"
        enctype="multipart/form-data"
      ></form>

      <label for="categoryName">Category Name:</label>
      <input type="text" id="categoryName" name="categoryName" required />

      <label for="imageUpload">Upload Image:</label>
      <input
        type="file"
        id="imageUpload"
        name="imageUpload"
        accept="image/*"
        required
      />

      <input type="submit" value="Create Category" />
    </div>
  );
};

export default CategoryModal;
