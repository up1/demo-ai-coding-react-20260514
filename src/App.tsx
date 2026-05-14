import { useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isRedirecting, setIsRedirecting] = useState(false)

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const validateForm = () => {
    let valid = true
    setUsernameError('')
    setPasswordError('')

    if (!username.trim() || !validateEmail(username.trim())) {
      setUsernameError('Please enter a valid email address.')
      valid = false
    }

    if (!password || password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.')
      valid = false
    }

    return valid
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrorMessage('')

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 700))

      const normalizedUsername = username.trim().toLowerCase()

      if (normalizedUsername === 'server.error@example.com') {
        throw new Error('server')
      }

      if (
        normalizedUsername === 'user@example.com' &&
        password === 'password123'
      ) {
        setIsRedirecting(true)
        window.location.assign('/dashboard')
        return
      }

      setErrorMessage('Invalid username or password. Please try again.')
    } catch {
      setErrorMessage(
        'An error occurred while trying to log in. Please try again later.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="page-root">
      <div className="grid-overlay" aria-hidden="true"></div>
      <div className="scanline-overlay" aria-hidden="true"></div>

      <main className="login-shell">
        <header className="brand-block">
          <h1 className="brand-title neon-text-pink">NEON TOKYO</h1>
          <p className="brand-subtitle neon-text-cyan">
            Neural Grid Authentication
          </p>
        </header>

        <div className="login-card neon-border-pink">
          <span className="card-corner card-corner-tl" aria-hidden="true" />
          <span className="card-corner card-corner-br" aria-hidden="true" />

          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <div className="field-group">
              <label htmlFor="username" className="field-label">
                <span className="material-symbols-outlined field-label-icon">
                  person
                </span>
                Identity handle
              </label>
              <input
                id="username"
                name="username"
                type="email"
                autoComplete="username"
                className={`field-input field-input-uppercase ${
                  usernameError ? 'field-input-error' : ''
                }`}
                placeholder="USER_ID"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                aria-invalid={Boolean(usernameError)}
                aria-describedby={usernameError ? 'username-error' : undefined}
              />
              {usernameError && (
                <p id="username-error" className="field-error" role="alert">
                  {usernameError}
                </p>
              )}
            </div>

            <div className="field-group">
              <label htmlFor="password" className="field-label">
                <span className="material-symbols-outlined field-label-icon">
                  lock
                </span>
                Encryption key
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className={`field-input ${
                  passwordError ? 'field-input-error' : ''
                }`}
                placeholder="********"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                aria-invalid={Boolean(passwordError)}
                aria-describedby={passwordError ? 'password-error' : undefined}
              />
              {passwordError && (
                <p id="password-error" className="field-error" role="alert">
                  {passwordError}
                </p>
              )}
            </div>

            {errorMessage && (
              <p className="form-error" role="alert">
                {errorMessage}
              </p>
            )}

            {isRedirecting && (
              <p className="form-success" role="status">
                ACCESS GRANTED // Routing to dashboard...
              </p>
            )}

            <div className="submit-wrap">
              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? 'Authenticating...' : 'Enter the Grid'}</span>
                <span className="material-symbols-outlined">
                  {isSubmitting ? 'hourglass_top' : 'login'}
                </span>
              </button>
            </div>

            <div className="helper-row">
              <a href="#" className="helper-link">
                Forgot Credentials?
              </a>
            </div>
          </form>
        </div>

        <footer className="status-block">
          <div className="status-line">
            <span className="status-dot" aria-hidden="true" />
            <span>System Online // Grid_Status: Stable</span>
          </div>
          <div className="footer-links">
            <a href="#">Protocol</a>
            <a href="#">Grid_Terms</a>
            <a href="#">Support</a>
          </div>
          <p className="copyright">
            SYSTEM STATUS: ENCRYPTED // © 20XX NEON_TOKYO_CORP
          </p>
        </footer>
      </main>

      <div className="bottom-glow" aria-hidden="true" />
      <div className="vignette-overlay" aria-hidden="true" />
    </div>
  )
}

export default App
