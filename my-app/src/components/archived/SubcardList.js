// import { onCardClickHandler, toggleActiveStyles } from "./Game"; 
// import { onCardClickHandler, toggleActiveStyles } from "../utils/cardSelectFunctions";

const CardList = ({ subcards, title, toggleActiveStyles, onCardClickHandler }) => {

  function toggleActiveStyles (toggleActiveStyles) {

    toggleActiveStyles();
  };

  return ( 
    <div>
      <h3>{ title }</h3>
      <div className="subcard-list">
        {subcards.map((element, index) => (
          <div key={index} className={toggleActiveStyles(element)} onClick={() => onCardClickHandler(element)}>
            <p>
              card{index+1} elements:<br></br> {element.elements.join(", ")}
           <br></br><br></br>
              {element.isMatch.toString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;