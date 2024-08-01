import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function procentCalc(amount: number) {
  const totalAmount = 402;
  const percentage = (amount / totalAmount) * 100;

  return `${percentage.toFixed(2)}`;
}
