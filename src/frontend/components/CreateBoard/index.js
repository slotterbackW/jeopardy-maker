import React, { useCallback, useState } from 'react'

import CategoryCard from './CategoryCard'
import './CreateBoard.css'

/*
    Questions have the shape:
    {
        id: number,
        title: string,
        image_url: string
    }
*/

/* Categories have the shape:
    {
        id: number,
        title: string
        questions: Array<Questions>
    }
*/

let categoryId = 0;

const CreateBoard = () => {
    // TODO: eventually this should be synced with the backend
    const [categories, setCategories] = useState([])

    const handleAddCategory = useCallback(() => {
        setCategories(categories.concat({ id: ++categoryId, title: 'category', questions: [] }))
    })

    const handleDeleteCategory = useCallback((categoryId) => {
        setCategories(categories.filter(category => category.id !== categoryId))
    })

    return (
        <div>
            <input type="text" placeholder="Give your board a name..." />
            <ul className="categories-row" style={{ gridTemplateColumns: '1fr '.repeat(categories.length + 1) }}>
                {categories.map(category => {
                    return (
                        <li key={category.id}>
                            <CategoryCard id={category.id} title={category.title} onDelete={handleDeleteCategory} />
                        </li>
                    )
                })}
                <button className='square-add-button' onClick={() => handleAddCategory()}>Add category</button>
            </ul>
        </div >
    )
}

export default CreateBoard