from django.urls import path
from api_data import views

urlpatterns = [
    path('hello-world/', views.hello_world, name='hello_world'),
    path('ASSASSIN/', views.ASSASSIN, name='ASSASSIN'),
    path('DB/', views.DB, name='DB'),
    path('view_users/', views.view_users, name='view_users'),
    path('api/login/', views.login, name='login'),  # Fix the import statement
    path( 'api/', views.Tab, name='tab'),
    path( 'Orders/', views.Oreders, name='tab'),
    path( 'Numbers/', views.Numbers, name='Num'),
    path( 'List/', views.List, name='Numo'),
    path( 'Items/', views.Items, name='Numo'),
    path( 'new', views.User_new, name='Numo'),
    path( 'Items_li/', views.Items_li, name='Numo'),
    path( 'ben/', views.create_item, name='ben'),
    path('api/delete_item/<int:id>/', views.delete_item, name='delete_item'),
    path('api/delete_ord/<int:id>/', views.delete_orders, name='delete_item'),
    path('api/delete_users/<int:id>/', views.delete_users, name='delete_item'),
]
