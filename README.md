# ScaryFlix - Movie Discovery App By Seyfadin A

https://scaryflix1.vercel.app/

ScaryFlix is a movie discovery web app that allows users to explore top-rated and popular movies using data from The Movie Database (TMDb). The app offers a modern and interactive design, showcasing movies in a visually appealing grid layout.

## Features

- Browse **Top Rated Movies** and **Popular Movies**.
- View movie details such as release date and title.
- **Responsive Design**: Optimized for mobile and desktop.
- **Watch Now Button**: Quickly navigate to movie streaming pages (or placeholders).

## Tech Stack

- **Frontend**: React.js
- **API**: The Movie Database (TMDb) API
- **CSS**: Custom styles with media queries for responsive design.
- **Version Control**: Git

## Installation

### Prerequisites

To run this project locally, you'll need:

- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)

### Steps to Set Up the Project

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/ScaryFlix.git
    cd ScaryFlix
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up your TMDb API key**:
    - Sign up for an API key at [TMDb API](https://www.themoviedb.org/settings/api).
    - Create a `.env` file in the root of the project with the following content:
      ```env
      REACT_APP_API_KEY=your_tmdb_api_key
      ```

4. **Start the development server**:
    ```bash
    npm start
    ```
    This will run the app locally on `http://localhost:3000`.



## Project Structure


## How to Contribute

We welcome contributions to ScaryFlix! To contribute:

1. **Fork the repository**.
2. **Clone your fork** locally.
    ```bash
    git clone https://github.com/yourusername/ScaryFlix.git
    ```
3. **Create a new branch** for your changes:
    ```bash
    git checkout -b feature/your-feature-name
    ```
4. **Make your changes** and test them.
5. **Commit your changes** with a descriptive message:
    ```bash
    git commit -m "Add feature X"
    ```
6. **Push your branch**:
    ```bash
    git push origin feature/your-feature-name
    ```
7. **Open a Pull Request** with a clear description of your changes.

## Demo

You can view a live demo of ScaryFlix [here](https://your-demo-url.com).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **TMDb API** for providing movie data.
- **Swiper.js** for creating the smooth carousel feature (before the grid transition).
- **React** for an awesome UI framework.

---

### Notes:
- Replace placeholders such as `https://github.com/yourusername/ScaryFlix.git` and `https://your-demo-url.com` with the actual URL.
- Customize any section (e.g., Demo, Acknowledgments) to better fit your project.

This structure should help any developer (or user) understand how to use, contribute to, and set up the project! Let me know if you'd like any further customizations to the README.
