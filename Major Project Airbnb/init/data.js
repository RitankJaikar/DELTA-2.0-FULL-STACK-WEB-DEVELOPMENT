const sampleListings = [
  {
    title: "Elegant Riad in Marrakech",
    description:
      "A traditional Moroccan riad with modern comforts. Experience exotic culture and vibrant colors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1714576578629-6cf5459bcaf1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1100,
    location: "Marrakech",
    country: "Morocco",
    geometry: {
      type: "Point",
      coordinates: [-7.9811, 31.6295],
    },
  },
  {
    title: "Japanese Zen Garden House",
    description:
      "Find inner peace in this serene Japanese-style home surrounded by a peaceful garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1707394545341-0db2c6b93c90?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1700,
    location: "Kyoto",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [135.7681, 35.0116],
    },
  },
  {
    title: "Colorful Bungalow in Cartagena",
    description:
      "Vibrant colonial bungalow in the heart of Cartagena. Walk to historical landmarks and beaches.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1633394714018-cbe9374ca817?q=80&w=2104&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 950,
    location: "Cartagena",
    country: "Colombia",
    geometry: {
      type: "Point",
      coordinates: [-75.5144, 10.391],
    },
  },
  {
    title: "Scenic Highlands Cottage",
    description:
      "Nestled in the rolling hills of the Scottish Highlands, this cottage is a perfect nature escape.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1660482434296-43dcfc0131db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1300,
    location: "Inverness",
    country: "Scotland",
    geometry: {
      type: "Point",
      coordinates: [-4.2247, 57.4778],
    },
  },
  {
    title: "Private Island Villa",
    description:
      "Stay on a secluded private island in this luxurious overwater villa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1729708790933-181ab8d90e0c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 6000,
    location: "Baa Atoll",
    country: "Maldives",
    geometry: {
      type: "Point",
      coordinates: [73.0921, 5.2341],
    },
  },
  {
    title: "Snowy Chalet in the Alps",
    description:
      "Enjoy skiing, snowboarding, and cozy fires in this picturesque alpine chalet.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1550503736-c1a2c9033c03?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2100,
    location: "Chamonix",
    country: "France",
    geometry: {
      type: "Point",
      coordinates: [6.8652, 45.9237],
    },
  },
  {
    title: "Eco Dome in the Desert",
    description:
      "Unique dome-shaped home in a peaceful desert setting with stunning starry nights.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1698909187035-24bc86598a2e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 700,
    location: "Joshua Tree",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-116.3131, 34.1347],
    },
  },
  {
    title: "Modern Apartment by the Danube",
    description:
      "Sleek and stylish apartment with river views and proximity to historical sites.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1681648113344-dd53951fe767?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1250,
    location: "Budapest",
    country: "Hungary",
    geometry: {
      type: "Point",
      coordinates: [19.0402, 47.4979],
    },
  },
  {
    title: "Safari Lodge",
    description:
      "Luxury lodge with safari access. Spot wildlife from your deck in comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3500,
    location: "Kruger National Park",
    country: "South Africa",
    geometry: {
      type: "Point",
      coordinates: [31.4847, -24.0105],
    },
  },
  {
    title: "Charming Windmill Stay",
    description:
      "Sleep in a historic Dutch windmill converted into a cozy guesthouse.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1661929777732-d0f05c29133a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 980,
    location: "Kinderdijk",
    country: "Netherlands",
    geometry: {
      type: "Point",
      coordinates: [4.6422, 51.8821],
    },
  },
  {
    title: "Scenic Icelandic Cabin",
    description:
      "Wake up to the Northern Lights in this remote cabin surrounded by Icelandic wilderness.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1577130215747-c1a51019ca95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1100,
    location: "Reykjavík",
    country: "Iceland",
    geometry: {
      type: "Point",
      coordinates: [-21.9426, 64.1466],
    },
  },
  {
    title: "Stylish Apartment in Berlin",
    description:
      "Modern comfort meets historic charm in this centrally located Berlin apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1661353013195-051e7ebeaa5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 950,
    location: "Berlin",
    country: "Germany",
    geometry: {
      type: "Point",
      coordinates: [13.405, 52.52],
    },
  },
  {
    title: "Safari Lodge in Kenya",
    description:
      "Enjoy wildlife views from your balcony at this luxurious African safari lodge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586782450797-08574589418c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1800,
    location: "Maasai Mara",
    country: "Kenya",
    geometry: {
      type: "Point",
      coordinates: [35.1439, -1.4931],
    },
  },
  {
    title: "Charming Farm Stay in Provence",
    description:
      "Bask in the lavender fields and rustic elegance of southern France.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=800&q=60",
    },
    price: 1250,
    location: "Provence",
    country: "France",
    geometry: {
      type: "Point",
      coordinates: [5.4474, 43.9493],
    },
  },
  {
    title: "Cave House in Cappadocia",
    description:
      "Stay in an ancient cave home with modern amenities and hot air balloons overhead.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1713711188100-18393a9c98b0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1400,
    location: "Göreme",
    country: "Turkey",
    geometry: {
      type: "Point",
      coordinates: [34.8458, 38.6436],
    },
  },
  {
    title: "Luxury Yurt in the Rockies",
    description:
      "Experience glamping like never before with mountain views and starry nights.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60",
    },
    price: 950,
    location: "Estes Park",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-105.5217, 40.3772],
    },
  },
  {
    title: "Floating Villa in the Maldives",
    description:
      "Live above turquoise waters in this overwater bungalow paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1626461379519-9352f92100b1?q=80&w=2005&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3500,
    location: "Male",
    country: "Maldives",
    geometry: {
      type: "Point",
      coordinates: [73.5042, 4.1755],
    },
  },
  {
    title: "Countryside Cottage in the Cotswolds",
    description:
      "Step into a storybook with this idyllic English cottage surrounded by rolling hills.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1567002260834-61d030a974d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1000,
    location: "Cotswolds",
    country: "United Kingdom",
    geometry: {
      type: "Point",
      coordinates: [-1.7782, 51.8333],
    },
  },
  {
    title: "Elegant Riad in Marrakech",
    description:
      "Enjoy Moroccan architecture, rooftop terraces, and vibrant souks steps away.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585004607620-fb4c44331e73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1300,
    location: "Marrakech",
    country: "Morocco",
    geometry: {
      type: "Point",
      coordinates: [-7.9811, 31.6295],
    },
  },
  {
    title: "Ski Chalet in the Alps",
    description:
      "Hit the slopes then relax by the fireplace in this luxury chalet.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60",
    },
    price: 2700,
    location: "Chamonix",
    country: "France",
    geometry: {
      type: "Point",
      coordinates: [6.8694, 45.9237],
    },
  },
  {
    title: "Desert Dome in Joshua Tree",
    description: "Experience solitude and stars in a cozy dome near Joshua Tree National Park.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1704990095785-7d8722414c01?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 900,
    location: "Joshua Tree",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-116.3131, 34.1347],
    },
  },
  {
    title: "Jungle Treehouse in Costa Rica",
    description: "Live among the trees in this eco-friendly hideaway surrounded by wildlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1693069492053-b3f20ed986a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 800,
    location: "Puntarenas",
    country: "Costa Rica",
    geometry: {
      type: "Point",
      coordinates: [-84.8296, 9.6392],
    },
  },
  {
    title: "Historic Loft in Rome",
    description: "Walk to the Colosseum from this beautifully restored Roman loft.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1556659452-8104614c0e7b?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1450,
    location: "Rome",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [12.4964, 41.9028],
    },
  },
  {
    title: "Zen Hut in Kyoto",
    description: "Meditate in peace at this traditional wooden hut in the hills of Kyoto.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1707879488112-bc2017322422?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1150,
    location: "Kyoto",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [135.7681, 35.0116],
    },
  },
  {
    title: "Secluded Lakehouse in Ontario",
    description: "Paddle your mornings and stargaze your nights in this lakeside retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600373007559-f4a3dad08762?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 950,
    location: "Muskoka",
    country: "Canada",
    geometry: {
      type: "Point",
      coordinates: [-79.3871, 45.0375],
    },
  },
  {
    title: "Bohemian Studio in Barcelona",
    description: "A vibrant artistic space near La Rambla, perfect for creative travelers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618494411565-d6634fd55690?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 980,
    location: "Barcelona",
    country: "Spain",
    geometry: {
      type: "Point",
      coordinates: [2.1734, 41.3851],
    },
  },
  {
    title: "Rooftop Penthouse in Bangkok",
    description: "Soak in skyline views and rooftop pools in this ultra-modern penthouse.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1559693353-ef3d2e6774db?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1600,
    location: "Bangkok",
    country: "Thailand",
    geometry: {
      type: "Point",
      coordinates: [100.5018, 13.7563],
    },
  },
  {
    title: "Snowy Retreat in Lapland",
    description: "Enjoy Arctic adventures and cozy fireside moments in Finnish Lapland.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1612543416302-5280777bb9f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1700,
    location: "Rovaniemi",
    country: "Finland",
    geometry: {
      type: "Point",
      coordinates: [25.7294, 66.5039],
    },
  },
  {
    title: "Island Bungalow in Bali",
    description: "Lush greenery and serenity await in this peaceful Balinese bungalow.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1709166797215-9092d6e4e21c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1050,
    location: "Ubud",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.2625, -8.5069],
    },
  },
  {
    title: "Castle Room in Ireland",
    description: "Stay like royalty in a real Irish castle with stunning countryside views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1579824391159-887ca561f108?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1900,
    location: "Galway",
    country: "Ireland",
    geometry: {
      type: "Point",
      coordinates: [-9.0504, 53.2707],
    },
  },
  {
    title: "Modern Retreat in Seoul",
    description: "Minimalist design meets convenience in this city-chic Korean apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1575031623944-62a63e5e133f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1350,
    location: "Seoul",
    country: "South Korea",
    geometry: {
      type: "Point",
      coordinates: [126.978, 37.5665],
    },
  },
  {
    title: "Ocean View Villa in Cape Town",
    description: "Watch sunsets over the ocean from this luxury cliffside villa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1731336477626-0fc6b6f3082e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2100,
    location: "Cape Town",
    country: "South Africa",
    geometry: {
      type: "Point",
      coordinates: [18.4241, -33.9249],
    },
  },
  {
    title: "Himalayan Hideaway",
    description: "Disconnect in a wooden lodge nestled in the Indian Himalayas.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1606498265550-ccfbb71b54a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1200,
    location: "Manali",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1887, 32.2396],
    },
  },
  {
    title: "Cozy Flat in Prague",
    description: "Explore cobbled streets and historic sights from this charming flat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1609933473809-bd41a3ae8c54?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 990,
    location: "Prague",
    country: "Czech Republic",
    geometry: {
      type: "Point",
      coordinates: [14.4378, 50.0755],
    },
  },
  {
    title: "Beach Shack in Goa",
    description: "Barefoot living just steps from the sand and sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 850,
    location: "Goa",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.8567, 15.2993],
    },
  },
  {
    title: "Sky Lodge in the Andes",
    description: "Sleep suspended on a cliff for the ultimate thrill-seeker's night.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600796753249-89a040bdaf07?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2500,
    location: "Cusco",
    country: "Peru",
    geometry: {
      type: "Point",
      coordinates: [-71.9675, -13.5319],
    },
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259],
    },
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-74.006, 40.7128],
    },
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-106.837, 39.1911],
    },
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7696],
    },
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-122.6765, 45.5231],
    },
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    geometry: {
      type: "Point",
      coordinates: [-86.8515, 21.1619],
    },
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-120.0324, 39.0968],
    },
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.2437, 34.0522],
    },
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    geometry: {
      type: "Point",
      coordinates: [7.2306, 46.0968],
    },
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    geometry: {
      type: "Point",
      coordinates: [34.6857, -2.3333],
    },
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    geometry: {
      type: "Point",
      coordinates: [4.9041, 52.3676],
    },
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    geometry: {
      type: "Point",
      coordinates: [178.065, -17.7134],
    },
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    geometry: {
      type: "Point",
      coordinates: [-1.7782, 51.833],
    },
  },
];

