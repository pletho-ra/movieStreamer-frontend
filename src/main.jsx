import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./global.css";
import { HoverProvider } from "./contexts/HoverContext.jsx";
import { MovieProvider } from "./contexts/MovieProvider.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MovieProvider>
        <HoverProvider>
          <App />
        </HoverProvider>
      </MovieProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
