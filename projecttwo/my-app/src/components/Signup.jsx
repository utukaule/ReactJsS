import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return <Container maxW={'contianer.xl'} h={'100vh'} p={'16'}>

        <form action="">
            <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>

                <Heading alignSelf={'center'} fontSize={'16'}>Accretion Marketing Group</Heading>
                <Avatar alignSelf={'center'} boxSize={'32'}/>

                <Input placeholder={'Name'} type={'text'} required focusBorderColor={'purple.500'} />    
                
                <Input placeholder={'Email'} type={'email'} required focusBorderColor={'purple'} />

                <Input placeholder={'Password'} type={'password'} required focusBorderColor={'purple'} />

                

                <Button colorScheme={'purple'} type={'submit'}>SignUp</Button>
                
                <Text textAlign={'right'}>Already have account ?{" "}
                <Button variant={'link'} colorScheme={'purple'}>    
                    <Link to={'/login'}> Login</Link>
                </Button>
                </Text>
            </VStack>
        </form>

    </Container>
}

export default SignUp