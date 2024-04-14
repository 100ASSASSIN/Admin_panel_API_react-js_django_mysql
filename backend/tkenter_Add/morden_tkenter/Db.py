import tkinter as tk
from tkinter import ttk
import mysql.connector

# Function to connect to MySQL database and fetch data
def fetch_data():
    # Connect to MySQL database
    mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="9047",
        database="assassin"
    )

    # Create cursor
    mycursor = mydb.cursor()

    # Execute SQL query to fetch data
    mycursor.execute("SELECT * FROM items")

    # Fetch all records
    rows = mycursor.fetchall()

    # Display data in Treeview
    for i in treeview.get_children():
        treeview.delete(i)
    for row in rows:
        treeview.insert('', 'end', values=row)

    # Close cursor and database connection
    mycursor.close()
    mydb.close()

# Create Tkinter window
root = tk.Tk()
root.title("MySQL Data Viewer")

# Create Treeview widget to display data
treeview = ttk.Treeview(root, columns=('ID', 'Name', 'Age'))
treeview.heading('#0', text='ID')
treeview.heading('#1', text='Name')
treeview.heading('#2', text='Age')
treeview.pack(padx=10, pady=10)

# Button to fetch and display data
fetch_button = ttk.Button(root, text="Fetch Data", command=fetch_data)
fetch_button.pack(pady=10)

# Run the Tkinter event loop
root.mainloop()
