export default function MinusButton({ onClick }) {
  return (
    <button type="button" className="minus_button" onClick={onClick}>
      <span>-</span>
    </button>
  );
}
