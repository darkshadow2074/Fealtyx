import React from "react";
import useWindowWidth from "./useWindowWidth"; // Make sure this is defined properly

type TruncateTextProps = {
  text: string;
};

const TruncateText: React.FC<TruncateTextProps> = ({ text }) => {
  const width = useWindowWidth();

  let maxChars = 30;
  if (width > 1440) maxChars = 120;
  else if (width > 1024) maxChars = 80;
  else if (width > 768) maxChars = 50;
  else if (width > 480) maxChars = 35;

  return (
    <div className="truncate max-w-full" title={text}>
      {text.length > maxChars ? text.slice(0, maxChars) + "..." : text}
    </div>
  );
};

export default TruncateText;
