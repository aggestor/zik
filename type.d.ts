export type ButtonProps = {
    text : string
    icon?: JSX.Element
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