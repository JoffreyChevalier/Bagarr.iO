export default function PlusButton({ onClick }) {
  return (
    <button type="button" onClick={onClick} className="plus_button">
      <span>+</span>
    </button>
  );
}
