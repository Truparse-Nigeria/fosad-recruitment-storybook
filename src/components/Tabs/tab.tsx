import React, { FC, ReactElement, ReactText } from "react";

export interface TabProps {
  children?: ReactElement | ReactElement[];
  title?: string;
}

const Tab: FC<TabProps> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default Tab;
