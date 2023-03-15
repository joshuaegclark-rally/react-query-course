import { useParams } from "react-router-dom";

export default function IssueDetails(props) {
  const { issue } = props;
  const { number } = useParams();

  return (
    <div>
      <h1>
        Issue {number}
      </h1>

    </div>
  );
}
