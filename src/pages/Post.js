import { gql, useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { BASIC_POST, BASIC_USER } from '../apollo/fragments'
import Comment from '../components/Comment'
import UserItem from '../components/UserItem'

const GET_POST = gql`
  ${BASIC_POST}
  ${BASIC_USER}
  query GetPost($id: ID!) {
    post(id: $id) {
      ...BasicPost
      user {
        ...BasicUser
      }
    }

    comments(postId: $id) {
      id
      name
      body
    }
  }
`

const Post = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_POST, {
    variables: { id }
  })

  if (loading)
    return <p>Loading...</p>
  if (error)
    return <p>Error: {error}</p>

  const { post: { title, body, user }, comments } = data

  return (
    <div>
      <h1 className="mb-3">{title}</h1>
      <p>{body}</p>

      <h2 className="h4 mb-3">User</h2>
      <UserItem item={user} />

      <h3 className="h4 mb-3">
        Comments ({comments.length})
      </h3>
      <div>
        {comments.map(comment => <Comment key={comment.id} item={comment} />)}
      </div>
    </div>
  )
}

export default Post
