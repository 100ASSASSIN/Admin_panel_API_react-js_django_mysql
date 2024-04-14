from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse
import mysql.connector
from django.http import JsonResponse
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status# Import your model for ApiDataUser
import mysql.connector
import base64
from django.http import JsonResponse
import mysql.connector
from rest_framework.decorators import api_view
from rest_framework.response import Response
from datetime import datetime
import mysql.connector
from rest_framework.exceptions import ParseError
from base64 import b64decode

 # Assuming you're using Django's built-in User model
 

def view_users(request):
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
        cursor.execute("SELECT orders.*, users.* FROM orders INNER JOIN users ON orders.user_id = users.id")

        # Fetch all rows
        rows = cursor.fetchall()

        # Close cursor and database connection
        cursor.close()
        db.close()

        # Pass the fetched rows to the template for rendering
        context = {'users': rows}
        return render(request, 'game/users.html', context)

    except mysql.connector.Error as error:
        # Handle errors
        error_message = "Error reading data from MySQL table: " + str(error)
        return render(request, 'error.html', {'error_message': error_message})



# Other API views
@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Api key 100% connection successfully connected'})

@api_view(['GET'])
def ASSASSIN(request):
    return Response({'message': 'This modern footer template will act as a practical addition to your website. It is a Bootstrap tool with a 100% flexible and responsive structure. In other words, it runs smoothly on mobile and desktop devices alike.Moreover, the template features a distinct look with dark and purple touches, making it attention-grabbing. Moreover, it also comes with integrated social media buttons, so you don’t need to add them manually.'})

@api_view(['GET'])
def DB(request):
    return Response({'message': 'api'})

@api_view(['GET'])
def Tab(request):
    mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="9047",
        database="u967353045_root"
    )

    mycursor = mydb.cursor()

    sql = "SELECT * FROM users"

    mycursor.execute(sql)

    myresult = mycursor.fetchall()

    # Collect all results
    response_data = []
    
    response_data.append({'message': myresult})

    return Response(response_data)

@api_view(['GET'])
def Oreders(request):
    mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="9047",
        database="u967353045_root"
    )

    mycursor = mydb.cursor()

    sql = "SELECT * FROM orders"

    mycursor.execute(sql)

    myresult = mycursor.fetchall()

    # Collect all results
    response_data = []
    
    response_data.append({'message': myresult})

    return Response(response_data)



@api_view(['GET'])
def Items_li(request):
    mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="9047",
        database="u967353045_root"
    )

    mycursor = mydb.cursor()

    sql = "SELECT * FROM items"

    mycursor.execute(sql)

    myresult = mycursor.fetchall()

    # Convert MySQL result to list of dictionaries
    items_list = []
    for item in myresult:
        item_dict = {
            'id': item[0],  # Assuming the first column is the ID
            'name': item[1],  # Assuming the second column is the name
            'price': item[2],  # Assuming the third column is the price
            'filename': item[3],  # Assuming the fourth column is the filename
            'image': base64.b64encode(item[4]).decode('utf-8'),  # Assuming the fifth column contains the image binary data
            'uploaded_at': item[5],  # Assuming the sixth column is the uploaded_at timestamp
            # Add more fields as needed
        }
        items_list.append(item_dict)

    # Return JSON response
    return JsonResponse({'message': items_list}, safe=False)

@api_view(['POST'])
def create_item(request):
    try:
        # Establish database connection
        mydb = mysql.connector.connect(
            host="localhost",
            user="root",
            password="9047",
            database="u967353045_root"
        )

        # Create cursor object
        mycursor = mydb.cursor()

        # Extract data from request
        name = request.data.get('name')
        price = request.data.get('price')
        filename = request.data.get('filename')
        image_data_base64 = request.data.get('image_data')
        item_id = request.data.get('id')  # Add this line to extract the ID from request data

        if not image_data_base64:
            raise ParseError("Image data is missing")

        # Decode base64 image data
        image_data = b64decode(image_data_base64)

        # Current timestamp
        uploaded_at = datetime.now()

        # Insert data into MySQL table
        sql = "INSERT INTO items (id, name, price, filename, image_data, uploaded_at) VALUES (%s, %s, %s, %s, %s, %s)"  # Modify the SQL query to include ID
        val = (item_id, name, price, filename, image_data, uploaded_at)  # Modify the values tuple to include ID
        mycursor.execute(sql, val)
        mydb.commit()

        # Construct response data
        response_data = {
            'id': item_id,
            'name': name,
            'price': price,
            'filename': filename,
            'image_data': image_data_base64,
            'uploaded_at': uploaded_at
        }

        # Close cursor and database connection
        mycursor.close()
        mydb.close()

        return Response(response_data, status=201)
    except Exception as e:
        return Response({'detail': str(e)}, status=400)



