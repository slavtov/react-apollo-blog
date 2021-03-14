import { gql, useQuery } from '@apollo/client'
import { BASIC_USER } from '../apollo/fragments'
import UserItem from '../components/UserItem'

const GET_USERS = gql`
  ${BASIC_USER}
  query GetUsers {
    users {
      ...BasicUser
    }
  }
`

const Users = () => {
  const { loading, error, data } = useQuery(GET_USERS)

  if (loading)
    return <p>Loading...</p>
  if (error)
    return <p>Error: {error}</p>

  const { users } = data

  return (
    <div>
      <h1 className="mb-3">Users</h1>
      <div>
        {users.map(user => <UserItem key={user.id} item={user} />)}
      </div>
    </div>
  )
}

export default Users
