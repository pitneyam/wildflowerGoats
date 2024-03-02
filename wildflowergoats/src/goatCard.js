function goatCard(goat) {
  return (
    <div className="goat-card">
      <img src={goat.image} alt={goat.name} />
      <h2>{goat.name}</h2>
      <p>{goat.description}</p>
    </div>
  );
}

export default goatCard;