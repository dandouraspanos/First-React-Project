import './TabButton.css';

export default function TabButton({children, onSelect}){
    console.log("Tab Button is Rendered")
   // function handleClick(){
     //   console.log('Hello World!')
 //   }
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    )
}