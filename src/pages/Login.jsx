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
    <div className="min-h-screen flex items-center justify-center bg-surface-secondary px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-8 bg-surface-primary rounded-xl shadow-lg border border-border-default"
      >
        {/* 主标题 - 使用品牌主色 */}
        <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
          {t("login")}
        </h2>

        <div className="flex flex-col gap-5">
          {/* 输入框 - 带聚焦状态指示 */}
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="p-3 border border-border-default rounded-lg 
                     placeholder:text-text-secondary
                     focus:outline-none focus:ring-2 focus:ring-brand-primary-100
                     transition-all duration-200"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="p-3 border border-border-default rounded-lg
                     placeholder:text-text-secondary
                     focus:outline-none focus:ring-2 focus:ring-brand-primary-100
                     transition-all duration-200"
          />
        </div>

        {/* 主按钮 - 完整交互状态 */}
        <button
          type="submit"
          className="w-full mt-6 bg-brand-primary text-surface-primary font-semibold p-3 rounded-lg
                   hover:bg-brand-primary-hover active:bg-brand-primary-active 
                   focus:outline-none focus:ring-2 focus:ring-brand-primary-100
                   transition-colors duration-200
                   disabled:opacity-70 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? t("loading") : t("login")}
        </button>

        {/* 注册链接 - 使用辅助强调色 */}
        <div className="mt-6 text-center">
          <p className="text-neutral-500 text-sm">
            {t("no_account")}{" "}
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="text-brand-accent font-medium 
                       hover:text-brand-accent-hover hover:underline 
                       focus:outline-none focus:ring-2 focus:ring-brand-accent-100
                       transition-colors duration-200"
            >
              {t("signup")}
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
