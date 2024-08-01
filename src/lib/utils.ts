import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function procentCalc(amount: number) {
  const totalAmount = 402;
  const found = (amount / totalAmount) * 100;

  const missing = 100 - found;

  return { percentage: found.toFixed(2), missing: missing.toFixed(2) };
}
