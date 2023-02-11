import { useEffect, useRef, useState } from "react";
import arrow from "../assets/image/arrow.svg";
import Info from "./Info";
import Loader from "./Loader";
import MyMap from "./Map";

function Header() {
  const [data, setData] = useState({});
  const [inputText, setText] = useState("");
  const [refetch, setRefetch] = useState(true);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setLoading(true);
      fetch(`https://ipapi.co/${inputText}/json/`)
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setError(data.reason);
            setLoading(false);
          } else {
            setData(data);
            setLoading(false);
          }
        });
    }
  }, [refetch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputText.trim().length) {
      setText("5.197.252.165");
    }
    setError(null);
    setRefetch(!refetch);
  };
  return (
    <div className="container">
      <header>
        <h1>IP Address Tracker</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            name="inputValue"
            value={inputText}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">
            <span className="arrow">
              <img src={arrow} alt="" />
            </span>
          </button>
        </form>
        {!loading && !error && <Info data={data} />}
      </header>
      {loading ? (
        <Loader />
      ) : error ? (
        <h1
          style={{
            backgroundColor: "red",
            width: "50%",
            margin: "1rem auto",
            textAlign: "center",
            color: "white",
          }}
        >
          {error}
        </h1>
      ) : (
        <MyMap data={data} />
      )}
    </div>
  );
}

export default Header;
