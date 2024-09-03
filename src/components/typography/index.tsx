import React from "react"

type Props = {
  children: string
  size?: string
}

const Typograpghy: React.FC<Props> = ({ children, size = "text-xl" }) => {
  return <p className={`${size}`}>{children}</p>
}

export default Typograpghy
