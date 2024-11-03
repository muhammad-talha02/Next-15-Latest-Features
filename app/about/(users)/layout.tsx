export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1 className="text-3xl text-gray-500">My Own Navbar</h1>
      {children}
    </>
  );
}
