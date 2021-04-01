import flask
from flask import request, jsonify
import json
import requests
import urllib.parse
import random
import gpx_generator as gpx_manager
from datetime import datetime
from datetime import time
from datetime import timedelta

# ref: https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask
app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    return "<h1> hello </h1>"

@app.route('/api/maps/generate', methods=['GET', 'POST'])
def makeNewUser():
    """                           
        curl -d '{"display_name":"rhysS"}' -H "Content-Type: application/json" -X POST http://127.0.0.1:5000/api/maps/generate 
    """
     
    # TODO ADD ERROR HANDLING
    info_dict = request.json



    response_dict = {}
    response_dict["segments"] = gpx_manager.parseGPXData()    
    return response_dict

def readRecentlyPlayedTracks():
    ## todo move auth to private file
    #print(response.json())
    #return response.json()
    return "TODO"

@app.route('/api/callback', methods=['GET','POST'])
def responseQuery():
    #https://192.168.86.21/api/callback
    print(request.args['code'])
    return "blank"





app.run(host="0.0.0.0") 

songs_listened_to = []


with open('sample_spotify.json') as f:
    data = json.load(f)
    for item in data["items"]:
        song_info = {}
        song_info["name"] = item["track"]["name"]
        song_info["play_date"] = item["played_at"]                
        songs_listened_to.append(song_info)
print(songs_listened_to)