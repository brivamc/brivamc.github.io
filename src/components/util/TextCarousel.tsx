import _ from "lodash";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export const TextCarousel: React.FC<{
  list: string[];
}> = ({ list: originalList }) => {
  const sequencedList = _.flatMap(originalList, value => [value, 1000]);

  return (
    <TypeAnimation speed={20} sequence={sequencedList} repeat={Infinity} omitDeletionAnimation />
  );
};
