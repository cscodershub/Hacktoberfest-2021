from django.shortcuts import render, redirect
from django.contrib.auth.models import User, auth
from django.contrib import messages
from django.http import JsonResponse

# Create your views here.

def user_signup(request):
    if request.method == 'POST':
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        username = request.POST['username']
        email = request.POST['email']
        password1 = request.POST['password1']
        password2 = request.POST['password2']

        if password1 == password2:
            if User.objects.filter(username=username).exists():
                messages.info(request,' Username taken')
                return redirect('signup')
            elif User.objects.filter(email=email).exists():
                messages.info(request,'email taken')
                return redirect('signup')
            else:
                user = User.objects.create_user(username=username, password=password1, email=email,first_name=first_name,last_name=last_name)
                user.save()
                return redirect('/')
        else:
            messages.info(request,"password not matching....")
            return redirect('signup')
        return redirect('/')
    else:
        return render(request,'signup.html')

def user_login(request):
    if 'username' in request.session:
        return redirect('display')
    else:
        if request.method=='POST':
            username = request.POST['username']
            password = request.POST['password']

            user = auth.authenticate(username=username,password=password)

            if user is not None:
                request.session['username']=username
                return JsonResponse(
                    {'success':True},
                    safe = False
                )
            else:
                return JsonResponse(
                    {'success':False},
                    safe=False
                )

        else:
            return render(request,'login.html')

def user_logout(request):
    if 'username' in request.session:
        request.session.flush()
    return redirect('/')