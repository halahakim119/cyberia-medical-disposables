import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import classnames from "classnames";
import { SelectedPage } from "@/shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link: React.FC<Props> = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  const linkClass = classnames({
    "transition duration-500 ": true,
    "text-secondary-500": selectedPage === lowerCasePage,
  });

  return (
    <AnchorLink
      className={linkClass}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
