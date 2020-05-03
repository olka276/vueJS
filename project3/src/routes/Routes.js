import Slideshow from "../components/Slideshow"

export default [
{
    
    path: "/slide:index", component: Slideshow 
},
{
    path: "/", redirect: "/slide/1"
}
];