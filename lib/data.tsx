export interface NFTItem {
    name: string
    image: string
  }
  
  const baseImages = [
    "/nft_009.jpg",
    "/nft_042.jpg",
    "/nft_044.jpg",
    "/nft_050.jpg",
    "/nft_077.jpg",
    "/nft_078.jpg",
    "/nft_089.jpg",
    "/nft_150.jpg",
    "/nft_151.jpg",
    "/nft_155.jpg",
    "/nft_158.jpg",
    "/nft_164.jpg",
    "/nft_181.jpg",
    "/nft_252.jpg",
    "/nft_253.jpg",
    "/nft_257.jpg",
    "/nft_272.jpg",
    "/nft_274.jpg",
    "/nft_276.jpg",
    "/nft_277.jpg",
  ]
  
  export const nftItems: NFTItem[] = baseImages.map((imagePath) => {
    const match = imagePath.match(/_(\d+)\.jpg$/)
    const id = match ? match[1] : "000"
    return {
      name: `Zyper NFT #${id}`,
      image: imagePath,
    }
  })
  