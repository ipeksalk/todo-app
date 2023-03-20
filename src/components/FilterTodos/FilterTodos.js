import { FiFilter } from 'react-icons/fi';
import FilterButton from './FilterButton';
import classes from './FilterTodos.module.css';

function FilterTodos() {
  return (
    <section className={classes.header}>
      <h3>TODOS</h3>
      <div>
        <FilterButton name='all'/>
        <FilterButton name='done'/>
        <FilterButton name='active'/>
        <span><FiFilter /></span>
      </div>
    </section>
  );
}

export default FilterTodos;
