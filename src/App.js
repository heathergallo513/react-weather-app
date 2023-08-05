import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/heather-gallo3/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Heather Gallo{" "}
          </a>
          and is{" "}
          <a
            href="https://github.com/heathergallo513/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
          and is hosted on{" "}
          <a
            href="https://tranquil-baklava-8b8362.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
