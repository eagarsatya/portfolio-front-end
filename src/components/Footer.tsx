function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-neutral-200">
      <div className="mx-auto flex max-w-3xl items-center justify-center px-6 py-8">
        <p className="text-sm text-neutral-500">© {year} Eagar Satya</p>
      </div>
    </footer>
  );
}

export default Footer;
