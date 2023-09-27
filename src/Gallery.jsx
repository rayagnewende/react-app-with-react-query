import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useGlobalContext } from "./AppContext";
const url = `https://api.unsplash.com/search/photos?page=1&client_id=sRdperkDdHNHXTjNeZzs-sPpA8moQXgmT57CiVo4zHc&`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();

  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}query=${searchTerm}`);
      return result.data.results;
    },
  });

  if (response.isLoading) {
    return (
      <section className="container">
        <h2>Loading.........</h2>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className="image-container">
        <h2>there is an Error</h2>
      </section>
    );
  }

  if (response.data.length < 0) {
    return (
      <section className="image-container">
        <h2>there is an Error</h2>
      </section>
    );
  }

  return (
    <section className="image-container">
      {response.data.map((item) => {
        const url = item?.urls?.regular;
        return <img key={item.id} className="img" src={url} alt="image" />;
      })}
    </section>
  );
};

export default Gallery;
