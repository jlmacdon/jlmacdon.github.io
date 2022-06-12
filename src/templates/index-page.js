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
      <div className="column is-10 is-offset-1 has-text-centered padding-unset">
        <section>
            <h2 className="has-text-weight-bold">{mainpitch.title}</h2>
            <div className="med-text">{mainpitch.description}</div>
        </section>
      <section>
        <h2 className="has-text-weight-bold">{benefits.heading}</h2>
        <Features gridItems={benefits.blurbs} />
      </section>
      <section>
        <h2 className="has-text-weight-bold">{testimonials.heading}</h2>
        <Testimonials testimonials={testimonials.reviews} />
      </section>
      </div>
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
  }).isRequired,
  testimonials: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    reviews: PropTypes.array.isRequired,
  }).isRequired,
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
                gatsbyImageData(width: 120, quality: 64, layout: CONSTRAINED)
              }
            }
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
