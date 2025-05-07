import { create } from "zustand";

const useThemeStore = create((set) => ({
  theme: "light",

  setTheme: (theme) => {
    set({ theme });
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  },

  toggleTheme: () => {
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);

      if (newTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }

      return { theme: newTheme };
    });
  },
}));

export default useThemeStore;
