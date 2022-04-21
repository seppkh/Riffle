import SubCardWithStores from "./SubCardWithStores";

const SubCardsWithStores = () => {

  return (
  <>
    <div>
      <SubCardWithStores key="card1" title="card1" />

      <SubCardWithStores key="card2" title="card2" />

      <SubCardWithStores key="card3" title="card3" />
    </div>
  </>
  )
};

export default SubCardsWithStores;