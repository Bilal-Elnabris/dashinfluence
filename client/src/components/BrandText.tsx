import React from "react";

interface BrandTextProps {
  children: React.ReactNode;
  isArabic: boolean;
}

export const BrandText: React.FC<BrandTextProps> = ({ children, isArabic }) => {
  const dashWord = isArabic ? "داش" : "Dash";
  const regex = new RegExp(dashWord, "gi");

  function highlight(text: string): React.ReactNode[] {
    const parts = text.split(regex);
    const matches = text.match(regex);
    const result: React.ReactNode[] = [];
    parts.forEach((part, i) => {
      result.push(part);
      if (matches && matches[i]) {
        result.push(
          <span
            key={`dash-${i}`}
            className="bg-gradient-to-r from-[#ffcf00] to-[#ffae00] bg-clip-text text-transparent font-bold whitespace-nowrap"
          >
            {matches[i]}
          </span>
        );
      }
    });
    return result;
  }

  if (typeof children === "string") {
    return <>{highlight(children)}</>;
  }

  // If children is a ReactNode (e.g., contains elements), recursively process its string children
  const processNode = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === "string") return highlight(node);
    if (React.isValidElement(node) && node.props.children) {
      return React.cloneElement(node, {
        ...node.props,
        children: React.Children.map(node.props.children, processNode),
      });
    }
    return node;
  };

  return <>{React.Children.map(children, processNode)}</>;
};
