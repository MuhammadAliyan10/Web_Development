import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);
  let bpath = "";
  return (
    <div className="text-center my-4">
      {pathnames.length > 0 && (
        <Link to={"/"} aria-current="page">
          Home
        </Link>
      )}
      {pathnames.map((p, index) => {
        bpath += `/${p}`;
        const isLast = index === pathnames.length - 1;
        return (
          <>
            {isLast ? (
              <span aria-current="page">{bpath}</span>
            ) : (
              <>
                <Link to={bpath} aria-current="page">
                  {bpath}
                </Link>
              </>
            )}
          </>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
