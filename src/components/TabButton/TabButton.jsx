import './TabButton.css';

export default function TabButton({children, onSelect, isSelected}){
    console.log("Tab Button is Rendered")
    // function handleClick(){
    //     console.log('Hello World');
    // }
    //closure
    return (
        <li>
            <button className = {isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
        </li>
    )
}