import useStoreCards from "../store/cardStore";

const MainCardWithStores = () => {

  const mainCard = useStoreCards(state => state.mainCard);

  return (
  <>
    <div>
      <p id='mainCardContent'>
        mainCard elements:<br></br> {mainCard.elements.join(", ")}
      </p>
    </div>
  </>
  )
}

export default MainCardWithStores;