import GoBackButton from '@/components/custom/GoBackButton'
import { Button } from '@/components/ui/button'
import { PlusCircledIcon, BookmarkIcon, ArrowLeftIcon } from '@radix-ui/react-icons'
import React from 'react'

const NewBookForm = () => {
  return (
    <div className='py-4'>
      <div className='flex justify-between gap-4 items-center  pb-8'>
        <div className='flex gap-4 items-center'>
          <GoBackButton />
          <h1 className='text-2xl font-semibold'>New Book</h1>
        </div>
        <Button className='gap-2'>
          Save
          <BookmarkIcon />
        </Button>
      </div>


    </div>
  )
}

export default NewBookForm