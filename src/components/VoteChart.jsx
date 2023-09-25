import { VoteChartRow } from './VoteChartRow';

function comparePeople(a, b) {
  if (a.votes !== b.votes) {
    return a.votes - b.votes;
  } else {
    return b.name.localeCompare(a.name);
  }
}

export function VoteChart(props) {
  const topVoteArr = props.characters
    .toSorted(comparePeople)
    .slice(-5)
    .reverse();

  const rows = topVoteArr.map((fmPersonality, itemIndex) => {
    const adjustedIndex = itemIndex + 1;
    const isEven = adjustedIndex % 2 === 0;

    return (
      <VoteChartRow
        key={fmPersonality.name}
        fmPersonality={fmPersonality}
        isEven={isEven}
      />
    );
  });

  return (
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
        <tbody className="pop-person-data">{rows}</tbody>
      </table>
    </div>
  );
}
