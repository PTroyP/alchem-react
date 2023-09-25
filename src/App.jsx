import { Header } from './components/header';
import { allChar } from './fma-data';
import './style.css';
import './components/Header.css';
import './components/Top-votes.css';
import './components/Fm-cards.css';
import { VoteChart } from './components/VoteChart';
import { AllCharCards } from './components/AllCharCards';

function App() {
  return (
    <>
      <Header />
      <VoteChart characters={allChar} />
      <AllCharCards allChar={allChar} />
    </>
  );
}
export default App;
