const SubCard = (card) => {

  const subCard = card.content;

  return (
    <div>
      <p>
        card elements:<br></br> {subCard.elements.join(", ")}
    <br></br><br></br>
        {subCard.isMatch.toString()}
      </p>
    </div>
  )
}

export default SubCard;