import React from "react";

const NavTop = () => {
  return (
    <div className="my-5 bg-gradient-to-r from-slate-700 to-slate-300 p-5 rounded-md justify-between flex">
        <section id="hero">
            <img src={"/src/assets/logo.png"} className="w-60 inline pr-3" alt="PokeBox" /> 
            <img src={"/src/assets/slogan.png"} className="w-52 pl-3 inline border-solid border-l-2 border-slate-500" alt="PokeBox" /> 
        </section>

        <section id="search" className="w-1/2 py-3 pb-0">
            <label className="relative inline-block w-5/6">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                    </svg>
                </span>
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-md focus:outline-none focus:border-sky-500 focus:ring-slate-400 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" autoComplete="off"/>
            </label>
            <img src={"src/assets/pokeball.png"} className="w-16 inline ml-2" alt="pokebox" />
        </section>
    </div>
  );
};

export default NavTop;