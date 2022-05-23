import * as React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

const Testimonials = ({ testimonials }) => {
  if(testimonials.length === 0) {
    const author = 'Frodo Baggins'
    const description = 'Bearer of the One Ring'
    const quote = 'Bilbo used often to say there was only one Road; that it was like a great river: its springs were at every doorstep, and every path was its tributary.'
    const testimonials1 = [
      { author, description, quote },
      { author, description, quote },
      { author, description, quote },
      { author, description, quote },
      { author, description, quote },
      { author, description, quote },
    ]
    return (
      <div className="columns is-multiline">
    {testimonials1.map(({ author, description, quote }) => (
        <article key={v4()} className="message column is-3 testimonial" style={{ margin: '1.5em'}}>
         <div>
           {quote}
           <br />
           <cite> – {author}</cite>
           <div>{description}</div>
         </div>
       </article>
    ))}
  </div>)
  } else {
    return (
    <div>
      {testimonials.map(({ author, description, quote }) => (
          <article key={v4()} className="message">
          <div className="message-body">
            {quote}
            <br />
            <cite> – {author}</cite>
            <div>{description}</div>
          </div>
        </article>
      ))}
    </div>)
  }
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
