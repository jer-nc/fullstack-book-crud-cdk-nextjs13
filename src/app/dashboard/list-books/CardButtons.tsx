'use client'
import { Button } from '@/components/ui/button'
import { BookProps } from '@/types/types'
import { MinusCircledIcon, Pencil2Icon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import React from 'react'

const CardButtons = ({ book }: BookProps) => {
  const { title, author, description, year, id } = book
  console.log(title, author, description, year,id)
  const { push } = useRouter()

  // Usar query search params para añadir el id a la url

  const handleEdit = () => {
    
    push(`/edit?id=${id}&title=${title}`)
    
  }


  return (
    <div className='flex flex-col gap-2 justify-start w-full'>
      <Button onClick={handleEdit} size='primary' variant='ghost' className='w-full justify-start gap-2'>
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