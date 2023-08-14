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
        setCategories(categories.concat({ id: ++categoryId, title: 'Category', questions: [] }))
    })

    const handleDeleteCategory = useCallback((categoryId) => {
        setCategories(categories.filter(category => category.id !== categoryId))
    })

    return (
        <div>
            <div className='board-title-container'>
                <input type="text" placeholder="Give your board a name..." />
            </div>
            <ul className="categories-row" style={{ gridTemplateColumns: '1fr '.repeat(categories.length + 1) }}>
                {categories.map(category => {
                    return (
                        <li key={category.id}>
                            <CategoryCard id={category.id} title={category.title} onDelete={handleDeleteCategory} />
                        </li>
                    )
                })}
                <button className='square-add-button' onClick={() => handleAddCategory()}><i class="fa-solid fa-plus"></i>Add category</button>
            </ul>
            <ul className='questions-grid' style={{ gridTemplateColumns: '1fr '.repeat(categories.length + 1) }}>
                {categories.map(category => {
                    return (
                        <li key={category.id}>
                            <ul className='questions-column'>
                                {category.questions.map(question => {
                                    return (
                                        <li key={question.id}>
                                            <span>{question.title}</span>
                                        </li>
                                    )
                                })}
                                <button className='square-add-button' onClick={() => alert("Add question")}><i class="fa-solid fa-plus"></i>Add question</button>
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </div >
    )
}

export default CreateBoard