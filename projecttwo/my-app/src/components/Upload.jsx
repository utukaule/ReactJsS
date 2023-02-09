import { Container, VStack } from '@chakra-ui/react';
import React from 'react';
import {AiOutlineCloudUpload} from 'react-icons/ai';

const Upload = () => {
    return <Container maxW={'container.xl'} h={"100vh"} p={'16'}>


        <VStack color={'purple.500'} h={'full'} justifyContent={"center"}>
            <AiOutlineCloudUpload />
        </VStack>


    </Container>
}

export default Upload