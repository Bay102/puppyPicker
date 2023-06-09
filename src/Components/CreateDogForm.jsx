import { useState } from 'react';
import { dogPictures } from '../assets/dog-pictures';

export const CreateDogForm = ({ addDog, refreshDogs }) => {
  const [selectedImage, setSelectedImage] = useState(dogPictures.BlueHeeler);
  const [dogName, setDogName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <form
      action=""
      id="create-dog-form"
      onSubmit={(e) => {
        e.preventDefault();
        addDog(dogName, selectedImage, description);
        setDogName('');
        setDescription('');
        setSelectedImage(dogPictures.BlueHeeler);
        refreshDogs();
      }}
    >
      <h4>Create a New Dog</h4>
      <label htmlFor="name">Dog Name</label>
      <input
        type="text"
        value={dogName}
        onChange={(e) => setDogName(e.target.value)}
      />
      <label htmlFor="description">Dog Description</label>
      <textarea
        value={description}
        name=""
        id=""
        cols="80"
        rows="10"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <label htmlFor="picture">Select an Image</label>
      <select
      value={selectedImage}
        id=""
        onChange={(e) => {
          setSelectedImage(e.target.value);
        }}
      >
        {Object.entries(dogPictures).map(([label, pictureValue]) => {
          return (
            <option key={label} value={pictureValue}>
              {label}
            </option>
          );
        })}
      </select>
      <input type="submit" value="submit" />
    </form>
  );
};
