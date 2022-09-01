import { useEffect, useState } from "react";
import "./Scroll.css";

function Scroll() {
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    const handler = () => setY(window.scrollY);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return <header className={y === 0 ? "up" : "not-up"}>MyScroll</header>;
}

export default Scroll;
