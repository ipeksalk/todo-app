import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import classes from './Header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <div>
          <BsFillRocketTakeoffFill size='30px' />
        </div>
        <h1>Todo App</h1>
      </div>
    </header>
  );
}

export default Header;