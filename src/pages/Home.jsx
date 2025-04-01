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
    <div className="min-h-screen bg-surface-secondary">
      {/* 导航栏 - 增加底部边框 */}
      <nav className="bg-surface-primary border-b border-border-default">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* 品牌标识 - 使用品牌主色 */}
          <div className="text-xl font-bold text-brand-primary">My App</div>

          {/* 用户操作区 */}
          <div className="flex items-center space-x-4">
            {/* 用户名 - 使用次级文字色 */}
            <span className="text-text-secondary">{userName}</span>

            {/* 登出按钮 - 完整交互状态 */}
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-brand-primary text-surface-primary rounded-md 
                       hover:bg-brand-primary-hover active:bg-brand-primary-active
                       focus:outline-none focus:ring-2 focus:ring-brand-primary-100
                       transition-colors duration-200"
            >
              {t("home.logout")}
            </button>
          </div>
        </div>
      </nav>

      {/* 主内容区 - 使用卡片布局 */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div
          className="bg-surface-primary rounded-xl shadow-sm 
                    border border-border-default p-8 text-center"
        >
          {/* 主标题 - 强调品牌色 */}
          <h1 className="text-4xl font-bold text-brand-primary mb-4">
            {t("home.welcome")}
          </h1>

          {/* 描述文字 - 分层文字颜色 */}
          <p className="text-text-primary leading-6">
            {t("home.description")}

            {/* 强调文字片段 */}
            <span className="text-brand-accent font-medium mx-2">
              {t("home.highlight")}
            </span>

            {/* 辅助信息 */}
            <span className="text-text-secondary text-sm block mt-2">
              {t("home.subtext")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
