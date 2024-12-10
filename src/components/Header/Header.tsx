"use client";
import Image from "next/image";
import styles from "./header.module.css";
import { Dropdown, Menu, MenuProps, Space, message } from "antd";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Header() {
  const USER_ITEMS: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href={`/user/edit/`}>Profile</Link>,
    },
    {
      key: "2",
      label: (
        <span
          onClick={async () => {
            // await setLogout();
            // localStorage.removeItem("user");
            // message.success("退出成功");
            // router.push("/login");
          }}
        >
          Log out
        </span>
      ),
    },
  ];
  return (
    <div className={`flex justify-between ${styles.header} py-6 px-4 xl:px-6`}>
      <div className={styles.logoWrapper}>
        <Image
          src="/logo.svg"
          width={30}
          height={30}
          alt="logo"
          className={styles.logo}
        />
        Library Management System
      </div>
      <Dropdown
        menu={{ items: USER_ITEMS }}
        placement="bottom"
        className={styles.dropdown}
      >
        <span onClick={(e) => e.preventDefault()}>
          <Space>
            {/* {user?.nickName} */}
            User
            <Icon
              icon="lucide:chevron-down"
              width="24"
              height="24"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
          </Space>
        </span>
      </Dropdown>
    </div>
  );
}
