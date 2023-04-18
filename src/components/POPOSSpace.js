// src/POPOSSpace.js
import './POPOSSpace.css';
import { Link } from 'react-router-dom';

function POPOSSpace(props) {
  const { name, image, address, hours, id } = props;
  return (
    <div className="POPOSSpace" role="article">
      <Link to={`/details/${id}`}>
        <img 
          src={`${process.env.PUBLIC_URL}/images/${image}`}     
          alt={`clickable view of ${name}`}
          role="link"
          height="351"
          width="351"
        />
      </Link>
      <h2>
        <Link 
          className="POPOSSpace__title"
          to={`/details/${id}`}
          role="heading"
          aria-level="2"
        >
          {name}
        </Link>
      </h2>
      <section className="POPOSSpace__info">
        <section className="address">
          <address aria-label="Address">
            {address}
          </address>
        </section>
        <section className="hours">
          <time aria-label="Hours of operation">{hours}</time>
        </section>
      </section>
    </div>
  )
}

export default POPOSSpace;