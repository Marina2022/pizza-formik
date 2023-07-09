import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="135" cy="121" r="120" />
    <rect x="0" y="251" rx="1" ry="1" width="280" height="31" />
    <rect x="0" y="304" rx="13" ry="13" width="280" height="74" />
    <rect x="4" y="412" rx="9" ry="9" width="81" height="32" />
    <rect x="152" y="411" rx="9" ry="9" width="123" height="55" />
  </ContentLoader>
)

export default Skeleton

