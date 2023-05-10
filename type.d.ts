export type ButtonProps = {
    text : string
    icon?: JSX.Element
    iconPosition?:"left"|"right",
    width?:"full"|"fit"
    onClick ?:(e:any) => void
}