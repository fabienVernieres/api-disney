const Card = ({ character }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="card h-100">
        <img
          className="card-img-top"
          src={character.imageUrl}
          alt={"image" + character.name}
        />
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
