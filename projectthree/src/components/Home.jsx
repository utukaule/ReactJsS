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
            <Image w={'full'} h={'full'} objectFit={'contain'} src={'https://github.com/meabhisingh/react-crypto-app/blob/master/src/assets/btc.png?raw=true'} />
        </motion.div>

        <Text fontSize={'6xl'} textAlign={'center'} fontWeight={'thin'} color={'whiteAlpha.700'} pt={'0'} >CryptoFuture</Text>
    </Box>
}
export default Home;