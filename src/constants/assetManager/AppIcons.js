import HomeIcon from "@assets/icons/home-page.svg";
import News from "@assets/icons/news.svg";
import Bookmarks from "@assets/icons/bookmarks.svg";
import Sports from "@assets/icons/sports.svg";
import Finance from "@assets/icons/finance.svg";
import Travel from "@assets/icons/travel.svg";
import Culture from "@assets/icons/culture.svg";
import Weather from "@assets/icons/weather.svg";
import Contact from "@assets/icons/contact.svg";
import Dollar from "@assets/icons/dollar.svg";
import Pay from "@assets/icons/pay.svg";
import UserIcon from "@assets/icons/user.svg";
import ActivityHistory from "@assets/icons/activity-history.svg";
import CardPayment from "@assets/icons/card-payment.svg";
import Fingerprint from "@assets/icons/fingerprint.svg";
import AppIcon from "@assets/icons/app.svg";
import SettingsIcon from "@assets/icons/settings.svg";
import SupportIcon from "@assets/icons/support.svg";
import Logout from "@assets/icons/logout.svg";
import Bookmark from "@assets/icons/bookmark-empty.svg";
import Bookmark2 from "@assets/icons/bookmark-filled.svg";
import Search from "@assets/icons/search.svg";
import Clap from "@assets/icons/clap.svg";
import Message from "@assets/icons/message.svg";
import Share from "@assets/icons/share.svg";
import More from "@assets/icons/more.svg";
import Back from "@assets/icons/back.svg";
import Close from "@assets/icons/close.svg";
import Linkedin from "@assets/icons/linkedin.svg";
import Github from "@assets/icons/github.svg";
import ComputerDead from "@assets/icons/computer-dead.svg";
import ComputerWarning from "@assets/icons/computer-warning.svg";
import Clear from "@assets/icons/clear.svg";

class AppIcons {
  static GetIcon(type) {
    switch (type) {
      case "home":
        return HomeIcon;
      case "news":
        return News;
      case "bookmarks":
        return Bookmarks;
      case "sports":
        return Sports;
      case "finance":
        return Finance;
      case "travel":
        return Travel;
      case "culture":
        return Culture;
      case "weather":
        return Weather;
      case "contact":
        return Contact;
      case "dollar":
        return Dollar;
      case "pay":
        return Pay;
      case "user":
        return UserIcon;
      case "activity-history":
        return ActivityHistory;
      case "card-payment":
        return CardPayment;
      case "fingerprint":
        return Fingerprint;
      case "app":
        return AppIcon;
      case "settings":
        return SettingsIcon;
      case "support":
        return SupportIcon;
      case "logout":
        return Logout;
      case "bookmark":
        return Bookmark;
      case "bookmark2":
        return Bookmark2;
      case "search":
        return Search;
      case "clap":
        return Clap;
      case "message":
        return Message;
      case "share":
        return Share;
      case "more":
        return More;
      case "back":
        return Back;
      case "close":
        return Close;
      case "clear":
        return Clear;
      case "github":
        return Github;
      case "linkedin":
        return Linkedin;
      case "computer-dead":
        return ComputerDead;
      case "computer-warning":
        return ComputerWarning;

      default:
        return null;
    }
  }
}

export default AppIcons;
