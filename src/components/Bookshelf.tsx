import { PortfolioData } from "@/data/portfolioData";
import { BookOpen, Quote } from "lucide-react";

interface BookshelfProps {
  bookshelfData: PortfolioData["bookshelf"];
}

export function Bookshelf({ bookshelfData }: BookshelfProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Reading":
        return (
          <span className="text-[10px] font-mono font-medium bg-[#F8ECE9] text-[#8C3A2B] border border-[#8C3A2B]/20 px-2 py-0.5 rounded-md">
            Reading
          </span>
        );
      case "Finished":
        return (
          <span className="text-[10px] font-mono font-medium bg-[#E8EFE9] text-[#2D5A39] border border-[#C8DEC9] px-2 py-0.5 rounded-md">
            Finished
          </span>
        );
      default:
        return (
          <span className="text-[10px] font-mono font-medium bg-[#F8F6F0] text-[#78716C] border border-[#EAE5D9] px-2 py-0.5 rounded-md">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="bg-white border border-[#EAE5D9] rounded-2xl p-5 sm:p-6 shadow-2xs hover:shadow-md hover:border-[#D8D1C2] transition-all duration-300 space-y-5 flex flex-col justify-between">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center gap-3 pb-3.5 border-b border-[#EAE5D9]">
          <div className="w-8 h-8 rounded-lg bg-[#E8EFE9] text-[#2D5A39] flex items-center justify-center border border-[#C8DEC9] shrink-0">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1C1917] tracking-tight">
              Current Reads & Notes
            </h3>
            <p className="text-xs text-[#78716C]">
              Books shaping my perspective on software craft.
            </p>
          </div>
        </div>

        {/* Books List */}
        <div className="space-y-2">
          {bookshelfData.books.map((book) => (
            <div
              key={book.id}
              className="bg-[#F8F6F0]/70 p-2.5 sm:p-3 rounded-xl border border-[#EAE5D9] flex items-center justify-between gap-3 hover:border-[#D8D1C2] transition-colors"
            >
              <div>
                <h4 className="font-serif font-medium text-xs sm:text-sm text-[#1C1917]">
                  {book.title}
                </h4>
                <p className="text-[11px] text-[#78716C]">
                  {book.author}
                </p>
              </div>
              <div className="shrink-0">
                {getStatusBadge(book.status)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy Quote Block */}
      <div className="pt-4 border-t border-[#EAE5D9]">
        <blockquote className="bg-[#F8ECE9]/50 border-l-2 border-[#8C3A2B] p-3 sm:p-3.5 rounded-r-xl space-y-1.5">
          <div className="flex items-center gap-1.5 text-[#8C3A2B]">
            <Quote className="w-3 h-3" />
            <span className="text-[10px] font-semibold uppercase tracking-wider font-mono">Philosophy</span>
          </div>
          <p className="font-serif italic text-xs text-[#1C1917] leading-relaxed">
            &ldquo;{bookshelfData.quote.text}&rdquo;
          </p>
          <footer className="text-[11px] font-medium text-[#78716C]">
            — {bookshelfData.quote.author}
          </footer>
        </blockquote>
      </div>
    </div>
  );
}