from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import BloodBank
from django.contrib.auth.models import User, auth
from django.contrib import messages


# Create your views here.
def add_donor(request):
    if 'username' in request.session:
        if request.method =='POST':
            name = request.POST.get('name')
            cnum = request.POST.get('cnum')
            email = request.POST.get('email')
            dob = request.POST.get('dob')
            blg = request.POST.get('blg')
            sex = request.POST.get('sex')

            BloodObj=BloodBank(name=name,cnum=cnum,email=email,dob=dob,blg=blg,sex=sex)
            BloodObj.save()
            return redirect('display')
        else:
            return render(request,'add-donor.html')
    else:
        return redirect('/')

def display(request):
    if 'username' in request.session:
        blood = BloodBank.objects.all()
        return render(request, 'display.html',{'blood':blood})
    return redirect('/')
