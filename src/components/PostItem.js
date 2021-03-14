import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const PostItem = ({ item: { id, title, body } }) => (
  <Card className="mb-3">
    <Card.Body>
      <h3>
        <Link to={`/posts/${id}`} className="text-dark">
          {title}
        </Link>
      </h3>
      <p>{body}</p>
    </Card.Body>
  </Card>
)

export default PostItem

PostItem.propTypes = {
  item: PropTypes.object.isRequired
}
