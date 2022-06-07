import React from 'react'
import PropTypes from 'prop-types'
import { TeamPageTemplate } from '../../templates/team-page'

const TeamPagePreview = ({ entry }) => {  
  return (
    <TeamPageTemplate
      title={entry.getIn(['data', 'title'])}
      secondary={entry.getIn(['data', 'secondary'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
      banner={entry.getIn(['data', 'banner'])}
      bios={entry.getIn(['data', 'bios'])}
    />
  )
}

TeamPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default TeamPagePreview
