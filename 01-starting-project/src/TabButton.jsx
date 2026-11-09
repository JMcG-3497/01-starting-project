//tabbutton
export default function TabButton(
    {children,isSelected, ...props}){

    return(
        <li>
            <button className = {isSelected ? 'active' : ''} {...props}>
               {children}
            </button>
        </li>
    );
}



/*
//previous section of code for reference
export default function TabButton({children, onClick}) {
//    function handleClick() {
//        console.log('Hello World');
//    }

  return (
    <li>
      <button onClick={handleClick}>
        {children}
      </button>
    </li>
  );
}
*/