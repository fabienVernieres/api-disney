import React from "react";

const Loader = ({ loader }) => {
  return loader ? (
    <div className="text-center py-5">
      <h2>Chargement en cours ...</h2>
    </div>
  ) : null;
};

export default Loader;
