import { useFilterMenuContext } from './context/FilterMenuContext';
import { TbAdjustmentsHorizontal } from "react-icons/tb"

export default function ToggleFilterMenuBtn(){
    const { filterMenuVisible, toggleFilterMenu } = useFilterMenuContext();

    return (
        <button
            className='md:hidden btn flex gap-2'
            onClick={toggleFilterMenu}
        >
            <p>Filters</p><TbAdjustmentsHorizontal className="w-5 h-5 inline-block"/> 
        </button>
    )
}