import { client } from '../lib/graphql-client.js'
import { gql } from 'graphql-request'

export const load = async () => {

    const query = gql`
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

    const { projects } = await client.request(query)

    return {
        projects
    }
}