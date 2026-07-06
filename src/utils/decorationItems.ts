import Ghost from "@/assets/elements/Ghost.svg";
import Star from "@/assets/elements/Star.svg";

export interface DecorationItem {
  src: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  size: number;
  opacity: number;
  className?: string;
}

export const decorationItems: DecorationItem[] = [
  // --- LARGE ILLUSTRATIONS ---
  {
    src: "/Container.png", // Controller (Top-Left)
    top: "12%",
    left: "1%",
    size: 250,
    opacity: 0.8,
    className: "animate-pulse"
  },
  {
    src: "/Container_transform.png", // Wizard (Bottom-Left)
    bottom: "0%",
    left: "1%",
    size: 250,
    opacity: 0.9
  },
  {
    src: "/Container_transform2.png", // Robot (Right)
    top: "12%",
    right: "1%",
    size: 270,
    opacity: 0.9
  },
  // --- SMALL ELEMENTS ---
  {
    src: Ghost, // Ghost (Bottom-Right)
    top: "65%",
    right: "10%",
    size: 55,
    opacity: 0.25
  },
  // --- STARS ---
  {
    src: Star, // Top-Left Star
    top: "18%",
    left: "3%",
    size: 12,
    opacity: 0.8
  },
  {
    src: Star, // Star near controller
    top: "22%",
    left: "21%",
    size: 10,
    opacity: 0.8
  },
  {
    src: Star, // Star near wizard
    top: "62%",
    left: "4%",
    size: 12,
    opacity: 0.8
  },
  {
    src: Star, // Top-Right Star
    top: "22%",
    right: "18%",
    size: 10,
    opacity: 0.8
  },
  {
    src: Star, // Mid-Right Star
    top: "35%",
    right: "21%",
    size: 12,
    opacity: 0.8
  },
  {
    src: Star, // Bottom-Right Star
    top: "75%",
    right: "13%",
    size: 12,
    opacity: 0.8
  }
];