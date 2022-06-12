import * as React from "react";
import PropTypes from "prop-types";

const Testimonials = ({ testimonials }) => {
  return (
  <div className="columns is-multiline p-0">
    {testimonials.map(({ author, description, quote }) => (
        <div
          className="column is-5 is-offset-1 is-full-tablet padding-unset"
          key={author}
        >
          <div className="med-text">
            <div>{quote}</div>
            <div> – {author}</div>
            <div>{description}</div>
          </div>
        </div>
    ))}
  </div>)
};

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default Testimonials;
