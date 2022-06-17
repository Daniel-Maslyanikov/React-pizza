import React from 'react';
import { Categories, PizzaBlock, SortPopup, PizzaLoadingBlock } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzas } from '../redux/action/pizzas';

import { setCategory } from '../redux/action/filters';

const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

const SortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
	const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);

  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoryNames} />
        <SortPopup items={SortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded ? items.map((obj) => <PizzaBlock key={obj.id} isLoading={true} {...obj} />): Array(10).fill(<PizzaLoadingBlock />)}
      </div>
    </div>
  );
}

export default Home;
