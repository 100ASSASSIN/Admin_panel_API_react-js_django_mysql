import mysql.connector

def view_users():
    # Connect to MySQL database
    db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="9047",
        database="u967353045_root"
    )

    try:
        # Create cursor
        cursor = db.cursor()

        # Execute SQL query to select all rows from the users table
        cursor.execute("SELECT * FROM orders")

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
        if 'cursor' in locals() and cursor is not None:
            cursor.close()
        if 'db' in locals() and db.is_connected():
            db.close()

# Call the function to view users
view_users()
