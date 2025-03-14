import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SurahLinkDetailed = ({ surah }) => {

    const { id, name_simple, name_arabic, verses_count, translated_name } = surah;

    return (
        <Link to={`/surah/${id}/page/1`} className="flex items-center justify-between border border-slate-500 rounded shadow shadow-slate-400 hover:shadow-md hover:shadow-slate-500 p-4">
            <div className="flex justify-start items-center gap-4">
                <div className="h-10 w-8 rounded flex justify-center items-center bg-slate-200 text-slate-800 font-medium">
                    <p>{id}</p>
                </div>

                <div className="">
                    <p className="text-xl font-semibold text-cyan-600">{name_simple}</p>
                    <p className="text-sm">{translated_name.name}</p>
                </div>
            </div>

            <div>
                <p className="text-xl mb-1">{name_arabic}</p>
                <p className="text-xs">{verses_count} Ayahs</p>
            </div>
        </Link>
    );
};

export default SurahLinkDetailed;