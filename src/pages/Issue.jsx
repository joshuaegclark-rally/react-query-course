import IssueDetails from "../components/IssueDetails";

export default function Issue(props) {
  const { issue } = props;
  return <IssueDetails issue={issue} />;
}
