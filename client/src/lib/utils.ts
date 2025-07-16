import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}

// Highlight every occurrence of 'Dash' (English) or 'داش' (Arabic) in a string with a yellow gradient
export function highlightDash(
  text: string,
  isArabic: boolean
): React.ReactNode {
  const dashWord = isArabic ? "\u062f\u0627\u0634" : "Dash";
  const regex = new RegExp(`(${dashWord})`, "gi");
  const parts = text.split(regex);
  return React.createElement(
    React.Fragment,
    {},
    ...parts.map((part, i) =>
      part.toLowerCase() === dashWord.toLowerCase()
        ? React.createElement(
            "span",
            {
              key: i,
              className:
                "bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-bold",
            },
            part
          )
        : part
    )
  );
}
