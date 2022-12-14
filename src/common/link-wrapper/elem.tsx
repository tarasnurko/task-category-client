import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

const Elem: React.FC<{ children: ReactNode; to: string }> = ({
  children,
  to,
}) => {
  return (
    <Link to={to} style={{ textDecoration: "none", color: "unset" }}>
      {children}
    </Link>
  );
};

export default Elem;
