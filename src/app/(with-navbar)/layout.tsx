export default function WithNavbarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="bg-amber-400">Navbar</div>
      {children}
    </>
  );
}
