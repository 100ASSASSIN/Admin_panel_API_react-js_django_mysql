import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="9047",
  database="Core_root"
)

mycursor = mydb.cursor()

sql = "SELECT * FROM  api_data_user"

mycursor.execute(sql)

myresult = mycursor.fetchall()

myresult 
for x in myresult:
  print(x)