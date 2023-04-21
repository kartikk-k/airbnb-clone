import { useEffect, useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

interface Props {
    searchResults: any
}


function Map({ searchResults }: Props) {

    const [centerViewport, setCenterViewport] = useState<any>()
    const [selectedLocation, setSelectedLocation] = useState<any>()

    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: centerViewport?.latitude || 37.7577,
        longitude: centerViewport?.longitude || -122.4376,
        zoom: 10
    })

    // Transform the search results object into the {latitude: 52.516272, longitude: 13.377722} object
    useEffect(() => {
        const coordinates = searchResults.map((item: any) => ({
            longitude: item.long,
            latitude: item.lat
        }))

        const center = getCenter(coordinates)
        setCenterViewport(center)

    }, [])

    useEffect(() => {
        if (!centerViewport) return

        setViewport({
            ...viewport,
            latitude: centerViewport.latitude,
            longitude: centerViewport.longitude
        })

        console.log("centerViewport: ", centerViewport)

    }, [centerViewport])


    // check whether the viewport is centered

    // useEffect(() => {
    //     if (viewport.latitude !== centerViewport?.latitude) return console.log("not centered")
    //     console.log("centered")
    // }, [viewport])

    const handleViewportChange = (latitude: number, longitude: number) => {
        setViewport({ ...viewport, latitude, longitude })
    }

    const handleZoomChange = (latitude: number, longitude: number, zoom: number) => {
        setViewport({ ...viewport, zoom, latitude, longitude })
    }

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/pro2web/clgqxiepz000901oa2u5vfqs9"
            mapboxAccessToken={process.env.mapbox_key}
            {...viewport}
            onDrag={(e) => handleViewportChange(e.viewState.latitude, e.viewState.longitude)}
            onZoom={(e) => handleZoomChange(e.viewState.latitude, e.viewState.longitude, e.viewState.zoom)}
        >

            <div>
                {searchResults.map((item: PropertyObject) => {
                    return (
                        <div key={item.id}>
                            <Marker
                                longitude={item.long}
                                latitude={item.lat}
                                offset={[-20, -10]}
                            >
                                <p role='img' onClick={() => setSelectedLocation(item.id)} className='text-2xl animate-pulse'>📌</p>
                            </Marker>
                            {/* {selectedLocation === item?.id ? (
                                <Popup
                                    onClose={() => setSelectedLocation(null)}
                                    closeOnClick={true}
                                    latitude={item.lat!}
                                    longitude={item.long!}
                                >
                                    {item.title}
                                </Popup>
                            ) : false} */}
                        </div>
                    )
                })}
            </div>

        </ReactMapGL>
    )
}

export default Map