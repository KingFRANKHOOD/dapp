import { promises } from 'dns'
import Link from 'next/link'
interface HeaderProps {
  connectWallet: () => Promise<void>
}

const Header: React.FC = () => {
  return (
    <div>
      Header
    </div>
  )
}

export default Header
