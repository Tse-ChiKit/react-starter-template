import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        register: {
          title: "Create Account",
          name: "Full Name",
          email: "Email Address",
          password: "Password",
          submit: "Sign Up",
          haveAccount: "Already have an account? Sign in",
          success: "Registration successful!",
          error: "Registration failed",
        },
        home: {
          welcome: "Welcome Back!",
          description: "You have successfully logged in to your account.",
          logout: "Logout",
          guest: "Guest",
        },
        common: {
          loading: "Processing...",
        },
      },
    },
    zh: {
      translation: {
        register: {
          title: "创建账户",
          name: "姓名",
          email: "邮箱地址",
          password: "密码",
          submit: "立即注册",
          haveAccount: "已有账户？立即登录",
          success: "注册成功！",
          error: "注册失败",
        },
        home: {
          welcome: "欢迎回来！",
          description: "您已成功登录您的账户。",
          logout: "退出登录",
          guest: "访客",
        },
        common: {
          loading: "处理中...",
        },
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
});

export default i18n;
