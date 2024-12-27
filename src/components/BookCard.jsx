
export default function BookCard({title,img,author,year,price}) {
  return (
    <div data-testid="book-card">
      <img src={img} alt={title} height={300} width={300} />
      <b>
        <div data-testid="book-card-title">
          {title}
          <span>{year}</span>
        </div>
      </b>
      <div data-testid="book-card-author">{author}</div>
      <div data-testid="book-card-price">{price}</div>
    </div>
  );
}
