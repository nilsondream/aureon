import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const navLinks = [
    { name: 'Products', href: '/products' },
    { name: 'Specifications', href: '/specifications' },
    { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/pricing' }
]

const Header = () => {
    return (
        <header className='fixed top-0 left-0 z-50 w-full bg-background/75 backdrop-blur-sm'>
            <div className='max-w-7xl mx-auto py-5 grid grid-cols-[1fr_2fr_1fr] items-center'>
                <div className='flex justify-start'>
                    <Link href="/" className='flex items-center gap-3 text-2xl font-medium'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 48" fill="currentColor" className='w-6'>
                            <path d="m0 24c0-4.0995 1.29832-7.8957 3.50621-11h9.49379v1.7789c-3.01021 1.9627-5 5.3595-5 9.2211 0 6.0751 4.9249 11 11 11v8c-10.49341 0-19-8.5066-19-19z" /><path d="m34.4938 35c2.2079-3.1043 3.5062-6.9005 3.5062-11 0-10.4934-8.5066-19-19-19v8c6.0751 0 11 4.9249 11 11 0 3.8616-1.9898 7.2584-5 9.2211v1.7789z" />
                        </svg>
                        <span>aureon</span>
                    </Link>
                </div>
                <nav className='flex gap-10 justify-center'>
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className='hover:text-muted-foreground'>
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <div className='flex justify-end'>
                    <button className='cursor-pointer text-sm flex items-center gap-1 border hover:bg-muted rounded-full px-4 py-2 font-medium'>
                        Shop Now
                        <ChevronRight size={15} />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header