import { Button } from "@chakra-ui/react"

export const Linkbtn=({label,color,size,onclick})=>{
    return <Button onClick={onclick} variant="link" colorScheme={color} size={size}>
          {label}
    </Button>
}