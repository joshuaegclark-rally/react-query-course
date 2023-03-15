import {GoComment, GoIssueClosed, GoIssueOpened} from 'react-icons/all';
import {Link} from 'react-router-dom';
import {relativeDate} from '../helpers/relativeDate';

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
            <span key={label} className={`label red`}>
              {label}
            </span>
          ))}
        </span>
        <small>
          #{number} opened {relativeDate(createdDate)} by {createdBy}
        </small>
      </div>
      {assignee ? <div>{assignee}</div> : null}
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