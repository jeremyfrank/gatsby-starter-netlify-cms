import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

class CareerListings extends React.Component {
  render() {
    const { data } = this.props
    const { edges: jobs } = data.allLever

    return (
      <div className="columns is-multiline">
        {jobs &&
          jobs.map(({ node: job }) => (
            <div className="is-parent column is-6" key={job.id}>
              <article
                className={`blog-list-item tile is-child box notification`}
              >
                <header>
                  <p className="post-meta">
                    <a
                      className="title has-text-primary is-size-4"
                      href={job.hostedUrl}
                    >
                      {job.text}
                    </a>
                    <br/>
                    <span className="subtitle is-size-5 is-block">
                    {job.categories.department}
                    <span> &bull; </span>
                    {job.categories.location}
                    </span>
                  </p>
                </header>
                <p>
                  {job.excerpt}
                </p>
                <a className="button" href={job.hostedUrl}>
                  Details →
                </a>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

CareerListings.propTypes = {
  data: PropTypes.shape({
    allLever: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query CareersQuery {
        allLever {
          edges {
            node {
              id
              lever_id
              text
              hostedUrl
              applyUrl
              categories {
                commitment
                department
                location
                team
              }
              description
              descriptionPlain
              lists {
                text
                content
              }
              additional
              additionalPlain
            }
          }
        }
      }
    `}
    render={(data, count) => <CareerListings data={data} count={count} />}
  />
)
