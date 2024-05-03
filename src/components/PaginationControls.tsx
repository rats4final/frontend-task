type PaginationControlsProps = {
  onPrevButtonClick: (pageNumber: number) => void;
  onNextButtonClick: (pageNumber: number) => void;
  pageNumber: number;
  totalPages: number;
  onPageSizeChange: (pageSize: number) => void;
  defaultPageSize?: number
};

export default function PaginationControls({
  pageNumber,
  totalPages,
  onPrevButtonClick,
  onNextButtonClick,
  onPageSizeChange,
  defaultPageSize,
}: PaginationControlsProps) {
  return (
    <div>
      <button
        onClick={() => {
          if (pageNumber > 1) {
            onPrevButtonClick(pageNumber);
            //setPageNumber(pageNumber - 1);
          }
        }}
      >
        Previous
      </button>
      <button
        disabled={pageNumber === totalPages}
        onClick={() => {
          onNextButtonClick(pageNumber);
          //setPageNumber(pageNumber + 1);
        }}
      >
        Next
      </button>
      <div>You are on page: {pageNumber}</div>
      <div>
        <label htmlFor="pageSize">Per Page</label>
        <input
          onChange={(event) => {
            const pageSize = parseInt(event.target.value);
            onPageSizeChange(pageSize);
            //setPageSize(parseInt(event.target.value));
          }}
          defaultValue={defaultPageSize ?? 5}
          type="number"
          id="pageSize"
          min={1}
        />
      </div>
    </div>
  );
}
