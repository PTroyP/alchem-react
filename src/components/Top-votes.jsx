import { allChar } from '../fma-data';

allChar[0].votes = 94;
allChar[2].votes = 100;
allChar[4].votes = 93;

function comparePeople(a, b) {
  if (a.votes !== b.votes) {
    return a.votes - b.votes;
  } else {
    return b.name.localeCompare(a.name);
  }
}

export const topVoteArr = allChar.toSorted(comparePeople).slice(-5).reverse();

topVoteArr[1] = {
  ...topVoteArr[1],
  name: 'Edward Elrich "Full Metal Alchemist"',
  skillset: 'Alchemy, Human Transmutation',
};
topVoteArr[2] = {
  ...topVoteArr[2],
  name: 'Hawkeye',
  skillset: 'Sniper, Loyal AF',
};
topVoteArr[3] = {
  ...topVoteArr[3],
  name: 'Mj. Armstrong',
  skillset: 'Alchemy, Muscles',
};
topVoteArr[4] = {
  ...topVoteArr[4],
  name: 'Nina',
  skillset: 'Loving dogs, being adorable',
};

export function TopVoteChart(props) {
  const { fmPersonality, isEven } = props;
  const { name, skillset, votes } = fmPersonality;

  return (
    <tr className={`character-data ${isEven ? 'trnsp-bkgrd' : 'gray-bkgrd'}`}>
      {isEven && (
        <>
          <td>{name}</td>
          <td>{skillset}</td>
          <td>{votes}</td>
        </>
      )}
      {!isEven && (
        <>
          <td>{name}</td>
          <td>{skillset}</td>
          <td>{votes}</td>
        </>
      )}
    </tr>
  );
}
