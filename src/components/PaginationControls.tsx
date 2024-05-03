type PaginationControlsProps = {
  onPrevButtonClick: (pageNumber: number) => void;
  onNextButtonClick: (pageNumber: number) => void;
  pageNumber: number;
  totalPages: number;
  onPageSizeChange: (pageSize: number) => void;
  defaultPageSize?: number;
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
    <div className="flex items-center justify-center gap-4 flex-wrap">
      <button
        //Esto igual podria abstraerse en su propio componente de boton
        className="flex flex-auto items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
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
        className="flex flex-auto items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 disabled:cursor-not-allowed"
        disabled={pageNumber === totalPages}
        onClick={() => {
          onNextButtonClick(pageNumber);
          //setPageNumber(pageNumber + 1);
        }}
      >
        Next
      </button>
      <div className="flex items-center justify-center flex-1 flex-wrap">Page #: {pageNumber}</div>
      <div className="flex flex-1 items-center justify-center gap-2 flex-wrap">
        <label className="flex-auto" htmlFor="pageSize">Per Page:</label>
        <input
          className="flex-auto"
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