const sampleReviews = [
  { comment: "Amazing experience! Would definitely visit again.", rating: 5 },
  { comment: "Not bad, but room for improvement.", rating: 4 },
  { comment: "Worst experience ever. Would never come back.", rating: 1 },
  { comment: "Great location and ambiance.", rating: 4 },
  { comment: "The view was stunning. Highly recommend!", rating: 5 },
  {
    comment: "The room was clean, but the service could be better.",
    rating: 3,
  },
  { comment: "Totally worth the money!", rating: 5 },
  {
    comment:
      "Had a few issues with the check-in process, but overall a nice stay.",
    rating: 3,
  },
  {
    comment: "Beautiful place, but the staff wasn’t very friendly.",
    rating: 2,
  },
  {
    comment: "Would love to visit again. The staff was super friendly.",
    rating: 4,
  },
  { comment: "Comfortable, but a bit overpriced for what you get.", rating: 3 },
  {
    comment: "Perfect for a weekend getaway. Would highly recommend!",
    rating: 5,
  },
  { comment: "Disappointed with the cleanliness of the room.", rating: 2 },
  { comment: "Had an amazing time! The food was excellent.", rating: 5 },
  { comment: "Good value for the price.", rating: 4 },
  {
    comment: "The location was fantastic, but the room was a bit small.",
    rating: 3,
  },
  { comment: "Not worth the price. Wouldn’t return.", rating: 1 },
  { comment: "Excellent service, would stay again!", rating: 5 },
  { comment: "Not a bad experience, but could be better.", rating: 3 },
  { comment: "The room was noisy, couldn't sleep well.", rating: 2 },
  { comment: "Lovely atmosphere and nice amenities.", rating: 4 },
  { comment: "Horrible stay, wouldn't recommend it.", rating: 1 },
  { comment: "The decor was amazing! Loved the vibe.", rating: 5 },
  { comment: "Fairly decent experience, would try other places.", rating: 3 },
  {
    comment: "An unforgettable stay! Highly recommend for a relaxing vacation.",
    rating: 5,
  },
  {
    comment: "The breakfast was disappointing, but everything else was good.",
    rating: 3,
  },
  { comment: "Nice but could use some maintenance.", rating: 2 },
  { comment: "Perfect for a relaxing stay. Everything was great!", rating: 5 },
  { comment: "Location is prime. Great for business trips.", rating: 4 },
  { comment: "Had a fantastic experience. Will return.", rating: 5 },
  {
    comment: "The room was not as advertised. Not a pleasant surprise.",
    rating: 2,
  },
  {
    comment: "The experience was okay, but the WiFi was very slow.",
    rating: 3,
  },
  {
    comment: "Best stay ever! Everything exceeded my expectations.",
    rating: 5,
  },
  { comment: "Not very satisfied with the food options.", rating: 2 },
  { comment: "Great location, great price. Would stay again.", rating: 4 },
  { comment: "Check-in took forever, but the room was decent.", rating: 3 },
  { comment: "Superb view and friendly staff.", rating: 4 },
  { comment: "Very disappointed. Expected more for the price.", rating: 1 },
  {
    comment: "Amazing view, great staff, would definitely recommend.",
    rating: 5,
  },
  { comment: "Rooms were nice, but not very spacious.", rating: 3 },
  { comment: "Exceeded all expectations! Will be back.", rating: 5 },
  {
    comment: "The hotel was great, but the neighborhood wasn’t that great.",
    rating: 3,
  },
  { comment: "Staff was unprofessional, but the room was nice.", rating: 2 },
  { comment: "Fantastic place for a family getaway!", rating: 4 },
  { comment: "Disappointed with the customer service.", rating: 2 },
  { comment: "An incredible stay, perfect for a weekend retreat.", rating: 5 },
  { comment: "Good, but I expected more for the price.", rating: 3 },
  {
    comment: "The location was superb, but the room needed some work.",
    rating: 3,
  },
  {
    comment: "Very relaxing. Highly recommended for a peaceful stay.",
    rating: 4,
  },
  { comment: "Great, but overpriced.", rating: 3 },
  {
    comment: "Excellent experience! Couldn’t ask for a better stay.",
    rating: 5,
  },
  {
    comment: "Great hotel, but the parking situation was a bit difficult.",
    rating: 3,
  },
  { comment: "Very nice hotel with wonderful staff.", rating: 4 },
  {
    comment: "The bed was uncomfortable, but everything else was fine.",
    rating: 3,
  },
  {
    comment: "A little expensive, but worth it for the experience.",
    rating: 4,
  },
  { comment: "One of the best stays I've had in a while!", rating: 5 },
  { comment: "Good stay but lacked some basic amenities.", rating: 2 },
  { comment: "A memorable stay, will come back again.", rating: 4 },
  { comment: "Not great, the room wasn’t clean.", rating: 2 },
  { comment: "Perfect experience! Highly recommended.", rating: 5 },
];

module.exports = { sampleListings, sampleReviews };
