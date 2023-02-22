import axios from 'axios'
import { useEffect } from 'react'
import { filmsUrl } from '../components/utils'

const useGetFilms = (setList) => {
    useEffect(
        () => {
            const ApiMovies = async() => {
                
                const url = filmsUrl()

                try {
                    const {data} = await axios.get(url)
                    return setList(data)
                }catch(e){
                    console.log(e)
                }

            }

            ApiMovies()
        }, [setList]
    )
}

export default useGetFilms