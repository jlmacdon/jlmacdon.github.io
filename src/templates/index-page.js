import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import FullWidthImage from "../components/FullWidthImage";
import Testimonials from "../components/Testimonials";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  mainpitch,
  benefits,
  testimonials,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <FullWidthImage img={heroImage} title={title} />
      <section className="section section--gradient">
        <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="tile">
                    <h1 className="title has-text-centered">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h5 className="subtitle is-size-5 has-text-centered">{mainpitch.description}</h5>
                  </div>
                  <div className="benefits">
                    <h3 className="title has-text-centered">{benefits.heading}</h3>
                    <Features gridItems={benefits.blurbs} />
                  </div>
                  <div className="testimonials">
                    <h3 className="title has-text-centered">{testimonials.heading}</h3>
                    <Testimonials testimonials={testimonials.reviews} />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
  mainpitch: PropTypes.object.isRequired,
  benefits: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    blurbs: PropTypes.array.isRequired,
  }),
  testimonials: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    reviews: PropTypes.array.isRequired,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        mainpitch={frontmatter.mainpitch}
        benefits={frontmatter.benefits}
        testimonials={frontmatter.testimonials}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        mainpitch {
          title
          description
        }
        benefits {
          heading
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            heading
            text
          }
        }
        testimonials {
          heading
          reviews {
            author
            description
            quote
          }
        }
      }
    }
  }
`;
