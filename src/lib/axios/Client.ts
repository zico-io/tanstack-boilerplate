import axios, { AxiosRequestConfig } from 'axios'

export const AxiosClient = (config: AxiosRequestConfig) => axios.create(config)
