import { gql } from '@apollo/client'

export const BASIC_POST = gql`
    fragment BasicPost on Post {
        id
        title
        body
    }
`

export const BASIC_USER = gql`
    fragment BasicUser on User {
        id
        username
        email
    }
`
