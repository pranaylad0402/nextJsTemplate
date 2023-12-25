"use client";
import React, { useEffect } from "react";

const ToggleTheme = () => {
  const localTheme =
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light";
  const [theme, setTheme] = React.useState(localTheme);
  const changeTheme = (themeName: string) => {
    setTheme(themeName);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", themeName);
    }
    document?.querySelector("html")?.setAttribute("data-theme", themeName);
  };
  // initially set the theme and "listen" for changes to apply them to the HTML tag
  useEffect(() => {
    document?.querySelector("html")?.setAttribute("data-theme", localTheme);
  }, []);
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">
        Theme ({theme})
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
      >
        <li>
          <div
            onClick={() => {
              changeTheme("dark");
            }}
          >
            Dark
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              changeTheme("light");
            }}
          >
            Light
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              changeTheme("cupcake");
            }}
          >
            Cupcake
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ToggleTheme;
