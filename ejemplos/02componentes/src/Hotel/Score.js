function Score({ value }) {
  return (
    <div className="score">
      {value >= 1 ? '★' : '☆'}
      {value >= 2 ? '★' : '☆'}
      {value >= 3 ? '★' : '☆'}
      {value >= 4 ? '★' : '☆'}
      {value >= 5 ? '★' : '☆'}
    </div>
  )
}

export default Score
