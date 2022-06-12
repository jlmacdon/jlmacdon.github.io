import * as React from "react"
import PropTypes from "prop-types"
import PreviewCompatibleImage from "../components/PreviewCompatibleImage"

export const Tile = ({ icon, name, description }) => {
  return (
    <div className="tile-content">
      <div className="feature-img">
        <PreviewCompatibleImage imageInfo={{ image: icon, alt: name }}/>
      </div>
      <h2>{name}</h2>
      <div className="med-text process-text">{description.split('>-').map(line => <div>{line}</div>)}</div>
    </div>
  )
}

Tile.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Tile;