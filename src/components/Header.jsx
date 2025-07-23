import { Link } from 'react-router'

export default function Header() {
  return (
    <div>
      UseContext
      <nav>
        <ul>
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/context-page">
            <li>Context</li>
          </Link>
          <Link to="/example">
            <li>Example</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}
