export default function Pagination({ nPages, currentPage, setCurrentPage }) {
  const pageNumber = [];

  for (let i = 1; i <= nPages; i++) {
    pageNumber.push(i);
  }
  function handlePrev() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleNext() {
    if (currentPage <= nPages) {
      setCurrentPage(currentPage + 1);
    }
  }
  return (
    <ul className="pagenation">
      <li className="pageItem" onClick={handlePrev}>
        &laquo;
      </li>
      {pageNumber.map((number) => (
        <li
          key={number}
          className={`pageItem ${currentPage == number ? "active" : ""}`}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </li>
      ))}{" "}
      <li className="pageItem" onClick={handleNext}>
        &raquo;
      </li>
    </ul>
  );
}
