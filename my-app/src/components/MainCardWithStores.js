import useStoreSlices from "../store/rootSliceStore";

const MainCardWithStores = () => {

  const mainCard = useStoreSlices(state => state.mainCard);

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