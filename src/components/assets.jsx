import { Web3Button } from '@web3modal/react'
import { formatUnits } from 'viem'
import { useAccount, useBalance } from 'wagmi'
 
function Assets({token}) {
  const {address}=useAccount()
  const { data, isError, isLoading,error } = useBalance({
    address: address,
    token: token?.address
  })
  console.log("🚀 ~ file: App.js:7 ~ App ~ data:", data)
 
  if (isLoading) return console.log("🚀 ~ file: assets.jsx:15 ~ Assets ~ isLoading fetching balance:", isLoading)
  if (isError) return   console.log("🚀 ~ file: assets.jsx:15 ~ Assets ~ Error fetching balance:", error)

  return (
    <>
    {formatUnits(data?.value,data?.decimals)>0&&
    <div class="ag-courses_item">
    <a href="#" class="ag-courses-item_link">
    <div class="ag-courses-item_bg">
    </div>
    <div class="ag-courses-item_title">
    {data?.symbol}: {formatUnits(data?.value,data?.decimals)} 
  </div>
      </a>
    </div>}
    </>
  )
}
export default Assets;
