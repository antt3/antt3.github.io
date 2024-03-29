import { GraphQLClient } from 'graphql-request'

const GRAPHQL_ENDPOINT = import.meta.env.VITE_GRAPH_API

export const client = new GraphQLClient(GRAPHQL_ENDPOINT)