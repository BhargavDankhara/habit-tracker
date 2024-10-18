import React from "react";
import { useGlobalContextProvider } from "@/app/contextApi";
import { menuItemType } from "@/app/types/MenuItemType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuSelection() {
  const { menuItemsObject } = useGlobalContextProvider();
  const { menuItems } = menuItemsObject;

  return (
    <div className="mt-[180px]">
      {menuItems.map((menuItem: menuItemType, menuItemIndex: number) => (
        <div key={menuItemIndex}>
          <SingleMenuItem menuItemProp={menuItem} />
        </div>
      ))}
    </div>
  );
}

function SingleMenuItem({ menuItemProp }: { menuItemProp: menuItemType }) {
  const { menuItemsObject } = useGlobalContextProvider();
  const { menuItems, setMenuItems } = menuItemsObject;

  function handleClickedItems() {
    const copyMenuItems = menuItems.map((menuItem) => {
      if (menuItemProp === menuItem) {
        return { ...menuItem, isSelected: true };
      }

      return { ...menuItem, isSelected: false };
    });

    setMenuItems(copyMenuItems);
  }

  return (
    <div
      onClick={handleClickedItems}
      className={`flex gap-2 items-center p-2 mb-3 ml-8 cursor-pointer rounded-md w-36 ${
        menuItemProp.isSelected
          ? "bg-customRed text-white transition-all"
          : "hover:text-customRed"
      }`}
    >
      <FontAwesomeIcon
        className=""
        icon={menuItemProp.icon}
        width={20}
        height={20}
      />
      <div>{menuItemProp.name}</div>
    </div>
  );
}
