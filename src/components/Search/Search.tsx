'use client'

import { Input } from '@nextui-org/input';
import { SearchIcon } from './SearchIcon'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'

export const Search = ({
    label,
    placeholder,
    width='340px',
    radius='lg',
}: {
    label?: string
    placeholder?: string;
    width?: string;
    radius?: 'none' | 'sm' | 'md' | 'lg' | 'full' | undefined;
}) => {
    const searchParams = useSearchParams()
    const pathName = usePathname()
    const { replace } = useRouter()
    const [searchValue, setSearchValue] = useState(searchParams.get('search') || '');
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const params = new URLSearchParams(searchParams)
        const value = e.target.value
        setSearchValue(value)

        if (value) {
            params.set('search', value)
        } else {
            params.delete('search')
        }

        replace(`${pathName}?${params.toString()}`)
    }

    const handleClear = () => {
        const params = new URLSearchParams(searchParams)
        params.delete('search')
        replace(`${pathName}?${params.toString()}`)
        setSearchValue('')
    }

    const styles = {
        label: 'text-black/50 dark:text-white/90',
        input: [
            'bg-white',
            'text-black/90 dark:text-white/90',
            'placeholder:text-default-700/50 dark:placeholder:text-white/60',
        ],
        innerWrapper: 'bg-white',
        inputWrapper: [
            'shadow-xl',
            'bg-default-200/50',
            'dark:bg-default/60',
            'backdrop-blur-xl',
            'backdrop-saturate-200',
            'hover:bg-default-200/70',
            'dark:hover:bg-default/70',
            'group-data-[focused=true]:bg-default-200/50',
            'dark:group-data-[focused=true]:bg-default/60',
            '!cursor-text',
        ],
    }

    return (
        <search className={`w-[${width}]`}>
            <Input
                label={ label }
                isClearable
                value={ searchValue }
                onClear={ handleClear }
                radius={ radius }
                onChange={ handleChange }
                defaultValue={ searchParams.get('search') || '' }
                classNames={ styles }
                placeholder={ placeholder }
                startContent={
                    <SearchIcon 
                        className='
                            text-black/50 
                            mb-0.5 
                            dark:text-white/90 
                            text-slate-400 
                            pointer-events-none 
                            flex-shrink-0
                        ' 
                    />
                }
            />
        </search>
    )
}