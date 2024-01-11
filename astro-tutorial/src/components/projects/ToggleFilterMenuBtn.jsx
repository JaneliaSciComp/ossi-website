import {useStore} from '@nanostores/react';
import { isFilterMenuVisible } from './stores/FilterStore';
import { TbAdjustmentsHorizontal } from "react-icons/tb";

export default function ToggleFilterMenuBtn(){
    const $isFilterMenuVisible = useStore(isFilterMenuVisible)

    return (
        <button
            className='md:hidden btn flex gap-2'
            onClick={() => isFilterMenuVisible.set(!$isFilterMenuVisible)}
        >
            <p>Filters</p><TbAdjustmentsHorizontal className="w-5 h-5 inline-block"/> 
        </button>
    )
}