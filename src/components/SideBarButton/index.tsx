import { ReactNode } from "react";

import { Button } from "./styles";

interface SideBarButtonProps {
  children: ReactNode;
}

export const SideBarButton = ({ children }: SideBarButtonProps) => {
  return <Button>{children}</Button>;
};
