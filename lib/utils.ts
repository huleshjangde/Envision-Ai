import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import "dotenv/config";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
