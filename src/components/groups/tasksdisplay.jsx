import {Box,Stack,Heading,VStack} from '@chakra-ui/react'
import CardTask from '../component/card-desktop'




export const TasksDisplay = ({list}) => {
    
    return (<Box h={'auto'} w={'full'}>
        <Stack direction={'row'} spacing='2%'>
            <Box
                padding={'0 0.5% 1% 1%'}
                boxShadow={'-5px 20px 5px lightgray'}
                w={'full'} 
                h={'max-content'}
                maxH={'calc(70vh)'}
                overflow={'auto'}
                css={{
                    '&::-webkit-scrollbar': {
                        display: 'none'
                    }
                }}
            >
                <Heading size={'xs'}>NUEVAS</Heading>
                <VStack paddingTop={'2%'}>
                    {list.filter(e => e.status === "NEW").map(e => <CardTask key={e._id}
                        createdAt={e.createdAt}
                        description={e.description}
                        importance={e.importance}
                        status={e.status}
                        title={e.title}
                    />)}
                </VStack>
            </Box>
            <Box
                padding={'0 0.5% 1% 1%'}
                w={'full'}
                boxShadow={'-5px 20px 5px lightgray'}
                h={'max-content'} maxH={'calc(70vh)'}
                overflow={'auto'}
                css={{
                    '&::-webkit-scrollbar': {
                        display: 'none'
                    }
                }}
            >
                <Heading size={'xs'}>EN PROCESO</Heading>
                <VStack paddingTop={'2%'}>
                    {list.filter(e => e.status === "IN PROGRESS").map(e => <CardTask
                        key={e._id}
                        createdAt={e.createdAt}
                        description={e.description}
                        importance={e.importance}
                        status={e.status}
                        title={e.title}
                    />)}
                </VStack>
            </Box>
            <Box
                padding={'0 0.5% 1% 1%'} w={'full'}
                boxShadow={'-5px 20px 5px lightgray'}
                h={'max-content'} maxH={'calc(70vh)'}
                overflow={'auto'}
                css={{
                    '&::-webkit-scrollbar': {
                        display: 'none'
                    }
                }}
            >
                <Heading size={'xs'}>FINALIZADOS</Heading>
                <VStack paddingTop={'2%'}>
                    {list.filter(e => e.status === "FINISHED").map(e => <CardTask key={e._id}
                        createdAt={e.createdAt}
                        description={e.description}
                        importance={e.importance}
                        status={e.status}
                        title={e.title}
                    />)}
                </VStack>
            </Box>
        </Stack>
    </Box>)
}