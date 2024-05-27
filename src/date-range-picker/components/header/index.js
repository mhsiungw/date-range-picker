import Button from "../button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./style.css";

export default function Header({ header, onPrev, onNext }) {
  return (
    <div className="header">
      <Button
        className="btn"
        aria-label="Select Previous Month"
        onClick={onPrev}
      >
        <ChevronLeft />
      </Button>
      <span className="header-title" aria-label={header}>
        {header}
      </span>
      <Button className="btn" aria-label="Select Next Month" onClick={onNext}>
        <ChevronRight />
      </Button>
    </div>
  );
}
