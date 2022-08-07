import React from "react";

export default function Pagination({
    postsPerPage,
    totalPosts,
    paginate,
    currentPage,
}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='py-4 container font-bold'>
            <div>
                <p className='text-sm text-zinc-100'>
                    Showing
                    <span className='font-medium'>
                        {" "}
                        {currentPage * postsPerPage - 12} {" "}
                    </span>
                    to
                    <span className='font-medium'> {currentPage * postsPerPage} </span>
                    of
                    <span className='font-medium'> {totalPosts} </span>
                    results
                </p>
            </div>
            <nav className='block my-3'>
                <ul className='flex pl-0 rounded list-none flex-wrap'>
                    <li>
                        {pageNumbers.map((number, index) => (
                            <a key={index} 
                                onClick={() => {
                                    paginate(number);
                                }}
                                href='#'
                                className={
                                    currentPage === number
                                        ? "bg-slate-200 text-slate-900 hover:bg-slate-300 relative inline-flex items-center px-4 py-2 text-base font-semibold rounded-full shadow-md shadow-white mx-2" 
                                        : "text-zinc-200  hover:bg-slate-300 hover:text-slate-900 relative inline-flex items-center px-4 py-2 text-base font-semibold hover:rounded-full hover:shadow-md hover:shadow-white"
                                }
                            >
                                {number}
                            </a>
                        ))}
                    </li>
                </ul>
            </nav>
        </div>
    );
}