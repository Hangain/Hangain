#!/bin/bash

API_KEY="Hangain_default_secret"
# Hangain_URL="http://localhost:3000/api/v1/meeting"
# Hangain_URL=https://Hangain.herokuapp.com/api/v1/meeting
Hangain_URL=https://hangain.herokuapp.com/api/v1/meeting

curl $Hangain_URL \
    --header "authorization: $API_KEY" \
    --header "Content-Type: application/json" \
    --request POST
