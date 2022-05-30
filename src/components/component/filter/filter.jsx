import { HStack, RadioGroup, Stack, Radio, Select, useBreakpointValue, VStack ,Box} from '@chakra-ui/react'
import { useState } from 'react'
import { useScreentype } from '../../../hooks'
import { Searchbar } from './../../groups'

export const Filter = ({ data, setList, direction, spacing }) => {
    let { userName } = JSON.parse(localStorage.getItem('goScrumUsr'))
    let [checked,setChecked]= useState('Todos')
    let ismobile=useScreentype()
    const handleChangeSelect = (e) => {
        if (e.target.value === 'ALL') {
            setList(data)
        } else {
            setList(data.filter(task => task.importance === e.target.value))
        }
    }
    const onChecked = (e) => {
        if (e === 'Mis Tareas') {
            setList(data.filter(task => task.user.userName === userName))
        } else {
            setList(data)
        }
        setChecked(e)
    }
    return (<>
        {!ismobile&& <HStack spacing={spacing || 30} paddingX={'3'}>
            <Searchbar data={data} setList={setList} />
            <RadioGroup onChange={onChecked} value={checked} >
                <Stack direction='row'>
                    <Radio 
                    colorScheme={'orange'} 
                    value='Todos'>Todos</Radio>
                    <Radio 
                    colorScheme={'orange'} 
                    value='Mis Tareas'
                    >Mis Tareas</Radio>
                </Stack>
            </RadioGroup>
            <Select 
            borderColor={'gray'} 
            defaultValue={'ALL'} 
            onChange={handleChangeSelect} 
            w={useBreakpointValue({ base: '100px', sm: '200px', md: '200px', lg: '200px' })} >
                <option value='ALL'>All</option>
                <option value='LOW'>Low</option>
                <option value='MEDIUM'>Medium</option>
                <option value='HIGH'>High</option>
            </Select>
        </HStack> || <VStack align={'stretch'}>
                <Searchbar data={data} setList={setList} />
                <Box display={'flex'} justifyContent='space-between' >
                <RadioGroup onChange={onChecked} w='sm' display={'flex'} alignItems={'center'} value={checked} fontSize={'xs'}  >
                    <Stack direction='row'>
                        <Radio colorScheme={'orange'} size={'sm'} defaultChecked  value='Todos'>Todos</Radio>
                        <Radio colorScheme={'orange'} size={'sm'} value='Mis Tareas'>Mis Tareas</Radio>
                    </Stack>
                </RadioGroup>
                <Select borderColor={'gray'} fontSize='xs' padding={0} defaultValue={'ALL'} onChange={handleChangeSelect} w={useBreakpointValue({ base: '150px', sm: '150px', md: '200px', lg: '300px' })} >
                    <option value='ALL'>All</option>
                    <option value='LOW'>Low</option>
                    <option value='MEDIUM'>Medium</option>
                    <option value='HIGH'>High</option>
                </Select>
                </Box>
            </VStack>}
    </>
    )
} 