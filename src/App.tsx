import { Stars } from './components/Stars';
import './App.css';

function App() {
  return (
    <div>
      <h1>Рейтинг фильма</h1>
      <Stars count={4} />
    </div>
  );
}

export default App;