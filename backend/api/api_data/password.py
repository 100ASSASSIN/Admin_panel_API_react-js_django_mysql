def login():
    # Dictionary to store usernames and passwords
    users = {
        'user1': 'password1',
        'user2': 'password2', 
        # Add more users if needed
    }

    # Get username and password from user input
    username = input("Enter your username: ")
    password = input("Enter your password: ")

    # Check if the entered username exists and the password matches
    if username in users and users[username] == password:
        print("Login successful!")
    else:
        print("Invalid username or password. Please try again.")
        login()  # Recursive call to login function if login fails

# Call the login function to start the login process
login()
