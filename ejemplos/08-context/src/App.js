import Todo from './Todo/Todo';
import Header from './Header/Header';
import { useTheme } from './ThemeContext';
import './App.css';
import Posts from './Posts/Posts';
import Products from './Products/Products';

function App() {
  const theme = useTheme()

  return (
      <div className={'App ' + theme}>
        <Header />
        <main>
          <Todo />
          <Posts />
          <Products />
        </main>
      </div>
  );
}

export default App;
