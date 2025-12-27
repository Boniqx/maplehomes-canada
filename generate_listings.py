import json
import random

cities = [
    {"name": "Vancouver", "lat": 49.2827, "lng": -123.1207},
    {"name": "Toronto", "lat": 43.6532, "lng": -79.3832},
    {"name": "Calgary", "lat": 51.0447, "lng": -114.0719},
    {"name": "Montreal", "lat": 45.5017, "lng": -73.5673},
    {"name": "Ottawa", "lat": 45.4215, "lng": -75.6972},
    {"name": "Halifax", "lat": 44.6488, "lng": -63.5752},
    {"name": "Winnipeg", "lat": 49.8951, "lng": -97.1384},
    {"name": "Edmonton", "lat": 53.5461, "lng": -113.4938},
    {"name": "Quebec City", "lat": 46.8139, "lng": -71.2082},
    {"name": "Victoria", "lat": 48.4284, "lng": -123.3656},
]

descriptions = [
    "Stunning modern home with open concept living.",
    "Charming character house in a quiet neighborhood.",
    "Luxury condo with breathtaking city views.",
    "Spacious family home close to schools and parks.",
    "Elegant estate with high-end finishes throughout.",
    "Cozy bungalow perfect for first-time buyers.",
    "Contemporary loft in the heart of the downtown.",
    "Beautiful waterfront property with private dock.",
    "Stylish townhouse with a rooftop terrace.",
    "Quiet retreat surrounded by nature."
]

# Using Pexels/Unsplash IDs for variety
image_ids = [
    "106399", "186077", "1396122", "1396133", "259588", 
    "2102587", "280222", "206172", "164558", "2724749"
]

listings = []

for i in range(1, 201):
    city = random.choice(cities)
    # Randomize within ~20km of the city center
    lat_offset = random.uniform(-0.15, 0.15)
    lng_offset = random.uniform(-0.2, 0.2)
    
    price_val = random.randint(450, 2500) * 1000
    price_str = f"${price_val:,}"
    
    beds = random.randint(1, 6)
    baths = random.randint(1, 4)
    
    img_id = random.choice(image_ids)
    image_url = f"https://images.pexels.com/photos/{img_id}/pexels-photo-{img_id}.jpeg?auto=compress&cs=tinysrgb&w=800"
    
    listings.append({
        "id": i,
        "latitude": city["lat"] + lat_offset,
        "longitude": city["lng"] + lng_offset,
        "price": price_str,
        "beds": beds,
        "baths": baths,
        "imageUrl": image_url,
        "description": random.choice(descriptions),
        "city": city["name"]
    })

# Ensure public directory exists
import os
if not os.path.exists('public'):
    os.makedirs('public')

with open('public/listings.json', 'w') as f:
    json.dump(listings, f, indent=2)

print("Generated 200 listings in public/listings.json")
