import { format } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({ _id, title, summary, content, cover, createdAt, author }) {
    return (
        <div className="post">
            <div className="image">
                <Link to={`/post/${_id}`}>
                    <img src={'http://127.0.0.1:4000/' + cover} alt="" srcSet="" />
                </Link>

            </div>
            <div className="texts">

                <Link to={`/post/${_id}`}>

                    <h2 className='heading'>
                        {title}
                    </h2>
                </Link>
                <div className="info">
                    <a href="" className='author'>{author.username}</a>
                    <time>{format(new Date(createdAt), 'd MMM, yyyy HH:mm')}</time>
                </div>
                <p className='summary'>{summary}</p>
            </div>
        </div>
    );
};