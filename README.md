# Weather App MERN
A weather application built with React and Vite, fetching current weather conditions for any city via the OpenWeatherMap API. It features a responsive UI with a blue-to-purple gradient card and Poppins font. Future plans include full MERN stack integration with Express.js, Node.js, and MongoDB for features like search history.

## Table of Contents

## Features
Technologies Used
Prerequisites
Installation
Environment Variables
Running the Application
Project Structure
API Usage
Usage
Contributing
License

## Features

Search weather by city name using a responsive search bar
Display temperature (°C), humidity (%), wind speed (km/hr), location, and weather icon
Default weather for "New Delhi" on initial load
Responsive UI with a gradient card (blue #2f4680 to purple #500ae4) and Poppins font
Hot Module Replacement (HMR) via Vite for fast development
ESLint for code quality and consistency
Basic error handling for invalid city names (logged to console)
Planned: Backend integration for API proxying and search history storage
[Add more features here, e.g., weather forecast, user settings]

## Technologies Used

- React: Frontend library for dynamic UI
- Vite: Build tool with HMR and fast builds
- Fetch API: For OpenWeatherMap API requests
- OpenWeatherMap API: Weather data source
- Poppins Font: Via Google Fonts for typography
- CSS: Custom styles for gradient card and responsive layout
- ESLint: Code linting for quality
- Planned: Express.js, Node.js, MongoDB for full MERN stack [Add other tools here, e.g., Axios, Tailwind CSS]

## Prerequisites

- Node.js (v16 or higher)
- OpenWeatherMap API key (sign up)
- Git[Add prerequisites here, e.g., MongoDB for future backend]

## Installation Instructions

1. **Clone the repository**:
```bash
 git clone https://github.com/PriyankaKumari-123-82/Weather-app-mern.git
 cd Weather-app-mern
```


2. **Install dependencies**:
```bash
npm install
```

3. **Environment Variables**:
  Create a .env file in the project root:
```bash
 VITE_APP_ID=your_openweathermap_api_key
```

**Note: For future backend integration, create a server/.env with:**
```bash
PORT=5000
WEATHER_API_KEY=your_openweathermap_api_key
```

## Running the Application

-**Start the development server**:
```bash
npm run dev
```

Open http://localhost:5173 (or Vite’s default port) in your browser.

**Future MERN Setup:**

Start backend: cd server && npm start
Ensure MongoDB is running (if implemented)


##Project Structure
```bash
Weather-app-mern/
├── public/                 # Static assets
├── src/                    # React source code
│   ├── assets/             # Images (search.png, humidity.png, wind.png)
│   ├── components/         # Weather.jsx, Weather.css
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles (Poppins font, purple theme #e2d4ff)
├── .env                    # Vite environment variables
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── .eslintrc.cjs           # ESLint configuration
├── README.md               # This file
└── .gitignore              # Git ignore file
```

### API Usage
The frontend directly calls the OpenWeatherMap API:

### Endpoint:
**GET**
```bash
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={key}
```

### Parameters:
```bash
q: City name (e.g., "London")
appid: Your API key
```

**Response:** Includes temperature (Kelvin, converted to °C), humidity, wind speed, location, and weather icon


**Planned Backend:**
```bash
GET /api/weather/:city: Proxy to OpenWeatherMap
```
[Add endpoints here, e.g., /api/history for MongoDB storage]


### Usage

- Run npm run dev and visit http://localhost:5173.
- The app loads with New Delhi’s weather by default.
- Enter a city name in the search bar and click the search icon.
- View weather details: temperature (°C), humidity (%), wind speed (km/hr), and weather icon.


[Add usage details here, e.g., error messages, additional features]

### Contributing

- Fork the repository.
- Create a branch: git checkout -b feature/your-feature.
- Commit changes: git commit -m "Add your feature".
- Push to the branch: git push origin feature/your-feature.
- Submit a pull request to PriyankaKumari-123-82/Weather-app-mern.


[Add guidelines here, e.g., follow ESLint rules or coding standards]

### License
MIT License
