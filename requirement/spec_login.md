# Frontend : Login page

## User flow
1. User opens website to login page
2. User enters username and password
3. User clicks on login button
4. Validate username and password

## Input validation in table format
| Input Field | Validation Rule | Error Message |
|-------------|-----------------|---------------|
| Username    | Required, must be a valid email format | "Please enter a valid email address." |
| Password    | Required, minimum 8 characters | "Password must be at least 8 characters long." |

## User Interface
- The login page use template from file `login.html`
- Use style guide from file `DESIGN.md` for consistent design
- The login form should be centered on the page and responsive to different screen sizes

## Error Handling
- If the username or password is incorrect, display an error message "Invalid username or password. Please try again."
- If there is a server error during login, display an error message "An error occurred while trying to log in. Please try again later."

## Test cases
1. **Test Case 1: Valid Login**
   - Input: Username: "user@example.com", Password: "password123"
   - Expected Output: Redirect to the dashboard page    