import React from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((item) => item);

  return (
    <div className="text-sm flex items-center gap-2">
      {pathnames.map((value, index) => {
        const pathTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <React.Fragment key={index}>
            {index !== 0 && (
              <span className="text-black/20 dark:text-white/20">/</span>
            )}
            {isLast ? (
              <span className="px-2 py-1 text-black dark:text-white capitalize">
                {value}
              </span>
            ) : (
              <Link
                to={pathTo}
                className="px-2 py-1 text-black/40 dark:text-white/40 hover:underline capitalize"
              >
                {value}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
