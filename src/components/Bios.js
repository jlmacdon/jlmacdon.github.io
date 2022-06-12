import * as React from "react"
import PropTypes from "prop-types"
import PreviewCompatibleImage from "./PreviewCompatibleImage"

export const Bios = ({ bios, size }) => {
  return (
    <div className={`columns is-centered ${size === 'large' ? 'is-multiline has-text-centered' : 'bio-content-column'}`}>
      {bios.map((bio) => {
        const { name, description, image } = bio
        return (
          <div className={`bio-content-spacing ${size === 'large' ? 'column is-6 bio-content-border' : 'bio-content-row'}`}>
            <div className={size === 'large' ? 'bio-content-large' : 'bio-content-small'}>
              <PreviewCompatibleImage imageInfo={{ image: image, alt: name }} radius={size === 'large' ? '8px' : '50%'} />
            </div>
            <div>
              <div className="med-text">{name}</div>
              {description.split('>-').map(line => <div className="small-text">{line}</div>)}
            </div>
          </div>
        )
      })}
    </div>
  )
}

Bios.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  size: PropTypes.string.isRequired,
}

export default Bios;