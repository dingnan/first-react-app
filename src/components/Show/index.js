import React from "react";
import Loader from "../../components/Loader";

const Show = (props) => {
  const { detail } = props;
  return (
    <div>
      {detail === null && <Loader />}
      {detail !== null && (
        <div>
          <p>{detail.name}</p>
          <p>Premiered - {detail.premiered}</p>
          <p>Rating - {detail.rating.average}</p>
          <p>Episodes - {detail._embedded.episodes.length}</p>
          <p>
            <img alt="Show" src={detail.image.medium} />
          </p>
        </div>
      )}
    </div>
  );
};

export default Show;
