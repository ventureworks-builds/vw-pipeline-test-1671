export const metadata = {
  title: 'VentureWorks Pipeline Test',
  description: 'Testing the deployment pipeline',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
