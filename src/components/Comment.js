import Card from 'react-bootstrap/Card'
import PropTypes from 'prop-types'

const Comment = ({ item: { name, body } }) => (
  <Card className="mb-3">
    <Card.Header>{name}</Card.Header>
    <Card.Body>
      <p>{body}</p>
    </Card.Body>
  </Card>
)

export default Comment

Comment.propTypes = {
  item: PropTypes.object.isRequired
}
