import React from "react";
import Header from "../components/ProfilePage/Header";
import ProfileCard from "../components/ProfilePage/ProfileCard";
import Section from "../components/ProfilePage/Section";
import Footer from "../components/Footer";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col">
      <Header />

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-10 space-y-6">
        <ProfileCard />

        <Section
          title="Tài khoản"
          items={[
            "Quản lý gói đăng ký",
            "Chỉnh sửa thông tin cá nhân",
            "Khôi phục danh sách phát",
          ]}
        />

        <Section
          title="Thanh toán"
          items={["Lịch sử đặt hàng", "Thẻ thanh toán đã lưu", "Đổi quà tặng"]}
        />

        <Section
          title="Bảo mật và quyền riêng tư"
          items={[
            "Đổi mật khẩu",
            "Quản lý đăng nhập",
            "Cài đặt thông báo",
            "Quyền riêng tư của tài khoản",
            "Chỉnh sửa phương thức đăng nhập",
            "Đăng xuất mọi nơi",
          ]}
        />

        <Section title="Advertising" items={["Ad preferences"]} />
        <Section title="Trợ giúp" items={["Nhận hỗ trợ từ Spotify"]} />
      </main>

      <Footer />
    </div>
  );
};

export default ProfilePage;
