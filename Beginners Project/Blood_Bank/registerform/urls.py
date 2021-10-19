from django.urls import path

from . import views

urlpatterns = [
    path('display',views.display,name='display'),
    path('add-donor',views.add_donor,name='add-donor')

]