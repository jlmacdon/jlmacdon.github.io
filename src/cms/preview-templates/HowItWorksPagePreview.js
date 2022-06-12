import React from 'react'
import PropTypes from 'prop-types'
import { HowItWorksPageTemplate } from '../../templates/how-it-works-page'

const HowItWorksPagePreview = ({ entry, getAsset }) => {
  return (
    <HowItWorksPageTemplate
      title={entry.getIn(['data', 'title'])}
      image={getAsset(entry.getIn(['data', 'image']))}
      mainpitch={entry.getIn(['data', 'mainpitch'])}
      process={entry.getIn(['data', 'process'])}
    />
  )
}

HowItWorksPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HowItWorksPagePreview
