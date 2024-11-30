# Golds Gym Website 🏋️‍♂️💪  

Welcome to the **Golds Gym Website**! This gym website allows you to explore a variety of exercises, view detailed exercise information, get YouTube video suggestions, and discover similar exercises targeting the same muscle groups. 🚴‍♀️💥  

**Live Demo**: [Gold's Gym Website](https://golds-gym-by-aps.vercel.app/)  

## 🛠️ Key Features:  
- **Exercise List** 📋: Browse through a list of exercises.  
- **Pagination** 🔢: Navigate through pages of exercises with pagination support.  
- **Exercise Detail Page** 📑: View detailed information about each exercise, including a YouTube video tutorial 🎥.  
- **Similar Exercises** 🔄: Suggested exercises targeting the same muscle group.  
- **YouTube Video Integration** 🎬: Fetch and display related YouTube videos for each exercise using the RapidAPI YouTube API.  

## 💻 Technologies Used:  
- **React** ⚛️: A JavaScript library for building user interfaces.  
- **Material UI** 🎨: A React component library for building user interfaces with a Material Design style.  
- **Vite** ⚡: A fast build tool and development server.  
- **Rapid API** 🌐: Provides access to Exercise and YouTube data.  
- **React Router** 🚗: For routing and navigation between pages.  

## 📦 Setup Instructions  

### 1. Clone the Repository  

Start by cloning the repository to your local machine:  

```bash  
git clone https://github.com/AnujPratap-96/golds-gym-website.git  
cd golds-gym-website  
```  

### 2. Install Dependencies  

Now, install all the necessary dependencies using npm:  

```bash  
npm install  
```  

### 3. Set Up API Keys 🔑  

You’ll need to get API keys for **RapidAPI** and **YouTube**:  

- **RapidAPI Key for Exercise API**:  
  - Sign up on [RapidAPI](https://rapidapi.com/) and subscribe to the ExerciseDB API.  
  - Place `YOUR_RAPID_API_KEY` in the `.env` like `VITE_RAPID_API_KEY_EXERCISE`.  

- **RapidAPI Key for Youtube Search and Download API**:  
  - Sign up on [RapidAPI](https://rapidapi.com/) and subscribe to the Youtube Search and Download API.  
  - Place `YOUR_RAPID_API_KEY` in the `.env` like `VITE_RAPID_API_KEY_YOUTUBE`.  

### 4. Run the Development Server 🚀  

After installing the dependencies and setting up the API keys, run the development server:  

```bash  
npm run dev  
```  

This will start the app on `http://localhost:3000`.  

### 5. Build the Project 🏗️  

To build the project for production, use:  

```bash  
npm run build  
```  

This creates an optimized production build in the `dist` folder.  

### 6. Preview the Build 🔍  

To preview the production build locally:  

```bash  
npm run preview  
```  

## 📡 API Endpoints:  

### Exercise API:  
- `GET /exercises?limit=10&page={page}`: Fetches a paginated list of exercises.  
- `GET /exercise/{id}`: Fetches detailed information about a specific exercise.  

### YouTube API:  
- `GET /search`: Fetches YouTube video suggestions for a given exercise query.  

## 📝 License  

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.  

## 🙏 Acknowledgements  

- 🌍 [RapidAPI](https://rapidapi.com/) for providing access to Exercise and YouTube APIs.  
- 🎨 [Material UI](https://mui.com/) for providing a UI component library.  
- ⚛️ [React](https://reactjs.org/) for building the user interface.  
- ⚡ [Vite](https://vitejs.dev/) for fast development and build tool.  
