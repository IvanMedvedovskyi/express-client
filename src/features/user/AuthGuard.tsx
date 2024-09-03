import React from "react"
import { useCurrentQuery } from "../../app/services/userApi"
import { Spinner } from "@nextui-org/react"

const AuthGuard = ({ children }: { children: JSX.Element }) => {
  const { isLoading } = useCurrentQuery()

  if (isLoading) {
    return <Spinner className="flex items-center justify-center min-h-svh"/>
  }

  return children
}

export default AuthGuard
