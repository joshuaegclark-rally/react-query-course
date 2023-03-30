import {useQuery} from 'react-query';
import { Link } from "react-router-dom";
import { GoIssueOpened, GoIssueClosed, GoComment, } from 'react-icons/all';
import {relativeDate} from '../helpers/relativeDate';
import IssueListItem from './IssueListItem';

function fetchIssues() {
  return fetch('/api/issues').then(res => res.json());
}

const useIssues = () => {
  /**
   * @param data {{ assignee: any, comments: Array<string>, completedDate: any, createdBy: string, createdDate: string, dueDate: string, id: string, labels: Array<string>, number: number, status: string, title: string }}
   */
  const { data, isLoading, isError, error } = useQuery(
    ['issues'],
    fetchIssues,
  );

  return { data, isLoading, isError, error };
};

export default function IssuesList(props) {
  const issuesQuery = useIssues();

  return (
    <div>
      <h2>Issues List</h2>
      {issuesQuery.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="issues-list">
          {issuesQuery.data.map((issue, index) => {
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
      )}
    </div>
  );
}
