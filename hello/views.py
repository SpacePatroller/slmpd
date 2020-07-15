import json
import pandas as pd
import requests
from django.shortcuts import render
from django.http import HttpResponse

# from .models import Greeting

# Create your views here.


def index(request):
    # return HttpResponse('Hello from Python!')
    return render(request, "index.html")


# def db(request):

#     greeting = Greeting()
#     greeting.save()

#     greetings = Greeting.objects.all()

#     return render(request, "db.html", {"greetings": greetings})


# try and read csv file and push to link


def data(request):

    # slmpdMayData = pd.read_csv('May2020.csv')

    # slmpdMayDataJson = slmpdMayData.to_json()

    # return HttpResponse(slmpdMayDataJson)

    return HttpResponse("return this string")
