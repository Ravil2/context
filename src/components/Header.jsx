import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-medium text-white hover:text-white/80 transition-colors"
        >
          UseContext
        </Link>

        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className="text-white/70 hover:text-white transition-colors text-sm font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/context-page"
                className="text-white/70 hover:text-white transition-colors text-sm font-medium"
              >
                Context
              </Link>
            </li>
            <li>
              <Link
                to="/examples"
                className="text-white/70 hover:text-white transition-colors text-sm font-medium"
              >
                Examples
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
