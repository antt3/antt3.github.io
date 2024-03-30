import { GraphQLClient } from 'graphql-request';
import { GRAPHQL_API } from '$env/static/private';

export const client = new GraphQLClient(GRAPHQL_API);
