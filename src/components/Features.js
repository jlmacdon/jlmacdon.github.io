import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline has-text-centered is-centered">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-6 feature-grid padding-offset">
          <div className="has-text-centered">
            <div className="feature-img">
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <div className="med-text">{item.text}</div>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
