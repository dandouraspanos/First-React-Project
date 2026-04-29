import './TabButton.css';

export default function TabButton({children, onSelect, isSelected, ...props}) {
    console.log("Tab Button is Rendered")
    return (
        <li>
            <button className = {isSelected ? 'active' : ''} onClick={onSelect} {...props}>
                {children}
            </button>
        </li>
    )
}