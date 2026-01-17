
function  goToExternalPage(link:string) {
  window.location.href = link;
}


export default function BurgerMenu({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    const names = ["Youtube"]
    const links = ["https://www.youtube.com/"]
    return (
        <>
            {!isOpen && (
                <div className=" flex justify-center items-center border-3 w-10 h-10 absolute left-0 mt-2 ml-2 ">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-2xl cursor-pointer" >
                        ☰
                    </button>
                </div>

            )}
            {isOpen && (
                <div className="flex flex-col h-full w-70 bg-[#353535] absolute left-0 py-10 ">
                    <div className="ml-5">
                    <p className=" text-left text-2xl font-semibold mb-10">Binary Tree articles</p>
                    {names.map((value, index) => (
                        <div key={index} className="cursor-pointer gap-10" onClick={() => goToExternalPage(links[index])}>
                            <p className="text-white text-left text-lg">{value}</p>
                        </div>
                    ))}
                    </div>
                </div>
            )}
        </>
    )
}