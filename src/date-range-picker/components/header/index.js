import { ChevronLeft, ChevronRight } from "lucide-react";
import "./style.css";

export default function Header({ header, onPrev, onNext }) {
  return (
    <div className="header">
      <button className="btn" onClick={onPrev}>
        <ChevronLeft />
      </button>
      <span className="header-title">{header}</span>
      <button className="btn" onClick={onNext}>
        <ChevronRight />
      </button>
    </div>
  );
}
