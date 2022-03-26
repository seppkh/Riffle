import Game from "./Game"; 

const CardList = ({ subcards, title }) => {

  return ( 
    <div className="subcard-list">
      <h2>{ title }</h2>
      {subcards.map((element, index) => (
        <div key={index} className='' onClick=''>
          <p>card{index+1} elements: {element.id.elements.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}

export default CardList;