import { client } from '$lib/graphql/client'
import { authorsQuery, projectsQuery } from '$lib/graphql/queries'

export const load = async () => {

    const [ authorReq, projectsReq ] = await Promise.all([
        client.request(authorsQuery),
        client.request(projectsQuery),
    ])

    const { authors } = authorReq
    const { projects } = projectsReq

    return {
        projects,
        authors,
    }
}