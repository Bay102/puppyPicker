import { Icons } from "../assets/icons";

export const TrashButton = ({ onClick, disabled = false }) => (
  <img
    src={Icons.Trash}
    alt=""
    className="trash-button"
    style={{
      width: 40,
      border: 0,
      opacity: disabled ? 0.5 : 1,
      // cursor: disabled ? "not-allowed" : "pointer",
    }}
    onClick={() => {
      if (!disabled) {
        onClick();
      }
    }}
  />
);
