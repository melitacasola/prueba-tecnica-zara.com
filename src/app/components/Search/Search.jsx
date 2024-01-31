'use client'
import { useDebouncedCallback } from 'use-debounce'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'


export default function Search() {
    const searchParams = useSearchParams()
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams)
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`)
        
    }, 300)
    
    return (
        <div className="flex mb-20 justify-end items-center">
            <label htmlFor="search" className='bg-sky-600 text-white font-bold mx-2 border rounded-lg px-1'>
            100
            </label>
            <input
                className="peer block rounded-md border border-gray-200 py-[9px] w-72 pl-3 text-sm outline-2 placeholder:text-gray-400"
                placeholder="Filter podcasts..."
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                defaultValue={searchParams.get('query')?.toString()}
        
            />
            
        </div>
    );
}


