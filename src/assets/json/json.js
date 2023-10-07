import { ROUTES } from "../../helpers/routes";
import HomeIcon from "./../home-icon.svg";
import InsightIcon from "./../insight-icon.svg";
import WalletIcon from "./../wallet-icon.svg";
import UserIcon from "./../user-icon.svg";

export const menu = [
  {
    link: ROUTES.HOME,
    text: "Home",
    staleIcon: HomeIcon,
    activeIcon: HomeIcon,
  },
  {
    link: ROUTES.INSIGHT,
    text: "Insight",
    staleIcon: InsightIcon,
    activeIcon: InsightIcon,
  },
  {
    link: ROUTES.WALLET,
    text: "Wallet",
    staleIcon: WalletIcon,
    activeIcon: WalletIcon,
  },
  {
    link: ROUTES.USER,
    text: "User",
    staleIcon: UserIcon,
    activeIcon: UserIcon,
  },
];