@api_view(['GET'])
def Numbers(request):
    mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="9047",
        database="u967353045_root"
    )

    mycursor = mydb.cursor()

    sql = "SELECT COUNT(id) AS NumberOfusers FROM users;"

    mycursor.execute(sql)

    myresult = mycursor.fetchall()

    # Collect all results
    response_data = []
    
    response_data.append({'message': myresult})

    return Response(response_data)


@api_view(['GET'])
def User_new(request):
    mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="9047",
        database="Core_root"
    )

    mycursor = mydb.cursor()

    sql = "SELECT * from api_data_user where id='1';"

    mycursor.execute(sql)

    myresult = mycursor.fetchall()

    # Collect all results
    response_data = []
    
    response_data.append({'message': myresult})

    return Response(response_data)

from rest_framework.decorators import api_view
from rest_framework.response import Response
import mysql.connector

@api_view(['DELETE'])
def delete_item(request, id):
    mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="9047",
        database="u967353045_root"
    )

    mycursor = mydb.cursor()

    sql = "DELETE FROM items WHERE id = %s"

    mycursor.execute(sql, (id,))

    mydb.commit()  # Commit the changes

    response_data = {'message': 'Item deleted successfully'}

    return Response(response_data)

@api_view(['DELETE'])
def delete_orders(request, id):
    mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="9047",
        database="u967353045_root"
    )

    mycursor = mydb.cursor()

    sql = "DELETE FROM orders WHERE id = %s"

    mycursor.execute(sql, (id,))

    mydb.commit()  # Commit the changes

    response_data = {'message': 'Item deleted successfully'}

    return Response(response_data)

@api_view(['DELETE'])
def delete_users(request, id):
    mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="9047",
        database="u967353045_root"
    )

    mycursor = mydb.cursor()

    sql = "DELETE FROM users WHERE id = %s"

    mycursor.execute(sql, (id,))

    mydb.commit()  # Commit the changes

    response_data = {'message': 'Item deleted successfully'}

    return Response(response_data)

@api_view(['GET'])
def List(request):
    mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="9047",
        database="u967353045_root"
    )

    mycursor = mydb.cursor()

    sql = "SELECT COUNT(id) AS NumberOforders FROM orders;"

    mycursor.execute(sql)

    myresult = mycursor.fetchall()

    # Collect all results
    response_data = []
    
    response_data.append({'message': myresult})

    return Response(response_data)




@api_view(['GET'])
def Items(request):
    mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="9047",
        database="u967353045_root"
    )

    mycursor = mydb.cursor()

    sql = "SELECT COUNT(id) AS NumberOfitems FROM items;"

    mycursor.execute(sql)

    myresult = mycursor.fetchall()

    # Collect all results
    response_data = []
    
    response_data.append({'message': myresult})

    return Response(response_data)


# Connect to MySQL database
def connect_to_db():
    try:
        connection = mysql.connector.connect(
            host="localhost",
            user="root",
            password="9047",
            database="Core_root"
        )
        return connection
    except mysql.connector.Error as err:
        print("Error: ", err)
        return None
  
@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        # Retrieve username and password from request data
        username = request.data.get('username')
        password = request.data.get('password')

        # Connect to MySQL database
        connection = connect_to_db()

        if connection:
            # Create cursor
            cursor = connection.cursor()

            # Query to check if username and password are valid
            query = "SELECT * FROM api_data_user WHERE username = %s AND password = %s"
            cursor.execute(query, (username, password))
            user = cursor.fetchone()

            if user:
                # User authentication successful
                # Perform any additional actions here (e.g., generate token)
                return Response({'success': True, 'message': 'Login successful', 'redirect_url': '/panel'}, status=status.HTTP_200_OK)
            

            else:
                # User authentication failed
                return Response({'success': False, 'message': 'Invalid username  or password'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            # Database connection failed
            return Response({'error': 'Database connection failed'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    else:
        # Return method not allowed for non-POST requests
        return Response({'error': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)



'''from django.shortcuts import render
from .models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse
from django.template import loader

# API views
@api_view(['POST'])
def post_data(request):
    if request.method == 'POST':
        try:
            # Assuming your frontend is sending JSON data in the request body
            data = request.data
            # Process the data as needed
            # Example: Save data to the database
            # Example: Perform some action based on the data
            return Response({'success': True, 'message': 'Data received successfully'})
        except Exception as e:
            return Response({'success': False, 'message': str(e)}, status=400)
    else:
        return Response({'success': False, 'message': 'Only POST requests are allowed'}, status=405)

# Template rendering view
def view_users(request):
    users = User.objects.all()
    template = loader.get_template('users.html')
    context = {'users': users}
    return HttpResponse(template.render(context, request))

# Other API views
@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'assassin_ASSASSIN'})

@api_view(['GET'])
def ASSASSIN(request):
    return Response({'message': 'Gaming assassin _asu'})

@api_view(['GET'])
def DB(request):
    return Response({'message': 'api'})'''''