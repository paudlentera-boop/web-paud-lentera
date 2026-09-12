// components/site-header.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button" // Jika menggunakan shadcn/ui

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Kiri: Logo & Menu Utama */}
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-xl">
            Logositus
          </Link>
        </div>
        <nav className="hidden md:flex gap-4">
          <Link href="#about">Tentang</Link>
          <Link href="#programs">Program</Link>
        </nav>
        
        {/* Pojok Kanan Atas: Tombol Login Admin */}
        <div className="flex items-center gap-4">
          <Button asChild variant="outline" size="sm">
            <Link href="/admin/login">Login Admin</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
