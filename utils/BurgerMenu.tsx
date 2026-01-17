

export default function BurgerMenu({isOpen, setIsOpen} : {isOpen : boolean,setIsOpen :  React.Dispatch<React.SetStateAction<boolean>>})
{
    
    return (
        <>
        {!isOpen && (
            <div className="bg-white w-10 h-10 absolute left-0 mt-2 ml-2"> </div>

        )}
        {isOpen && (
            <>
            <p>hey</p>
            </>
        )}
        </>
    )
}