import { Button } from "@/components/ui/button"

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Login Admin</h2>
          <p className="mt-2 text-sm text-gray-600">PAUD Lentera</p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label className="text-sm font-medium text-gray-700">Username</label>
              <input type="text" required className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input type="password" required className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm" />
            </div>
          </div>
          <Button type="submit" className="w-full">Masuk</Button>
        </form>
      </div>
    </div>
  )
}
