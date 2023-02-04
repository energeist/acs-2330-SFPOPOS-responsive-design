// src/POPOSSpace.js
import './POPOSpace.css'
import { Link } from 'react-router-dom'

function POPOSSpace(props) {
  const { name, image, address, hours, id } = props;
  return (
    <div className='POPOSpace'>
      <Link to={`/details/${id}`}>
        <img src={`${process.env.PUBLIC_URL}/images/${image}`}     
          width="300"
          height="300"
          alt="50 Califonia St."
        />
      </Link>
      <h1>
        <Link to={`/details/${id}`}>
          {name}
        </Link>
      </h1>
      <div>{address}</div>
      <div className='hours'>{hours}</div>
    </div>
  )
}

export default POPOSSpace;