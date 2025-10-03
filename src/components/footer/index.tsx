import React from 'react'
import Link from 'next/link'

const footerLinks = [
    {
        title: "Company",
        links: [
            { name: "Blogs", href: "/#" },
            { name: "About Us", href: "/#" },
            { name: "Careers", href: "/#" },
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", href: "/#" },
            { name: "Terms of Service", href: "/#" },
        ]
    }
]

const Footer = () => {
    return (
        <footer className='bg-muted'>
            <div className='max-w-6xl mx-auto py-20 space-y-20'>
                <div className='flex justify-between items-start'>
                    <p>
                        &copy; <span className='text-2xl font-medium'>aureon</span> | The Perfect Sound, Anywhere
                    </p>
                    <div className='grid grid-cols-2 gap-40'>
                        {footerLinks.map((section, index) => (
                            <div key={index} className='space-y-5'>
                                <h4>{section.title}</h4>
                                <ul className='space-y-3'>
                                    {section.links.map((link, index) => (
                                        <li key={index}>
                                            <Link href={link.href} className='opacity-50 hover:opacity-100'>{link.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='h-60 overflow-hidden flex items-center justify-center'>
                    <h4 className='text-[25.5rem] mb-17 mr-3 opacity-10 font-semibold tracking-tighter select-none'>
                        aureon
                    </h4>
                </div>
            </div>
        </footer>
    )
}

export default Footer