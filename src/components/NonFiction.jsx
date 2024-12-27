import BookCard from "./BookCard";
import NonFictionData from "../nonfiction.json";
export default function NonFiction() {
  return (
    <div>
      <h1></h1>

      <div className="books-container"
        style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}
        >

        {
          NonFictionData.map((el)=>(
            <BookCard
              title={el.title } author={el.author} year={el.year} price={el.price} img={el.img}
            />
          ))
        }
      </div>
    </div>
  );
}
