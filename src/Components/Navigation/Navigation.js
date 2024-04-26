import { useNavigate } from "react-router-dom";
const useNavigation = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToSavedArticles = () => {
    navigate("/saved-news");
  };
  return navigateToHome, navigateToSavedArticles;
};

export default useNavigation;
