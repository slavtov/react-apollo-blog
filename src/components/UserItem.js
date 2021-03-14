import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const UserItem = ({ item: { id, username, email } }) => (
  <Card className="mb-3">
    <Card.Body>
      <h5>{username}</h5>
      <p>{email}</p>

      <Button as={Link} to={`/users/${id}`} size="sm">
        Info
      </Button>
    </Card.Body>
  </Card>
)

export default UserItem

UserItem.propTypes = {
  item: PropTypes.object.isRequired
}
