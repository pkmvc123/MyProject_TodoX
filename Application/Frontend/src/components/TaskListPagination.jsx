import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";

import { cn } from "../lib/utils";

const TaskListPagination = ({
  handleNext,
  handlePrev,
  handlePagiChange,
  totalPaginations,
  pagination,
}) => {
  const generatePages = () => {
    const pages = [];

    if (totalPaginations <= 4) {
      for (let i = 1; i <= totalPaginations; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (pagination <= 3) {
        pages.push(2, 3, "...");
      } else if (pagination >= totalPaginations - 2) {
        pages.push("...", totalPaginations - 2, totalPaginations - 1);
      } else {
        pages.push("...", pagination - 1, pagination, pagination + 1, "...");
      }
      pages.push(totalPaginations);
    }

    return pages;
  };

  const pagiToShow = generatePages();

  return (
    <div className="flex justify-center mt-4">
      <Pagination>
        <PaginationContent>
          {/* Back */}
          <PaginationItem>
            <PaginationPrevious
              onClick={pagination === 1 ? undefined : handlePrev}
              className={cn(
                "cursor-pointer",
                pagination === 1 && "pointer-events-none opacity-50"
              )}
            />
          </PaginationItem>

          {pagiToShow.map((p, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                isActive={p === pagination}
                onClick={() => p !== pagination && handlePagiChange(p)}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}

          {/* Next */}
          <PaginationItem>
            <PaginationNext
              onClick={pagination >= totalPaginations ? undefined : handleNext}
              className={cn(
                "cursor-pointer",
                pagination >= totalPaginations &&
                  "pointer-events-none opacity-50"
              )}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default TaskListPagination;
