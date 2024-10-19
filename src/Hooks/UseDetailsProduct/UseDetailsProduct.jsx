import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

export default function UseDetailsProduct() {

    let  { id } = useParams()

    // console.log(id);
    
    function getDetailsProduct(id) {
        return axios.get(`https://fakestoreapi.com/products/${id}`)
    }
    let response= useQuery({
        queryKey: ['detailsProduct'],
        queryFn: () => getDetailsProduct(id),
    })
  return response
}
