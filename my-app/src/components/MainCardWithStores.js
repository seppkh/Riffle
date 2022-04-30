import useStoreSlices from "../store/rootSliceStore";

const MainCardWithStores = () => {

  const mainCard = useStoreSlices(state => state.mainCard);

  return (
  <>
    <div>
      <h2>
        <p>{mainCard.elements.join(", ")}</p>
      </h2>
    </div>
  </>
  )
}

export default MainCardWithStores;