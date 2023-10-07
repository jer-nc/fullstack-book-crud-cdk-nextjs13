import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from '@/components/ui/button'
import { DotsVerticalIcon } from '@radix-ui/react-icons'
import CardButtons from './CardButtons'

const PopoverCard = () => {
    return (
        <Popover>
            <PopoverTrigger className='w-10 h-10 hover:bg-gray-100 rounded-md flex justify-center items-center'>
                <DotsVerticalIcon />
            </PopoverTrigger>
            <PopoverContent  align='start' className=''>
                <CardButtons />
            </PopoverContent>
        </Popover>
    )
}

export default PopoverCard