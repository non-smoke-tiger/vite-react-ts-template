import { Link } from 'react-router-dom';
import vpro from '../assets/vpro.svg';

function NotFound() {
  return (
    <div className="not-found-page">
      <div>
        <img src={vpro} className="logo-small" alt="vpro" />
        <h1>Page Not Found</h1>
        <div>
          <Link to="/">Back to home page</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
