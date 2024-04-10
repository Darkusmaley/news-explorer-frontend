import React from "react";

const SavedArticleContext = React.createContext({
  link: "",
  title: "",
  description: "",
  publisher: "",
});

export { SavedArticleContext };
