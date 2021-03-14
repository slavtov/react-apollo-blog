import { gql, useQuery } from '@apollo/client'
import { Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { BASIC_USER } from '../apollo/fragments'

const GET_USER = gql`
  ${BASIC_USER}
  query GetUser($id: ID!) {
    user(id: $id) {
      name
      ...BasicUser
      address {
        street
        suite
        city
        zipcode
        geo {
          lat
          lng
        }
      }
      phone
      website
      company {
        name
        catchPhrase
        bs
      }
    }
  }
`

const User = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id }
  })

  if (loading)
    return <p>Loading...</p>
  if (error)
    return <p>Error: {error}</p>

  const {
    user: {
      id: userId,
      name,
      username,
      email,
      address,
      phone,
      website,
      company
    }
  } = data

  return (
    <div>
      <h1 className="mb-3">User</h1>

      <h2 className="h4">Info</h2>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>ID</td>
            <td>{userId}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Username</td>
            <td>{username}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{phone}</td>
          </tr>
          <tr>
            <td>Website</td>
            <td>{website}</td>
          </tr>
        </tbody>
      </Table>

      <h2 className="h4">Address</h2>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Street</td>
            <td>{address.street}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{address.suite}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{address.city}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{address.zipcode}</td>
          </tr>
          <tr>
            <td>Geo</td>
            <td>
              lat: {address.geo.lat}, lng: {address.geo.lng}
            </td>
          </tr>
        </tbody>
      </Table>

      <h2 className="h4">Company</h2>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{company.name}</td>
          </tr>
          <tr>
            <td>Catchphrase</td>
            <td>{company.catchPhrase}</td>
          </tr>
          <tr>
            <td>bs</td>
            <td>{company.bs}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{phone}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default User
