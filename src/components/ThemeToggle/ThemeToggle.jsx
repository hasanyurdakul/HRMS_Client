import React from "react";
import { useThemeProvider } from "../../utils/ThemeContext";
import { DarkMode, LightMode } from "@mui/icons-material";

export default function ThemeToggle() {
  const { currentTheme, changeCurrentTheme } = useThemeProvider();

  return (
    <div>
      <input
        type="checkbox"
        name="light-switch"
        id="light-switch"
        className="light-switch sr-only"
        checked={currentTheme === "light"}
        onChange={() =>
          changeCurrentTheme(currentTheme === "light" ? "dark" : "light")
        }
      />
      <label
        className="flex items-center justify-center cursor-pointer w-8 h-8 hover:bg-gray-100 lg:hover:bg-gray-200 dark:hover:bg-gray-700/50 dark:lg:hover:bg-gray-800 rounded-full"
        htmlFor="light-switch"
      >
        <LightMode className="dark:hidden w-4 h-4 fill-current text-gray-500/80 dark:text-gray-400/80" />
        {currentTheme == "dark" ? (
          <DarkMode className="w-4 h-4 hidden dark:block fill-current text-gray-500/80 dark:text-gray-400/80" />
        ) : (
          <></>
        )}

        <span className="sr-only">Switch to light / dark version</span>
      </label>
    </div>
  );
}
