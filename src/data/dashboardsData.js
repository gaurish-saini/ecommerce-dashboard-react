import { ReactComponent as DefaultImg } from "../assets/images/default.svg";
import { ReactComponent as EcommerceImg } from "../assets/images/ecommerce.svg";
import { ReactComponent as ProjectsImg } from "../assets/images/projects.svg";
import { ReactComponent as CoursesImg } from "../assets/images/book.svg";

const dashboardsData = [
  {
    name: "Default",
    link: "/dashboard/default",
    image: DefaultImg,
  },
  {
    name: "eCommerce",
    link: "/dashboard/ecommerce",
    image: EcommerceImg,
  },
  {
    name: "Projects",
    link: "/dashboard/projects",
    image: ProjectsImg,
  },
  {
    name: "Online Courses",
    link: "/dashboard/online-courses",
    image: CoursesImg,
  },
];

export default dashboardsData;
