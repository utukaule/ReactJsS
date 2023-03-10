import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion'
const Home = () => {
    return <Box bgColor={'black'} w={'full'} h={'80vh'}>
        <motion.div
            style={{
                height: '80vh',
            }}
            animate={{
                translateY: '20px',
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse'
            }}
        >
            <Image w={'full'} h={'full'} objectFit={'contain'} src={'https://images.unsplash.com/photo-1639152201720-5e536d254d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'} />
        </motion.div>

        <Text fontSize={'6xl'} textAlign={'center'} fontWeight={'thin'} color={'whiteAlpha.700'} pt={'0'} >CryptoFuture</Text>
    </Box>
}
export default Home;