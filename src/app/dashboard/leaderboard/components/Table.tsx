import LeaderBoardData from '../data/LeaderboardData'

export default function Table() {
  return (
    <div className='mx-auto h-full  w-full min-w-[300px] max-w-[1045px] overflow-x-auto  bg-green-500 px-10'>
      <table className='table-auto border-separate border-spacing-y-3'>
        <thead className='bg-[#ECF9F033]'>
          <tr className='border-[1px] border-[#ECF9F033] text-[#31591F]'>
            <th className='w-14 border-[1px] border-[#ECF9F033] px-6 py-4 text-left text-[15px] font-normal'>
              Rank
            </th>
            <th className='w-[323px] px-6 py-4 text-center'>User</th>
            <th className='w-[222px] px-6 py-4 text-left'>Cleanups Done</th>
            <th className='w-[222px] px-6 py-4 text-center'>Referrals</th>
            <th className='w-[222px] px-6 py-4 text-center'>
              Total $DCU points
            </th>
          </tr>
        </thead>
        <tbody>
          {LeaderBoardData.map((user, id) => (
            <tr
              key={id}
              className='border-b border-gray-100 bg-[#0000001A] text-[15px] font-normal'
            >
              <td className='w-14 bg-[#ECF9F033] px-6 py-4 text-base text-[#31591F]'>
                {user.rank}
              </td>
              <td className='w-[323px] px-6 py-4 text-center text-[1.15rem] text-[#FAFF00]'>
                {user.user}
              </td>
              <td className='w-[222px] px-6 py-4 text-left text-[1.1rem] text-[#FAFF00]'>
                {user.cleanupsDone}
              </td>
              <td className='w-[222px] px-6 py-4 text-[15px] font-normal text-[#FAFF00]'>
                {user.referrals}
              </td>
              <td className='w-[222px] px-6 py-4 text-[15px] font-normal text-[#FAFF00]'>
                {user.dcuPoints}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
