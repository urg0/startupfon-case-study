import Loading from "@assets/animations/loading.json";
import BookmarkLoading from "@assets/animations/bookmark-loading.json";

class AppAnimations {
  static getAnimation(type) {
    switch (type) {
      case "loading":
        return Loading;
      case "bookmark-loading":
        return BookmarkLoading;
      default:
        return null;
    }
  }
}

export default AppAnimations;
