import { Logo } from '@/components/Logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <div className='fixed top-0 w-full p-4 border-b shadow-sm'>
        <div className='w-full md: max-w-5xl mx-auto flex justify-between items-center'>
            <Logo/>
            <div className='w-full flex justify-between md:justify-end gap-4'>
                <Button asChild variant={"outline"}>
                    <Link href={"/sign-in"}>
                    Login
                    </Link>
                </Button>
                <Button asChild>
                    <Link href={"/sign-up"}>
                    Get Taskify For free
                    </Link>
                </Button>
            </div>
        </div>
    </div>
  )
}
