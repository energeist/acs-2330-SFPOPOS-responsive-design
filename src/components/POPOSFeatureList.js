import React from 'react'
import POPOSFeature from './POPOSFeature'
import './POPOSFeatureList.css'

function POPOSFeatureList(props) {
	const icons = props.features.map((feature) => {
    return <POPOSFeature key={feature} name={feature} />
  })
	return <figure className="POPOSFeatureList">{icons}</figure>
}

export default POPOSFeatureList