import * as React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

const Testimonials = ({ testimonials }) => {
  return (
  <div className="columns is-multiline testimonial-reviews">
    {testimonials.map(({ author, description, quote }) => (
        <article key={v4()} className="message column is-one-quarter-desktop is-full-tablet testimonial">
          <div>
            {quote}
            <br />
            <cite> – {author}</cite>
            <div>{description}</div>
          </div>
        </article>
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
