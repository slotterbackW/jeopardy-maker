import './CategoryCard.css'

const CategoryCard = ({ id, title, onDelete }) => {
    return (
        <div className="category-card">
            <ul className="category-buttons-container">
                <li>
                    <button onClick={() => { onDelete(id) }} className='icon-button icon-button-light'><i class="fa-solid fa-trash"></i></button>
                </li>
            </ul>
            <h2>{title}</h2>
        </div>
    )
}

export default CategoryCard