'use client'
import { Button } from '@/components/ui/button'
import { MinusCircledIcon, Pencil2Icon } from '@radix-ui/react-icons'
import React from 'react'

const CardButtons = () => {
  return (
    <div className='flex flex-col gap-2 justify-start w-full'>
        <Button size='primary' variant='ghost' className='w-full justify-start gap-2'>
            <Pencil2Icon />
            Edit
        </Button>
        <Button size='primary' variant='ghost' className='w-full justify-start gap-2 text-red-500 hover:text-red-600 hover:bg-destructive/10'>
            <MinusCircledIcon />
            Delete
        </Button>
    </div>
  )
}

export default CardButtons