import flask
from flask import request, jsonify
import json
import requests
import urllib.parse
import random
import gpx_generator as gpx_manager
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

app.run(host="0.0.0.0")