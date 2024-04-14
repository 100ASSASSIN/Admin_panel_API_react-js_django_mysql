import mysql.connector

def view_users():
    try:
        # Connect to MySQL database
        db = mysql.connector.connect(
            host="localhost",
            user="root",
            password="9047",
            database="u967353045_root"
        )

        # Create cursor
        cursor = db.cursor()

        # Execute SQL query to select all rows from the users table
        cursor.execute("SELECT * FROM users")

        # Fetch all rows
        rows = cursor.fetchall()

        # Iterate over the rows and print each row
        for row in rows:
            print(row)

    except mysql.connector.Error as error:
        # Handle errors
        print("Error reading data from MySQL table:", error)

    finally:
        # Close cursor and database connection
        if cursor is not None:
            cursor.close()
        if db.is_connected():
            db.close()

# Call the function to view users
view_users()
