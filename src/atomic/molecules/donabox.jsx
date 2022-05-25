import { Box, Heading, Link, Button } from '@chakra-ui/react'
import { FiExternalLink } from 'react-icons/fi'
import {RiArrowGoBackLine} from 'react-icons/ri'
import {Link as LinkRouter} from 'react-router-dom'



export const DonateBox = () => {

    return (
        <Box maxW={'40rem'}>
            <LinkRouter to={'/'} style={{position:'fixed',top:'calc(1rem)',left:'calc(1rem)'}}>
                <Button leftIcon={<RiArrowGoBackLine />} colorScheme='orange' variant='solid'>
                    Back
                </Button>
            </LinkRouter>
            <Heading paddingBottom={'2rem'}>Colabora con el proyecto </Heading>
            <Link textDecoration={'none'} outline='none' isExternal href={'https://mpago.la/1S34huL'} target={'_blank'} rel='noreferrer' >
                <Button leftIcon={<FiExternalLink />} colorScheme='teal' variant='solid'>
                    Donar
                </Button>
            </Link>
        </Box>
    )
}