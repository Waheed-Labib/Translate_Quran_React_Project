/* eslint-disable react/prop-types */
import ChaptersDropdownMenu from "./chapters-dropdown-menu/chapters-dropdown-menu/ChaptersDropdownMenu";

const SelectChapter = () => {
    return (
        <div className="">
            <h3 className="pl-2 mb-2 font-semibold text-gray-500">Chapters</h3>
            <ChaptersDropdownMenu></ChaptersDropdownMenu>
        </div>
    );
};

export default SelectChapter;