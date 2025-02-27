"use client"

import { useState, useEffect } from "react"
import LeaderBoardData from "../data/LeaderboardData"

type LeaderboardEntry = {
  rank: number
  user: string
  cleanupsDone: number
  referrals: number
  dcuPoints: number
}

export default function Table() {
  const [data, setData] = useState<LeaderboardEntry[]>([])
  const [sortConfig, setSortConfig] = useState<{ key: keyof LeaderboardEntry | null; direction: "asc" | "desc" }>({
    key: null,
    direction: "asc",
  })
  const [loading, setLoading] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = 9

  useEffect(() => {
    setTimeout(() => {
      setData(LeaderBoardData)
      setLoading(false)
    }, 1000)
  }, [])

  const handleSort = (key: keyof LeaderboardEntry) => {
    if (loading) return
    setLoading(true)

    let direction: "asc" | "desc" = "asc"
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc"
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1
      return 0
    })

    setTimeout(() => {
      setData(sortedData)
      setSortConfig({ key, direction })
      setLoading(false)
    }, 500)
  }


  const totalPages = Math.ceil(data.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage)

  return (
    <>
    <div className="mx-auto h-full min-h-[565px] w-full min-w-[300px] max-w-[1045px] overflow-x-auto px-5">
      {loading && <p className="text-center text-white">Loading...</p>}
      {!loading && (
        <>
          <table className="table-auto border-separate border-spacing-y-3">
            <thead className="bg-[#ECF9F033]">
              <tr className="border-[1px] border-[#ECF9F033] text-[#31591F]">
                <th
                  className="w-14 border-[1px] border-[#ECF9F033] px-6 py-4 text-left text-[15px] font-normal cursor-pointer hover:bg-[#FAFF00] hover:text-black transition-colors duration-200"
                  onClick={() => handleSort("rank")}
                >
                  Rank {sortConfig.key === "rank" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
                </th>
                <th className="w-[323px] px-6 py-4 text-center">User</th>
                <th
                  className="w-[222px] px-6 py-4 text-left cursor-pointer hover:bg-[#FAFF00] hover:text-black transition-colors duration-200"
                  onClick={() => handleSort("cleanupsDone")}
                >
                  Cleanups Done {sortConfig.key === "cleanupsDone" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
                </th>
                <th
                  className="w-[222px] px-6 py-4 text-center cursor-pointer hover:bg-[#FAFF00] hover:text-black transition-colors duration-200"
                  onClick={() => handleSort("referrals")}
                >
                  Referrals {sortConfig.key === "referrals" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
                </th>
                <th
                  className="w-[222px] px-6 py-4 text-center cursor-pointer hover:bg-[#FAFF00] hover:text-black transition-colors duration-200"
                  onClick={() => handleSort("dcuPoints")}
                >
                  Total $DCU points {sortConfig.key === "dcuPoints" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((user, id) => (
                <tr key={id} className="border-b border-gray-100 bg-[#0000001A] text-[15px] font-normal">
                  <td className="w-14 bg-[#ECF9F033] px-6 py-4 text-base text-[#31591F]">{user.rank}</td>
                  <td className="w-[323px] px-6 py-4 text-center text-[1.15rem] text-[#FAFF00]">{user.user}</td>
                  <td className="w-[222px] px-6 py-4 text-left text-[1.1rem] text-[#FAFF00]">{user.cleanupsDone}</td>
                  <td className="w-[222px] px-6 py-4 text-[15px] font-normal text-[#FAFF00]">{user.referrals}</td>
                  <td className="w-[222px] px-6 py-4 text-[15px] font-normal text-[#FAFF00]">{user.dcuPoints}</td>
                </tr>
              ))}
            </tbody>
          </table>

 
          
        </>
      )}
      
    </div>
    <div className="mt-4 flex items-center justify-center gap-4 w-full  ">
            <button
              className="px-4 py-2 bg-[#FAFF00] text-black rounded-md disabled:opacity-50 hover:bg-green-500 border-transparent hover:border-black border-2   transition-all duration-200"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="text-black">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="px-4 py-2 bg-[#FAFF00] text-black rounded-md disabled:opacity-50 hover:bg-green-500  border-transparent hover:border-black border-2   transition-all duration-200"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
          </>
  )
}
