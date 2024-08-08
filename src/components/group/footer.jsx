import Link from 'next/link'
import React from 'react'

function footer() {
  return (
    <footer className="shadow mt-20 sticky ">
    <div className="w-full mx-auto px-6 py-10 md:px-[100px] xl:px-[250px]">
      <span className="block text-sm font-courier text-center">
        © 2024{" "}
        <Link href={"/"} className="hover:underline">
          Animecik
        </Link>
      </span>
    </div>
  </footer>
  )
}

export default footer