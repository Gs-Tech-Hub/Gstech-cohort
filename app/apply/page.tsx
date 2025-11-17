import { Suspense } from "react"
import ApplyPage from "./ApplyPage"

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10"></div>}>
      <ApplyPage />
    </Suspense>
  )
}
