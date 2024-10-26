import { HiTrendingUp } from "react-icons/hi";
import {useState , useEffect} from "react";


export default function Hero(){
    const [topRecipes , setTopRecipes] = useState([]);

    useEffect(( )=>{
        async function fetchTopRecipes(){
      const response =await fetch("https://dummyjson.com/recipes?limit=5");
      const data = await response.json();
     if(data){
        setTopRecipes(data.recipes)
     };

        }
        fetchTopRecipes();

    } ,[])

    return(
        <div className="carousel w-full">
            {topRecipes.map((recipe)=>{
                return ( <div id={"slide"+ recipe.id} className="carousel-item relative w-full">
                <img
                  src={recipe.image}
                  className="w-full h-[20rem] object-center object-cover"  />
                  <div className="absolute bg-black/50 text-white inset-0 flex items-center justify-center -mt-[1rem] md:-mt-0 flex-col">
                      <span className="flex items-center lg:text-lg text-2xl  gap-1">
                  <HiTrendingUp className="size-8" />85% would make this again .
                      </span>
                      <h1 className="lg:text-5xl text-2xl md:text-4xl  font-serif font-extrabold tracking-tight">{recipe.name} </h1>
                      </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href={"#slide" + (recipe.id - 1)} className="btn btn-circle btn-sm">❮</a>
                  <a href={"#slide" + (recipe.id + 1)} className="btn btn-circle btn-sm">❯</a>
                </div>
              </div>)
            })}
        
       
      </div>
    )
}
