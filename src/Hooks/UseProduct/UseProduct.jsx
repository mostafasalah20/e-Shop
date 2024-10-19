import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import React from 'react'

export default function UseProduct() {

    function getProduct() {
        return axios.get('https://fakestoreapi.com/products');
    }

    let response= useQuery({
        queryKey: ['products'],
        queryFn: ()=>getProduct(),
    })

  return response
}
