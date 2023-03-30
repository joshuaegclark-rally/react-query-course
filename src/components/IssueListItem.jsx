import {GoComment, GoIssueClosed, GoIssueOpened} from 'react-icons/all';
import {Link} from 'react-router-dom';
import {relativeDate} from '../helpers/relativeDate';
import useUserData from '../helpers/useUserData';
import Label from './Label';

export default function IssueListItem(props) {
  const {
    assignee,
    comments,
    createdBy,
    createdDate,
    labels,
    number,
    title,
  } = props;

  const assigneeQuery = useUserData(assignee);
  const createdByQuery = useUserData(createdBy);

  return (
    <li>
      {['done', 'cancelled'].includes(status) ? (
        <GoIssueClosed style={{color: 'red'}}/>
      ) : (
        <GoIssueOpened style={{color: 'green'}}/>
      )}
      <div className="issue-content">
        <span>
          <Link to="/issue/1">
            {title}
          </Link>
          {labels.map(label => (
            <Label key={label} label={label} className={`label red`}>
              {label}
            </Label>
          ))}
        </span>
        <small>
          #{number} opened {relativeDate(createdDate)} {createdByQuery.isSuccess ? `by ${createdByQuery.data.name}` : null}
        </small>
      </div>
      {assigneeQuery.isSuccess && assigneeQuery.data ? (
        <img src={assigneeQuery.isSuccess ? assigneeQuery.data.profilePictureUrl : ""} className="assigned-to" alt={`Assigned to ${assigneeQuery.isSuccess ? assigneeQuery.data.name : 'avatar'}`} />
      ) : null}
      <span className="comment-count">
        {comments.length > 0 ? (
          <>
            <GoComment/>
            {comments.length}
          </>
        ) : null}
      </span>
    </li>
  );
}