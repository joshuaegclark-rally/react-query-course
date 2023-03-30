import useLabelsData from '../helpers/useLabelsData';

export default function Label(props) {
  const { label } = props;
  const labelsQuery = useLabelsData();

  if (labelsQuery.isLoading) {
    return null;
  }

  const labelObj = labelsQuery.data.find(queryLabel => queryLabel.id === label);
  if (!labelObj) {
    return null;
  }

  return (
    <span className={`label ${labelObj.color}`}>
      {labelObj.name}
    </span>
  );
}