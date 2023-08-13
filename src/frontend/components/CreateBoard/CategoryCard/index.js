import './CategoryCard.css'

const CategoryCard = ({ id, title, onDelete }) => {
    return (
        <div className="category-card">
            <ul className="category-buttons-container">
                <li>
                    <button onClick={() => { onDelete(id) }}>Delete{/* TODO: Icon */}</button>
                </li>
            </ul>
            <h2>{title}</h2>
        </div>
    )
}

export default CategoryCard