import requests

BASE = "http://127.0.0.1:5000/"

response = requests.patch(BASE + "video/2", {})
print(response.json())