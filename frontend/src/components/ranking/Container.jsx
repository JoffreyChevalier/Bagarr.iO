export default function Container({ children }) {
  return (
    <div className="bg-white w-3/4 mx-auto px-4 sm:px-6 lg:px-8 rounded-xl">
      {children}
    </div>
  );
}
