from bs4 import BeautifulSoup as bs
from datetime import datetime
from datetime import time
from datetime import timedelta
from geopy import distance
import json
def parseGPXData():
    with open('hm.gpx') as f:
        bs_content = bs(f.read(), 'lxml')
        content = bs_content.find_all('trkpt')   

    lastTime = None
    lastCoords = None
    intervalTime = datetime(2023,1,1,0,0,0)
    
    all_intervals_info = []           
    interval_info = {}
    interval_coords = []
    interval_name = 0
    interval_info["Name"] = interval_name

    interval_distance = 0



    for tag in content:
        lat = tag['lat']
        lon = tag['lon']        
        gpx_time = tag.find('time').get_text()
        gpx_time = datetime.fromisoformat(gpx_time[:len(gpx_time)-1])        
        
        coords = {}
        coords["latitude"] = float(lat)
        coords["longitude"] = float(lon)
        interval_coords.append(coords)
        if lastTime != None:
            interval_distance += distance.distance(lastCoords, (lat, lon)).miles
            lastCoords = (lat, lon)

            timeDelta = gpx_time - lastTime
            intervalTime += timeDelta
            lastTime = gpx_time

            if(intervalTime.minute >= 8):
                interval_info["Pace"] = intervalTime.minute/interval_distance

                interval_info["Coords"] = interval_coords
                interval_coords = []
                
                interval_info["Distance"] = interval_distance
                interval_distance = 0

                interval_name += 1                
                interval_info["Name"] = interval_name                                    
                
                interval_info["Selected"] = False
                


                all_intervals_info.append(interval_info)                
                intervalTime = datetime(2023,1,1,0,0,0)
                interval_info = {}                                    
        else:
            lastTime = gpx_time
            lastCoords = (lat, lon)                                                                    
              
    with open("sample.json", "w") as outfile: 
        json.dump(all_intervals_info, outfile)
    return all_intervals_info
parseGPXData()