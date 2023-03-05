import { Box, Container, HStack, Radio, RadioGroup, Text, VStack, Image } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { server } from '../index';
import ErrorComponent from './ErrorComponent';

const CoinDetails = () => {
    
    const [coins, setCoins] = useState({})
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [currency, setCurrency] = useState('inr');
    
    const params = useParams();

    useEffect(() => {
        const fetchCoin = async () => {
            try {
                const { data } = await axios.get(`${server}/coins/${params.id}`);
                console.log(data);
                setCoins(data);
                setLoading(false);

            } catch (error) {
                setError(true);
                setLoading(false);
            }
        }

        fetchCoin();

    }, [params.id]);

    if (error) {
        return <ErrorComponent message={'Error While Fetching Coin'} />;
    }

    return <Container maxW={'container.xl'}>
        {loading ? <Loader /> : (
            <>
                <Box width={'full'} borderRadius={1}>
asfdasdf
                </Box>

                {/* Button */}

                <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
                <HStack spacing={'4'}>
                    {/* currency === 'inr' ? '₹' : currency === "eur" ? "€" : "$"; */}
                    <Radio value={'inr'}>INR</Radio>
                    <Radio value={'usd'}>USD</Radio>
                    <Radio value={'eur'}>EUR</Radio>
                </HStack>
            </RadioGroup>

            <VStack spacing={'4 '} p='16' alignItems={'flex-start'}>
                <Text fontSize={'small'} alignSelf='center' opacity={'0.7'}>
                    Last updated on {Date().split('G')[0]} 
                    <Image src={coins.image.large}/>
                    </Text>
            </VStack>

            </>
        )}
    </Container>
}

export default CoinDetails;