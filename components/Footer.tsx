const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto h-16 flex items-center justify-center">
        <p>App Starter &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
