import { booksList } from '@/data/books-list'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScrollArea } from '@/components/ui/scroll-area'
import PopoverCard from './PopoverCard'
import AddBookButton from './AddBookButton'
import { BookProps } from '@/types/types'


const ListBooks = () => {
  return (
    <div className='py-4'>
      <div className='flex justify-between gap-4 items-center  pb-8'>
        <h1 className='text-2xl font-semibold'>Listed Books</h1>
        <AddBookButton />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

        {
          booksList.map((book, index) => (
            <div key={index}>
              <Card >
                <CardHeader>
                  <div className='flex gap-2 justify-between items-center'>

                    <CardTitle>{book.title}</CardTitle>
                    <div>
                      <PopoverCard book={book}/>
                    </div>
                  </div>
                  <CardDescription>{book.author}</CardDescription>
                </CardHeader>
                <CardContent className='p-0'>
                  <ScrollArea className="h-[200px] px-6 py-2">
                    <p>{book.description}</p>
                  </ScrollArea>
                </CardContent>
                <CardFooter>
                  <p>
                    <span className='text-muted-foreground'>Published:</span> {book.year}
                  </p>
                </CardFooter>
              </Card>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default ListBooks