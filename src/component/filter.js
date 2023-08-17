import React from "react";

function Filter(props) { // Remove the curly braces around props
    let filterData = props.filterData;
    let Category = props.Category;
    let setCategory = props.setCategory;
    
    function filterhandler(title) {
        setCategory(title);
    }
    
    return (
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
            {filterData.map((data) => (
                <button
                    key={data.id}
                    className={`text-lg px-2 py-1 rounded-md font-medium text-white
                    bg-black hover:bg-opacity-10 border-2 transition-all duration-300 ${
                        Category === data.title ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"
                    }`}
                    onClick={() => filterhandler(data.title)}
                >
                    {data.title}
                </button>
            ))}
        </div>
    );
}

export default Filter;
