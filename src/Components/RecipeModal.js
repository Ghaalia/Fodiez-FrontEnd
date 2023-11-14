import React from "react";

const RecipeModal = () => {
  return (
    <>
      <form action="/submit_recipe" method="post" enctype="multipart/form-data">
        <h2>Create New Recipe</h2>

        <label for="image">Upload Image:</label>
        <input type="file" id="image" name="image" accept="image/*" required />

        <label for="category">Category Type:</label>
        <input type="text" id="categoryName" name="categoryName" required />

        <label for="recipeName">Recipe Name:</label>
        <input type="text" id="recipeName" name="recipeName" required />

        <label for="cookingTime">Cooking Time:</label>
        <input type="text" id="cookingTime" name="cookingTime" required />
        <select id="category" name="category" required>
          <option value="minutes">minutes</option>
          <option value="hours">hours</option>
        </select>

        <label for="ingredients">Ingredients:</label>
        <textarea
          id="ingredients"
          name="ingredients"
          rows="4"
          required
        ></textarea>

        <label for="description">Description:</label>
        <textarea
          id="description"
          name="description"
          rows="4"
          required
        ></textarea>

        <button type="submit">Create Recipe</button>
      </form>
    </>
  );
};

export default RecipeModal;
