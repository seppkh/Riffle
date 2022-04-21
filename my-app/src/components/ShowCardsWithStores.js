import MainCardWithStores from './MainCardWithStores';
import SubCardsWithStores from './SubCardsWithStores';

const ShowCardsWithStores = () => {

  return (
  <>
    <div>
      <MainCardWithStores key="mainCard" title="mainCard component" />

      <SubCardsWithStores key="subCards" title="subCards component" />
    </div>
  </>
  )
}

export default ShowCardsWithStores;