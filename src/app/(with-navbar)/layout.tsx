import Navbar from "@/components/Navbar";

export default function WithNavbarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Navbar />
      {children}
    </>
  );
}
