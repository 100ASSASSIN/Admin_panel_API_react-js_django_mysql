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

        # Execute SQL query to perform inner join between orders and users tables
        cursor.execute("SELECT orders.*, users.* FROM orders INNER JOIN users ON orders.user_id = users.id")

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
