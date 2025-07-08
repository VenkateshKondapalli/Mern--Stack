const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6 shadow-inner">
      <div className="text-center text-sm font-medium tracking-wide">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-red-600 font-semibold">Venkatesh</span>. All
        rights reserved.
      </div>
    </footer>
  );
};

export { Footer };
