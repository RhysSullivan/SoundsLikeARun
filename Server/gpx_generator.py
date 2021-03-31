from bs4 import BeautifulSoup as bs
from datetime import datetime
from datetime import time
from datetime import timedelta
import json
def parseGPXData():
    with open('Afternoon_Run.gpx') as f:
        bs_content = bs(f.read(), 'lxml')
        content = bs_content.find_all('trkpt')        
        lastTime = None
        intervalTime = datetime(2023,1,1,0,0,0)
        
        all_intervals_info = []
        
        """
        Interval Info:
        {
            Name: "...",
            Coords: [
                {
                    latitude: ...,
                    longitude: ...
                }
            ]
        }
        """

        interval_info = {}
        interval_coords = []
        intervals = 0
        interval_info["Name"] = intervals
        for tag in content:
            lat = tag['lat']
            lon = tag['lon']
            gpx_time = tag.find('time').get_text()
            gpx_time = datetime.fromisoformat(gpx_time[:len(gpx_time)-1])
            coords = {}
            coords["latitude"] = float(lat)
            coords["longitude"] = float(lon)
            interval_coords.append(coords)
            

            if lastTime == None:
                lastTime = gpx_time                
            else:
                timeDelta = gpx_time - lastTime
                intervalTime += timeDelta
                if(intervalTime.minute >= 2):
                    interval_info["Coords"] = interval_coords
                    all_intervals_info.append(
                        interval_info
                    )


                    intervalTime = datetime(2023,1,1,0,0,0)
                    interval_info = {}                    
                    intervals += 1
                    interval_coords = []
                    interval_info["Name"] = intervals                    
            
                    
                lastTime = gpx_time                      
        with open("sample.json", "w") as outfile: 
            json.dump(all_intervals_info, outfile)
        return all_intervals_info
parseGPXData()