from bs4 import BeautifulSoup as bs

with open('Afternoon-Run.gpx') as f:
    bs_content = bs(f.read(), 'lxml')
    content = bs_content.find_all('trkpt')
    out = open('coords.txt', 'w')
    for tag in content:
        lat = tag['lat']
        lon = tag['lon']
        # Generate { latitude: 37.8025259, longitude: -122.4351431 },
        out.write("{{ latitude: {0}, longitude: {1} }},\n".format(lat, lon))
    out.close()
