import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Bios from '../components/Bios'
import PreviewCompatibleImage from "../components/PreviewCompatibleImage"

// eslint-disable-next-line
export const TeamPageTemplate = ({ bios }) => {
  return (
    <div className="nav-border">
      <div className="column is-10 is-offset-1 has-text-centered padding-unset">
        <section>
          <h2 className="has-text-weight-bold">{bios.founders.heading}</h2>
          <Bios bios={bios.founders.content} size="large" />
        </section>
      </div>
      <div className="column is-10 is-offset-1 has-text-centered padding-unset">
        <section>
          <h2 className="has-text-weight-bold">{bios.legal.heading}</h2>
          <Bios bios={bios.legal.content} size="large" />
        </section>
      </div>
      <div className="column is-10 is-offset-1 padding-unset">
        <section>
          <div className="bio-support-heading">
            <h2 className="has-text-weight-bold has-text-centered">{bios.support.heading}</h2>
            <div className="bio-support-logo">
              <PreviewCompatibleImage imageInfo={{ image: bios.support.logo, alt: 'Tepper Logo' }} />
            </div>
          </div>
          <div className="section-padding">
            <Bios bios={bios.support.content} size="small" />
          </div>
        </section>
      </div>
    </div>
  );
};

TeamPageTemplate.propTypes = {
  bios: PropTypes.shape({
    founders: PropTypes.shape({
      heading: PropTypes.string.isRequired,
      content: PropTypes.array.isRequired,
    }).isRequired,
    legal: PropTypes.shape({
      heading: PropTypes.string.isRequired,
      content: PropTypes.array.isRequired,
    }).isRequired,
    support: PropTypes.shape({
      heading: PropTypes.string.isRequired,
      logo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
      content: PropTypes.array.isRequired,
    }).isRequired,
  }),
};

const TeamPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <TeamPageTemplate
        bios={frontmatter.bios}
      />
    </Layout>
  );
};

TeamPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default TeamPage;

export const teamPageQuery = graphql`
  query TeamPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        bios {
          founders {
            heading
            content {
              name
              description
              image {
                childImageSharp {
                  gatsbyImageData(width: 240, quality: 72, layout: FULL_WIDTH)
                }
              }
            }
          }
          legal {
            heading
            content {
              name
              description
              image {
                childImageSharp {
                  gatsbyImageData(width: 240, quality: 72, layout: FULL_WIDTH)
                }
              }
            }
          }
          support {
            heading
            logo {
              childImageSharp {
                gatsbyImageData(width: 84, quality: 72, layout: FULL_WIDTH)
              }
            }
            content {
              name
              description
              image {
                childImageSharp {
                  gatsbyImageData(width: 240, quality: 72, layout: FULL_WIDTH)
                }
              }
            }
          }
        }
      }
    }
  }
`;
