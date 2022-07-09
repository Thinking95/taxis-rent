import { useEffect } from "react"
import mapboxgl from "mapbox-gl"

const style = {
    wrapper: `flex-1 h-full w-full`,
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN


const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/thinking95/cl5de4y9q000415rvm8hbvg4z',
            center: [16.818464, 96.185284,],
            zoom: 3,
        })
    }, []);

  return <div className={style.wrapper} id='map' />
}

export default Map