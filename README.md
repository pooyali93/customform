Key Components

InputField
A reusable component for input fields with built-in error handling.

Props:
id: The input field's unique identifier.
label: The label to display above the input.
value: Current input value.
onChange: Function to handle input changes.
error: Error message to display when the input value is invalid.

LoginPage
Displays a simple login form with username and password fields. Utilizes the InputField component for input handling and form validation.

RegisterPage
Shows a registration form with username, email, password, and confirmPassword fields. Also employs the InputField component and performs more advanced validation, including password confirmation.

