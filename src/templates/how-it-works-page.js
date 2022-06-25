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
  mainpitch,
  process,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <FullWidthImage img={heroImage} title={title} />
      <div className="column is-10 is-offset-1 padding-unset has-text-centered">
        <section>
          <h2 className="has-text-weight-bold ">{mainpitch.title}</h2>
          <div className="med-text">{mainpitch.description}</div>
        </section>
        <section>
          <div className="columns is-multiline section-padding">
            <div className="column padding-unset">
              {process.map(({ processIcon, processName, processDescription }) => {
                return <Tile icon={processIcon} name={processName} description={processDescription} />
              })}
            </div>
            <div className="column padding-unset">
              {process.map(({ benefitsIcon, benefitsName, benefitsDescription }) => {
                return <Tile icon={benefitsIcon} name={benefitsName} description={benefitsDescription} />
              })}
            </div>
          </div>
        </section>
      </div>
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
        title={frontmatter.title}
        image={frontmatter.image}
        mainpitch={frontmatter.mainpitch}
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
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        mainpitch {
          title
          description
        }
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
