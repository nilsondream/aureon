'use client'
import React from 'react'
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

const ThemeButton = () => {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className='cursor-pointer border hover:bg-muted p-2.5 rounded-full'
        >
            <span className='hidden dark:block'><Sun size={15} /></span>
            <span className='block dark:hidden'><Moon size={15} /></span>
            <span className="sr-only">Button Theme</span>
        </button>
    );
}
export default ThemeButton