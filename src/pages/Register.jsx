import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useApiRequest } from "@/api/hooks";

export default function Register() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { run, loading } = useApiRequest({
    url: "/register",
    method: "POST",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    run(data, {
      onSuccess: () => {
        alert(t("register.success"));
        navigate("/login");
      },
      onError: (error) => {
        alert(error.message || t("register.error"));
      },
    });
  };

  return (
    <div className="min-h-screen bg-surface-secondary flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold text-brand-primary">
          {t("register")}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-surface-primary py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-border-default">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* 姓名输入 */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-text-primary"
              >
                {t("name")}
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="input-field-base"
                />
              </div>
            </div>

            {/* 邮箱输入 */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-text-primary"
              >
                {t("email")}
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="input-field-base"
                />
              </div>
            </div>

            {/* 密码输入 */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-text-primary"
              >
                {t("password")}
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="input-field-base"
                />
              </div>
            </div>

            {/* 提交按钮 */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium 
                         text-surface-primary bg-brand-primary 
                         hover:bg-brand-primary-hover 
                         focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2
                         transition-colors duration-200
                         disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? t("common.loading") : t("submit")}
              </button>
            </div>
          </form>

          {/* 登录链接 */}
          <div className="mt-6 text-center">
            <button
              onClick={() => navigate("/login")}
              className="text-brand-accent hover:text-brand-accent-hover text-sm 
                       focus:outline-none focus:ring-2 focus:ring-brand-accent focus:rounded-sm
                       transition-colors duration-200"
            >
              {t("haveAccount?")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
