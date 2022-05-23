import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        mainpitch={data.mainpitch || {}}
        benefits={data.benefits || { blurbs: [] }}
        testimonials={data.testimonials || { reviews: [] }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}


export default IndexPagePreview
