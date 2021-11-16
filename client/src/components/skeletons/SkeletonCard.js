import React from "react";
import SkeletonElement from "./SkeletonElement";

const SkeletonCard = () => {
  return (
    <div className="skeleton-wrapper">
      <SkeletonElement type="img" />
      <SkeletonElement type="title" />
      <SkeletonElement type="text" />
    </div>
  );
};

export default SkeletonCard;
