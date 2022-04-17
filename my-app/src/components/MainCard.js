const MainCard = (content) => {

  const mainCard = content.content;

  console.log("mainCard:", mainCard);

  return (
    <div>
      <p id='mainCardContent'>
        mainCard elements:<br></br> {mainCard.elements.join(", ")}
      </p>
    </div>
  )
}

export default MainCard;