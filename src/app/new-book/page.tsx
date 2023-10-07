import AppLayout from '@/layouts/AppLayout'
import React from 'react'
import NewBookForm from './new-book-form/NewBookForm'

const page = () => {
    return (
        <AppLayout>
            <NewBookForm />
        </AppLayout>
    )
}

export default page