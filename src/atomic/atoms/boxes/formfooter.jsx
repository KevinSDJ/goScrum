import {Stack,HStack,Text,Divider} from '@chakra-ui/react'


export const FormFooter=({signinbtn:Signinbtn,otherauthmethod:Otherauthmethod})=>{
    return (<Stack spacing="6">
    <Signinbtn label={'Sign in'} colorScheme={'red'} variant="solid" />
    {Otherauthmethod&&<HStack>
        <Divider />
        <Text fontSize="sm" whiteSpace="nowrap" color="muted">
            or continue with
        </Text>
        <Divider />
    </HStack>}
    {Otherauthmethod&& <Otherauthmethod/>}
</Stack>)
}