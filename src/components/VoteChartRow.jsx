export function VoteChartRow(props) {
  const { fmPersonality, isEven } = props;
  const { name, skillset, votes } = fmPersonality;

  return (
    <tr className={`character-data ${isEven ? 'trnsp-bkgrd' : 'gray-bkgrd'}`}>
      <>
        <td>{name}</td>
        <td>{skillset}</td>
        <td>{votes}</td>
      </>
    </tr>
  );
}
