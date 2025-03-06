import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || t("home.guest");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">My App</div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">{userName}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              {t("home.logout")}
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {t("home.welcome")}
          </h1>
          <p className="text-gray-600">{t("home.description")}</p>
        </div>
      </div>
    </div>
  );
}
