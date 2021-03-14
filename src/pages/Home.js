import { gql, useQuery } from '@apollo/client'
import { BASIC_POST } from '../apollo/fragments'
import PostItem from '../components/PostItem'

const GET_POSTS = gql`
  ${BASIC_POST}
  query GetPosts {
    posts {
      ...BasicPost
    }
  }
`

const Home = () => {
  const { loading, error, data } = useQuery(GET_POSTS)

  if (loading)
    return <p>Loading...</p>
  if (error)
    return <p>Error: {error}</p>

  const { posts } = data

  return (
    <div>
      <h1 className="mb-3">Home</h1>
      <div>
        {posts.map(post => <PostItem key={post.id} item={post} />)}
      </div>
    </div>
  )
}

export default Home
