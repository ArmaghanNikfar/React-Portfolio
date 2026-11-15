import { useEffect, useState } from "react";

function getInitialTheme() {
  const saved = localStorage.getItem("theme"); // Check if user has set a theme preference in localStorage
  if (saved) return saved; // If a saved theme is found, return it
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"; // If no saved theme, check the user's system preference and return 'dark' or 'light' accordingly
  // نتیجه قسمت بالا این است که آیا تم سیستم الان روی تاریک است یا روشن؟ و بولین برمیکرداند
}

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme); // Initialize the theme state with the user's saved preference or system preference

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  // این قسمت هر بار با آپدیت شدن روی تگ اچ تی ام ا ل برچسب تم میگذارد تا سی اس اس تغییر کند

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));
  return { theme, toggleTheme };
  // این دو را در قالب پراپس برمیگردانیم تا کامپوننت تغییراتش اعمال شود
}
