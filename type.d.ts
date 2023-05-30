import React from "react"

export type ButtonProps = {
    text ?: string
    children ?: React.ReactNode
    iconPosition?:"left"|"right",
    width?:"full"|"fit"
    type?:"button"|"reset"|"submit"
    onClick ?:(e:any) => void
}
export type UserInfoType = {
    name ?: string
    type ?: string
    image ? :string
}