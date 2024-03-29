"use client";
import { Drawer, Layout, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

const { Content, Sider } = Layout;

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const adminItems = [
    { key: "1", label: "Dashboard", href: "/dashboard" },
    { key: "2", label: "Manage Services", href: "/admin/manage-services" },
    { key: "3", label: "My Bookings", href: "/user/my-bookings" },
    { key: "4", label: "Back Home", href: "/" },
  ];

  const pathname = usePathname();
  const getSelectedKey = () => {
    return adminItems.find((item) => item.href === pathname)?.key || "";
  };

  return (
    <Layout>
      <Content>
        <Layout className="lg:flex hidden">
          <Sider
            width={250}
            className="min-h-screen bg-[#1677ff] m-6 py-2 rounded-xl"
          >
            <Menu
              className="h-full px-3 font-semibold  bg-transparent py-1"
              mode="inline"
              defaultSelectedKeys={[getSelectedKey()]}
              selectedKeys={[getSelectedKey()]}
            >
              {adminItems?.map((item) => (
                <Menu.Item key={item.key} className="text-blue-900">
                  <Link href={item.href}>{item.label}</Link>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Content className=" p-6 pl-0 min-h-screen">{children}</Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default Sidebar;
