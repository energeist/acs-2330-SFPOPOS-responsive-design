// src/POPOSDetails.js

import React from 'react';
import { useParams } from 'react-router';
import data from '../sfpopos-data.json';
import POPOSFeatureList from './POPOSFeatureList';
import './POPOSDetails.css';

function POPOSDetails(props) {
  const params = useParams();
  const { id } = params;// Location index
  const { images, title, address, desc, hours, features, geo } = data[id];
  return (
    <article className="POPOSDetails">
      <figure className="POPOSDetails__image">
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt={title} />
      </figure>
      <section className="POPOSDetails__info">
        <h2 className="POPOSDetails__title">{ title }</h2>
        <address><p className="POPOSDetails__address" role="contentinfo">{ address }</p></address>
        <p className="POPOSDetails__desc">{ desc }</p>
        <p className="POPOSDetails__hours" role="contentinfo">{ hours }</p>
        <POPOSFeatureList features={ features }/>
        <p className="POPOSDetails__geo"><em>lat: </em>{ geo.lat } <em>lon: </em>{ geo.lon }</p>
      </section>
    </article>
  )
}

export default POPOSDetails;