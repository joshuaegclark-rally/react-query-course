import { useQuery } from 'react-query';
import IssuesList from "../components/IssuesList";
import LabelList from "../components/LabelList";

const url = '/api/issues';
function fetchIssues() {
  return fetch(url).then(res => res.json());
}

export default function Issues() {
  /**
   * @param data {{ assignee: any, comments: Array<string>, completedDate: any, createdBy: string, createdDate: string, dueDate: string, id: string, labels: Array<string>, number: number, status: string, title: string }}
   */
  const { data, isLoading, isError, error } = useQuery(
    ['issues'],
    fetchIssues,
  );
  console.log('data', data);

  return (
    <div>
      <main>
        <section>
          <h1>Issues</h1>
          {isLoading ? <p>Loading...</p> : <IssuesList issues={data} />}
        </section>
        <aside>
          <LabelList />
        </aside>
      </main>
    </div>
  );
}
