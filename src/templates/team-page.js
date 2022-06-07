import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Bio from '../components/Bio'
import PreviewCompatibleImage from "../components/PreviewCompatibleImage"

// eslint-disable-next-line
export const TeamPageTemplate = ({ title, subtitle, secondary, banner, bios }) => {
  return (
    <section className="section section--gradient" style={{ borderTop: '4px solid #D9D9D9'}}>
      <div className="container">
        <div className="columns">
          <div className="column is-12">
            <div className="section">
              <h2 className="title is-size-2 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <div className="content">
                <div style={{ display: 'flex' }}>
                  {bios.main.map(({ name, description, image }) => (
                    <div className="bios column is-6">
                      <Bio
                        name={name}
                        description={description}
                        image={image}
                        size="main"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="title is-size-3 has-text-weight-bold is-bold-light">
                    {secondary}
                  </h3>
                  <div style={{ display: 'flex' }}>
                    {bios.legal.map(({ name, description, image }) => (
                      <div className="bios column is-6">
                        <Bio
                          name={name}
                          description={description}
                          image={image}
                          size="main"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex' }}>
                  <h3 className="title is-size-3 has-text-weight-bold is-bold-light">
                    {subtitle}
                  </h3>
                  <div
                    style={{ minWidth: '120px', marginLeft: '1em' }}
                  >
                    <PreviewCompatibleImage imageInfo={{ image: banner, alt: 'Tepper Logo' }} />
                  </div>
                </div>
                {bios.support.map(({ name, description, image }) => (
                  <Bio
                    name={name}
                    description={description}
                    image={image}
                    size="support"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TeamPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
  banner: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  bios: PropTypes.shape({
    main: PropTypes.array.isRequired,
    support: PropTypes.array.isRequired,
  }),
};

const TeamPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <TeamPageTemplate
        title={frontmatter.title}
        secondary={frontmatter.secondary}
        subtitle={frontmatter.subtitle}
        banner={frontmatter.banner}
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
        title
        secondary
        subtitle
        banner {
          childImageSharp {
            gatsbyImageData(width: 120, quality: 72, layout: FULL_WIDTH)
          }
        }
        bios {
          main {
            name
            description
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 72, layout: FULL_WIDTH)
              }
            }
          }
          legal {
            name
            description
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 72, layout: FULL_WIDTH)
              }
            }
          }
          support {
            name
            description
            image {
              childImageSharp {
                gatsbyImageData(width: 120, quality: 72, layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`;
