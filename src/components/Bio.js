import * as React from "react"
import PropTypes from "prop-types"
import PreviewCompatibleImage from "../components/PreviewCompatibleImage"

export const Bio = ({ name, description, image, size }) => {
  return (
    <div  style={{ display: 'flex', marginBottom: '2em' }}>
      <div
        style={{
          minWidth: size === 'main' ? '240px' : '120px',
          display: "inline-block",
          marginRight: "1em"
        }}
      >
        <PreviewCompatibleImage imageInfo={{ image: image, alt: name }}/>
      </div>
      <div>
        {size === 'main' && <h4 className="has-text-weight-semibold is-size-4">{name}</h4>}
        {size === 'support' && <h5 className="has-text-weight-semibold is-size-5">{name}</h5>}
        <p>{description}</p>
      </div>
    </div>
  )
}

Bio.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  size: PropTypes.string.isRequired,
}

export default Bio;