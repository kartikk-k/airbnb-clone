import React from 'react'
import { Marker, Popup } from 'react-map-gl';

interface Props {
    item: PropertyObject,
    Open?: boolean,
}

function MapMarker({ item, Open }: Props) {

    const [isOpen, setIsOpen] = React.useState(Open ? Open : false)

    return (
        <div>
            <Marker
                longitude={item.long}
                latitude={item.lat}
                offset={[-20, 0]}
            >
                <p role='img' onClick={() => setIsOpen(true)} className='text-2xl cursor-pointer hover:animate-none lg:duration-200 active:scale-125 animate-pulse'>📌</p>
            </Marker>

            {isOpen === true && (
                <Popup
                    onClose={() => setIsOpen(false)}
                    closeOnClick={false}
                    latitude={item.lat!}
                    longitude={item.long!}
                    closeOnMove={true}
                >
                    <div>
                        <img src={item.img} className='object-cover w-full h-20 rounded-md' />
                        <p className='py-1 leading-4 text-white'>{item.title} at home</p>
                    </div>
                </Popup>
            )}
        </div>
    )
}

export default MapMarker