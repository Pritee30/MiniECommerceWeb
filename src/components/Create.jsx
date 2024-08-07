import React, { useState } from "react";
import { useContext } from "react";
import { productContext } from "../Utils/Context";
import { nanoid } from "nanoid";
const Create = () => {
  const [products, setProducts] = useContext(productContext);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const addProductHandler = (e) => {
    e.preventDefault();
    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("No Field must be empty");
      return;
        }
    const product = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    setProducts([...products, product]);

    console.log(product);
  };

  return (
    <>
      <form
        onSubmit={addProductHandler}
        className=" flex flex-col items-center p-[5%] w-screen h-screen "
      >
        <h1 className=" w-1/2 mb-5 text-3xl ">Add New Product</h1>

        <input
          type="url"
          placeholder="Image Link"
          className="text-3xl bg-zinc-200 rounded-md p-3 w-1/2 mb-3"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />

        <input
          type="text"
          placeholder="title"
          className="text-3xl bg-zinc-200 rounded-md p-3 w-1/2 mb-3"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <div className="w-1/2 flex justify-between">
          <input
            type="text"
            placeholder="Category"
            className="text-1xl bg-zinc-200 rounded-md p-3 w-[48%] mb-3"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />

          <input
            type="number"
            placeholder="Price"
            className="text-1xl bg-zinc-200 rounded-md p-3 w-[48%] mb-3"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>

        <textarea
          className="text-3xl bg-zinc-200 rounded-md p-3 w-1/2 mb-3"
          rows=""
          placeholder="Enter Product Description Here..."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>

        <div className="w-1/2 ">
          <button
            className="  py-2 px-5 border rounded border-blue-300 text-blue-500"
            href="/create"
          >
            Add New Product
          </button>
        </div>
      </form>
    </>
  );
};

export default Create;
