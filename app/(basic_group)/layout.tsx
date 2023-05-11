export const metadata = {
  title: 'Basic Group',
  description: 'Generated by create next app',
}

export default function BasicGroupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className="bg-gray-50 h-full">{children}</div>
  )
}