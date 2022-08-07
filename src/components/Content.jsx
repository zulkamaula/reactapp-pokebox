import React from "react";

const Posts = ({ posts, loading }) => {

  if (loading) {
    return <h2 className="text-zinc-100 text-center italic">Loading...</h2>;
  }

  if(posts.length > 0){
    return (
      <div>
        <ul className="grid gap-12 grid-cols-4 justify-between py-8">
          {
            posts.map((post) => (
              <li
                key={post.entry_number}
                className='text-zinc-100 font-semibold text-xl border mb-3 p-2 inline-block rounded-md shadow-md shadow-zinc-50 cards'
              >
                <div className="grid gap-2 grid-cols-2">
                  <div>
                    <h4 className="font-bold text-base text-slate-400">
                      #{post.entry_number}
                    </h4>

                    <h2 className="font-bold text-lg uppercase">
                      {post.pokemon_species.name}
                    </h2>
                  </div>

                  <div>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${post.entry_number}.png`} alt={post.pokemon_species.name} />
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
};

export default Posts;