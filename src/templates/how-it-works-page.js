import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import FullWidthImage from "../components/FullWidthImage";
import Tile from '../components/Tile'

// eslint-disable-next-line
export const HowItWorksPageTemplate = ({
  image,
  title,
  heading,
  description,
  process,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div className="content">
      <FullWidthImage img={heroImage} title={title} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section has-text-centered">
            <div>
              <h3 className="has-text-weight-semibold is-size-2">
                {heading}
              </h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns is-multiline">
            {process.map(({ processIcon, processName, processDescription, benefitsIcon, benefitsName, benefitsDescription }) => {
              return (
                <div style={{ display: 'flex' }}>
                  <div className="column is-5">
                    <Tile icon={processIcon} name={processName} description={processDescription} />
                  </div>
                  <div className="column is-2 step-divider">
                    <div className="divider"></div>
                  </div>
                  <div className="column is-5">
                    <Tile icon={benefitsIcon} name={benefitsName} description={benefitsDescription} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

HowItWorksPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  heading: PropTypes.string,
  description: PropTypes.string,
};

const HowItWorksPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <HowItWorksPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        heading={frontmatter.heading}
        description={frontmatter.description}
        process={frontmatter.process}
      />
    </Layout>
  );
};

HowItWorksPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default HowItWorksPage;

export const howItWorksPageQuery = graphql`
  query HowItWorksPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        description
        process {
          processIcon {
            childImageSharp {
              gatsbyImageData(width: 60, quality: 100, layout: FULL_WIDTH)
            }
          }
          processName
          processDescription
          benefitsIcon {
            childImageSharp {
              gatsbyImageData(width: 60, quality: 100, layout: FULL_WIDTH)
            }
          }
          benefitsName
          benefitsDescription
        }
      }
    }
  }
`;
