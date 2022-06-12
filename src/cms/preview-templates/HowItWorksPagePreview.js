import React from 'react'
import PropTypes from 'prop-types'
import { HowItWorksPageTemplate } from '../../templates/how-it-works-page'

const HowItWorksPagePreview = ({ entry, getAsset }) => {
  return (
    <HowItWorksPageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn['data', 'subtitle']}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
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
