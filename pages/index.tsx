import Link from "next/link"
import { useRouter } from "next/router"

function Home() {
  const router = useRouter()

  function handleUsers() {
    router.push('/')
  }

  return (
    <>
      <h1>
        Some company
      </h1>
      <Link href="/contact_us">
        Contact us
      </Link>
    </>
  )
}

export default Home