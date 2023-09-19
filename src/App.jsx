import { Header } from './components/header';
import { allChar } from './fma-data';
import { topVoteArr, TopVoteChart } from './components/Top-votes';
import { FmCard } from './components/Fm-cards';
import './style.css';
import './components/Header.css';
import './components/Top-votes.css';
import './components/Fm-cards.css';

allChar[1].imageUrl =
  'https://static.wikia.nocookie.net/universe-of-smash-bros-lawl/images/1/19/Alphonse_Elric_Fullmetal_Alchemist.png';
allChar[3].imageUrl =
  'https://static.wikia.nocookie.net/villains/images/f/fd/20111222135943%21Greed.png';
allChar[5].imageUrl =
  'https://static.wikia.nocookie.net/fma/images/2/26/Riza-profile.png';
allChar[6].imageUrl =
  'https://static.wikia.nocookie.net/fullmetal-alchemist-database/images/9/94/SolfJKimbleeEp37.png';
allChar[7].imageUrl =
  'https://static.wikia.nocookie.net/fma/images/8/88/Marcoh.png';
allChar[8].imageUrl =
  'https://static.wikia.nocookie.net/thejusticeworld/images/8/85/800-by-600-366874-20090424144049.jpg';

function App() {
  allChar[0].votes = 94;
  allChar[2].name = 'Edward Elrich';
  return (
    <>
      <Header />
      <div className="votes-table">
        <h3>Top Characters</h3>
        <table className="pop-person-table">
          <thead>
            <tr className="head-row">
              <th className="person-name">Name</th>
              <th>Skillset</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody className="pop-person-data">
            {topVoteArr.map((fmPersonality, itemIndex) => {
              const adjustedIndex = itemIndex + 1;
              const isEven = adjustedIndex % 2 === 0;

              return (
                <TopVoteChart
                  key={fmPersonality.name}
                  fmPersonality={fmPersonality}
                  isEven={isEven}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="card-container">
        {allChar.map((charCard) => {
          return <FmCard key={charCard.name} charCard={charCard} />;
        })}
      </div>
    </>
  );
}
export default App;
