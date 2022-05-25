import React from 'react'
import PropTypes from 'prop-types'
import { VisionPageTemplate } from '../../templates/vision-page'

const VisionPagePreview = ({ entry, getAsset }) => {
  return (
    <VisionPageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn['data', 'subtitle']}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      process={entry.getIn(['data', 'process'])}
    />
  )
}

VisionPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default VisionPagePreview
