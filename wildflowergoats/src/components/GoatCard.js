
function GoatCard({ goat }) {
  return (
    <div className="card">
      <img src={goat.img} alt={goat.name} />
      <h2>{goat.name}</h2>
      <p>{goat.origin}</p>
    </div>
  );
}

export default GoatCard;