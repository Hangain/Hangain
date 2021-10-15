import requests
import json

API_KEY = "Hangain_default_secret"
# Hangain_URL = "http://localhost:3000/api/v1/meeting"
# Hangain_URL = "https://Hangain.herokuapp.com/api/v1/meeting"
Hangain_URL = "https://Hangain.up.railway.app/api/v1/meeting"

headers = {
    "authorization": API_KEY,
    "Content-Type": "application/json",
}

response = requests.post(
    Hangain_URL,
    headers=headers
)

print("Status code:", response.status_code)
data = json.loads(response.text)
print("meeting:", data["meeting"])
