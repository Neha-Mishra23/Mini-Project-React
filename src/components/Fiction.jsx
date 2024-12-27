import FictionData from '../fiction.json'
import BookCard from './BookCard';

console.log(FictionData)
export default function Fiction() {
  return (
    <div>
      <h1></h1>

      <div
        className="books-container"
        style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}
      >
        {
         FictionData.map((el)=><BookCard 
         title={el.title } author={el.author} year={el.year} price={el.price} img={el.img}
         />)
        }
      </div>
    </div>
  );
}
