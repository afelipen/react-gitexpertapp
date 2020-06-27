import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategory] = useState(['One Punch'])

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategory={setCategory} />
            <hr />

            <ol>
                {
                    categories.map((category, i) => (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </ol>
        </>
    )
}
