import { ReactComponent as UserProfileIcon } from "../assets/images/userProfile.svg";
import { ReactComponent as AccountIcon } from "../assets/images/account.svg";
import { ReactComponent as CorporateIcon } from "../assets/images/corporate.svg";
import { ReactComponent as BlogIcon } from "../assets/images/blog.svg";
import { ReactComponent as SocialIcon } from "../assets/images/social.svg";

const pagesData = {
  userProfile: {
    title: "User Profile",
    icon: UserProfileIcon,
    items: [
      { name: "Overview", link: "/pages/overview" },
      { name: "Projects", link: "/pages/projects" },
      { name: "Campaigns", link: "/pages/campaigns" },
      { name: "Documents", link: "/pages/documents" },
      { name: "Followers", link: "/pages/followers" },
    ],
  },
  account: {
    title: "Account",
    icon: AccountIcon,
    items: [
      { name: "Settings", link: "/pages/account/settings" },
      { name: "Billing", link: "/pages/account/billing" },
    ],
  },
  corporate: {
    title: "Corporate",
    icon: CorporateIcon,
    items: [
      { name: "Teams", link: "/pages/corporate/teams" },
      { name: "Partners", link: "/pages/corporate/partners" },
    ],
  },
  blog: {
    title: "Blog",
    icon: BlogIcon,
    items: [
      { name: "Latest Posts", link: "/pages/blog/latest" },
      { name: "Archives", link: "/pages/blog/archives" },
    ],
  },
  social: {
    title: "Social",
    icon: SocialIcon,
    items: [
      { name: "Facebook", link: "/pages/social/facebook" },
      { name: "LinkedIn", link: "/pages/social/linkedin" },
    ],
  },
};

export default pagesData;
