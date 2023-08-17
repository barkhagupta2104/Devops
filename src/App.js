import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from './component/Navbar';
import Filter from './component/filter';
import Cards from './component/cards';
import { toast } from "react-toastify";
import Spinner from "./component/spinner"

const App = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [Category, setCategory] = useState(filterData[0].title);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(apiUrl);
                const output = await res.json();
                //save data 
                setCourses(output.data);
            } catch (error) {
                toast.error("something went wrong");
            }
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <div>
                <Navbar />
            </div>
            <div className="bg-bgDark2 h-full">
                <div>
                    <Filter filterData={filterData} Category={Category} setCategory={setCategory} />
                </div>
                <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
                    {loading ? <Spinner /> : <Cards props={{ courses: courses, Category: Category }} />}
                </div>
            </div>
        </div>
    );
}

export default App;
