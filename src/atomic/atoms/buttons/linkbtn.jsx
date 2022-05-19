import { Button } from "@chakra-ui/react"

export const Linkbtn=({label,color,size})=>{
    return <Button variant="link" colorScheme={color} size={size}>
          {label}
    </Button>
}