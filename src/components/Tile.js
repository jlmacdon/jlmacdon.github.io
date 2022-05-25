import * as React from "react"
import PropTypes from "prop-types"
import PreviewCompatibleImage from "../components/PreviewCompatibleImage"

export const Tile = ({ icon, name, description }) => {
  return (
    <div className="is-size-6">
      <div style={{ maxWidth: '120px', margin: '0 auto' }}>
        <PreviewCompatibleImage imageInfo={{ image: icon, alt: name }}/>
      </div>
      <h5>{name}</h5>
      <div>{description}</div>
    </div>
  )
}

Tile.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Tile;