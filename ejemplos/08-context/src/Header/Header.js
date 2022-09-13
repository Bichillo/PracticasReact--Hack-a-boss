import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Modal from '../Modal/Modal';
import { useUser } from '../UserContext';
import ThemeSelector from './ThemeSelector'
import Cart from './Cart';

function Header() {
  const user = useUser()
  return (
    <header>
      <span>MyApp</span>
      <ThemeSelector />
      <Cart />
      <span className="user-section">
        {!user &&
          <>
            <Modal label="Iniciar sesión">
              <Login  />
            </Modal>
            <Modal label="Registro">
              <Signup />
            </Modal>
          </>
        }
        {user &&
          <span>👤{user.username}</span>
        }
      </span>
    </header>
  );
}

export default Header;
