import { client } from '$lib/graphql-client.js'
import { gql } from 'graphql-request'

export const load = async () => {

    const authorsQuery = gql`
        query GetAuthors {
            authors {
                name
                intro
                bio
                slug
                picture {
                    url
                }
            }
        }
    `

    const projectsQuery = gql`
        query GetProjects {
            projects {
                name
                slug
                description
                demo
                sourceCode
                image {
                    url
                }
            }
        }
    `

    const [ authorReq, projectsReq ] = await Promise.all([
        client.request(authorsQuery),
        client.request(projectsQuery),
    ])
    
    const { authors } = authorReq
    const { projects } = projectsReq

    return {
        projects,
        authors
    }
}