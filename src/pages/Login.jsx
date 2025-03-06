import { useTranslation } from "react-i18next";
import { useApiRequest } from "../api/hooks";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { t } = useTranslation();
  const { run, loading } = useApiRequest("/login", { method: "POST" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    run(Object.fromEntries(formData));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          {t("login")}
        </h2>

        <div className="flex flex-col gap-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 text-white font-medium p-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Loading..." : t("login")}
        </button>

        {/* Register Navigation Link */}
        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm">
            {t("no_account")}{" "}
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="text-blue-600 font-medium hover:underline focus:outline-none"
            >
              {t("signup")}
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
