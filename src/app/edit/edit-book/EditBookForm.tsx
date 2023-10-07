'use client'

import { newBookSchema } from "@/schemas/new-book-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import * as z from "zod"
import { useForm } from 'react-hook-form'
import { Input } from "@/components/ui/input"
import { BookmarkIcon, FileTextIcon, LapTimerIcon, PersonIcon, TextIcon } from "@radix-ui/react-icons"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useSearchParams } from 'next/navigation'
import { BookProps } from "@/types/types"
import { useEffect, useState } from "react"
import { getBookById } from "./getBookById"

const EditBookForm = () => {
    const searchParams = useSearchParams()


    const id = searchParams.get('id')
    const title = searchParams.get('title')

    const form = useForm<z.infer<typeof newBookSchema>>({
        resolver: zodResolver(newBookSchema),
        defaultValues: {
            title: "",
            author: "",
            description: "",
            year: 0,
        },

    })

    async function onSubmit() {

    }

    useEffect(() => {
        try {
            const getBook = async () => {

                if (!id) return console.log('No id found')

                const res = await getBookById(id);

                if (res) {
                    console.log(res)
                    // set values inputs with res data react hook form 
                    form.setValue('title', res.title)
                    form.setValue('author', res.author)
                    form.setValue('description', res.description)
                    form.setValue('year', res.year)
                    form.setValue('id', id)

                } else {
                    console.log('No book found')
                }


            }
            getBook()
        } catch (error) {
            console.log(error)
            throw new Error(String(error))
        }
    }, [])


    return (
        <div className='py-4'>
            <h1 className="pb-4">
                {title}
            </h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4  z-20'>
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <>
                                        <div className="relative">
                                            <Input className='py-6 bg-gray-100 pl-10' placeholder="Book Title" {...field} />
                                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                                <TextIcon className='text-muted-foreground' />
                                            </div>

                                        </div>
                                    </>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="author"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <>
                                        <div className="relative">
                                            <Input className='py-6 bg-gray-100 pl-10' type='text' placeholder="Author" {...field} />
                                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                                <PersonIcon className='text-muted-foreground' />
                                            </div>

                                        </div>
                                    </>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <>
                                        <div className="relative">
                                            <Textarea className='pt-5 bg-gray-100 pl-10 min-h-[200px]' placeholder="Description" {...field} />
                                            <div className="absolute left-3 top-8 transform -translate-y-1/2">
                                                <FileTextIcon className='text-muted-foreground' />
                                            </div>

                                        </div>
                                    </>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="year"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <>
                                        <div className="relative">
                                            <Input className='py-6 bg-gray-100 pl-10' type='number' placeholder="Year" {...field} />
                                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                                <LapTimerIcon className='text-muted-foreground' />
                                            </div>

                                        </div>
                                    </>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="w-full flex justify-end pt-4">
                        <Button size='lg' className='gap-2'>
                            Save
                            <BookmarkIcon />
                        </Button>
                    </div>

                </form>
            </Form>


        </div>
    )
}

export default EditBookForm