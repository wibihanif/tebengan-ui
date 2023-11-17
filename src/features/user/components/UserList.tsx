import React from "react";
import { HeaderSection } from "./HeaderSection";
import { UserListTable } from "./table/UserListTable";

export const UserList: React.FC = () => {
  return (
    <div>
      <HeaderSection />
      <UserListTable />
    </div>
  );
};
