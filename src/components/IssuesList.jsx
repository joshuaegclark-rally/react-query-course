import { Link } from "react-router-dom";
import { GoIssueOpened, GoIssueClosed, GoComment, } from 'react-icons/all';
import {relativeDate} from '../helpers/relativeDate';
import IssueListItem from './IssueListItem';

export default function IssuesList(props) {
  const { issues } = props;

  return (
    <div>
      <h2>Issues List</h2>
      <ul className="issues-list">
        {issues.map((issue, index) => {
          const {
            assignee,
            comments,
            createdBy,
            createdDate,
            labels,
            number,
            status,
            title,
          } = issue;
          return (
            <IssueListItem
              key={`issue-${index}-${title}`}
              assignee={assignee}
              comments={comments}
              createdBy={createdBy}
              createdDate={createdDate}
              labels={labels}
              number={number}
              status={status}
              title={title}
            />
          );
        })}
      </ul>
    </div>
  );
}
