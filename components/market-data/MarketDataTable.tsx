"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { tableData } from "@/lib/market-mock-data";
import { Search, ChevronDown, ChevronLeft, ChevronRight, ArrowUpDown } from "lucide-react";

export function MarketDataTable() {
  const [exchange, setExchange] = useState<"NSE" | "BSE">("NSE");
  const [filter, setFilter] = useState<"Gainers" | "Losers" | "All">("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  // Sorting
  const [sortConfig, setSortConfig] = useState<{ key: keyof typeof tableData[0] | null, direction: 'ascending' | 'descending' }>({
    key: null,
    direction: 'ascending'
  });

  const handleSort = (key: keyof typeof tableData[0]) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Filter and Search logic
  let filteredData = tableData.filter((item) => {
    if (filter === "Gainers" && item.changePercent <= 0) return false;
    if (filter === "Losers" && item.changePercent >= 0) return false;
    if (search && !item.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  // Sort logic
  if (sortConfig.key) {
    filteredData.sort((a, b) => {
      if (a[sortConfig.key!] < b[sortConfig.key!]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key!] > b[sortConfig.key!]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <section className="py-12 bg-[#fafaf8]">
      <div className="section-shell">
        <div className="premium-card rounded-2xl overflow-hidden bg-[#ffffff]">
          
          {/* Controls Header */}
          <div className="p-6 border-b border-[#E2E4E8]">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              
              <div className="flex items-center gap-4">
                {/* NSE / BSE Toggle */}
                <div className="flex bg-[#E2E4E8]/50 rounded-lg p-1">
                  <button 
                    onClick={() => setExchange("NSE")}
                    className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-colors ${exchange === "NSE" ? "bg-[#ffffff] text-[#0B2341] shadow-sm" : "text-[#657084]"}`}
                  >
                    NSE
                  </button>
                  <button 
                    onClick={() => setExchange("BSE")}
                    className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-colors ${exchange === "BSE" ? "bg-[#ffffff] text-[#0B2341] shadow-sm" : "text-[#657084]"}`}
                  >
                    BSE
                  </button>
                </div>

                <div className="h-6 w-px bg-[#E2E4E8] hidden md:block"></div>

                {/* Filter Toggle */}
                <div className="flex gap-2">
                  {["All", "Gainers", "Losers"].map((f) => (
                    <button
                      key={f}
                      onClick={() => { setFilter(f as any); setPage(1); }}
                      className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${filter === f ? "bg-[#0B2341] text-[#ffffff]" : "bg-[#fafaf8] text-[#657084] hover:bg-[#E2E4E8]/50"}`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 w-full lg:w-auto">
                {/* Search */}
                <div className="relative flex-1 lg:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#657084]" />
                  <input 
                    type="text" 
                    placeholder="Search companies..." 
                    value={search}
                    onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                    className="w-full pl-9 pr-4 py-2 border border-[#E2E4E8] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#0B2341] focus:border-[#0B2341] transition-all bg-[#fafaf8]"
                  />
                </div>

                {/* Dropdown */}
                <div className="relative hidden md:block">
                  <button className="flex items-center gap-2 px-4 py-2 border border-[#E2E4E8] rounded-lg text-sm font-medium text-[#0B2341] bg-[#fafaf8] hover:bg-[#E2E4E8]/20 transition-colors">
                    NIFTY 50 <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Table Area */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-[#E2E4E8] bg-[#fafaf8]">
                  <th className="px-6 py-4 text-xs font-semibold text-[#657084] uppercase tracking-wider cursor-pointer hover:text-[#0B2341]" onClick={() => handleSort('name')}>
                    <div className="flex items-center gap-1">Company <ArrowUpDown className="h-3 w-3" /></div>
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#657084] uppercase tracking-wider cursor-pointer hover:text-[#0B2341]" onClick={() => handleSort('ltp')}>
                    <div className="flex items-center gap-1">LTP <ArrowUpDown className="h-3 w-3" /></div>
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#657084] uppercase tracking-wider hidden md:table-cell">Prev Close</th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#657084] uppercase tracking-wider cursor-pointer hover:text-[#0B2341]" onClick={() => handleSort('change')}>
                    <div className="flex items-center gap-1">Change <ArrowUpDown className="h-3 w-3" /></div>
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#657084] uppercase tracking-wider cursor-pointer hover:text-[#0B2341]" onClick={() => handleSort('changePercent')}>
                    <div className="flex items-center gap-1">% Change <ArrowUpDown className="h-3 w-3" /></div>
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#657084] uppercase tracking-wider hidden lg:table-cell">Volume</th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#657084] uppercase tracking-wider text-right hidden lg:table-cell">Market Cap</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((row) => (
                  <motion.tr 
                    key={row.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border-b border-[#E2E4E8]/50 hover:bg-[#fafaf8] transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <span className="font-semibold text-[#0B2341] group-hover:text-[#D8BE8A] transition-colors">{row.name}</span>
                    </td>
                    <td className="px-6 py-4 font-medium text-[#0B2341]">
                      ₹{row.ltp.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                    </td>
                    <td className="px-6 py-4 text-[#657084] hidden md:table-cell">
                      ₹{row.prevClose.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                    </td>
                    <td className={`px-6 py-4 font-medium ${row.change >= 0 ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                      {row.change >= 0 ? '+' : ''}{row.change.toFixed(2)}
                    </td>
                    <td className="px-6 py-4">
                      <div className={`inline-flex items-center px-2 py-0.5 rounded-md text-sm font-semibold ${row.changePercent >= 0 ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-[#EF4444]/10 text-[#EF4444]'}`}>
                        {row.changePercent >= 0 ? '+' : ''}{row.changePercent.toFixed(2)}%
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[#657084] hidden lg:table-cell">{row.volume}</td>
                    <td className="px-6 py-4 text-[#0B2341] font-medium text-right hidden lg:table-cell">{row.marketCap}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
            
            {paginatedData.length === 0 && (
              <div className="p-8 text-center text-[#657084]">
                No stocks found matching your criteria.
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="p-4 border-t border-[#E2E4E8] flex items-center justify-between">
              <span className="text-sm text-[#657084]">
                Showing {(page - 1) * itemsPerPage + 1} to {Math.min(page * itemsPerPage, filteredData.length)} of {filteredData.length} entries
              </span>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="p-1 rounded-md border border-[#E2E4E8] text-[#0B2341] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#fafaf8]"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <span className="text-sm font-medium text-[#0B2341] px-2">Page {page} of {totalPages}</span>
                <button 
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="p-1 rounded-md border border-[#E2E4E8] text-[#0B2341] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#fafaf8]"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
