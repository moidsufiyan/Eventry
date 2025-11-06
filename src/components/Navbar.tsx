import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/store/authStore'
import { Button } from '@/components/ui/button'

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuthStore()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          Eventry
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/" className="text-foreground hover:text-primary transition">
            Home
          </Link>
          <Link to="/" className="text-foreground hover:text-primary transition">
            Events
          </Link>

          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                className="text-foreground hover:text-primary transition"
              >
                Dashboard
              </Link>
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">
                  {user?.name}
                </span>
                <Button onClick={handleLogout} variant="outline" size="sm">
                  Logout
                </Button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
