import { Icon } from "@iconify/react";

import { SideNavItem } from "@/types/SidebarTypes";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Manage Books",
    path: "/book",
    icon: (
      <Icon
        icon="lucide:book"
        width="24"
        height="24"
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    ),
    submenu: true,
    subMenuItems: [
      { title: "All books", path: "/book" },
      { title: "Add a book", path: "/book/add" },
    ],
  },
  {
    title: "Lend Books",
    path: "/borrow",
    icon: (
      <Icon
        icon="lucide:notebook-pen"
        width="24"
        height="24"
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    ),
    submenu: true,
    subMenuItems: [
      { title: "Lending History", path: "/borrow" },
      { title: "Lend a book", path: "/borrow/add" },
    ],
  },
  {
    title: "Book Categories",
    path: "/category",
    icon: (
      <Icon
        icon="material-symbols:category-outline"
        width="24"
        height="24"
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    ),
  },
  {
    title: "User Management",
    path: "/user",
    icon: (
      <Icon
        icon="lucide:user"
        width="24"
        height="24"
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    ),
    submenu: true,
    subMenuItems: [
      { title: "All Users", path: "/user" },
      { title: "Add a user", path: "/user/add" },
    ],
  },
];
