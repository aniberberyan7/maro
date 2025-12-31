"use client";

import { YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import { useState } from 'react';
import { locations } from '../data/locations';

const MapYandex = () => {
    const [currentLocation, setCurrentLocation] = useState("Armenia");
    const currentLocationData = locations[currentLocation]; //coordinates and shops of the selected location
  return (
        <YMaps preload={false} version="2.1" query={{lang: 'en_RU', apikey: 'c9fd0463-1cc9-4839-a564-4c610dfe7d94', load: 'package.full' }}>
            <section>
                <div className="flex flex-col justify-center xl:max-w-[1208px]">
                    <h2 className="text-2xl xl:text-4xl text-left font-bold text-[#414141] mb-4 md:mb-8 xl:mb-10">
                        Our Stores
                    </h2>
                    <div className="mb-5 flex gap-x-2 gap-y-3 flex-wrap">
                        {(Object.keys(locations)).map((cityKey) => {
                            const isActive = cityKey === currentLocation;
                            return (
                                <button key={cityKey} onClick={() => setCurrentLocation(cityKey)} className={`p-2 hover:bg-[#a4d89d74] rounded cursor-pointer transition-colors duration-500 justify-center items-center text-xs active:shadow-(--shadow-button-active) border-none ${isActive ? "bg-(--color-primary) text-white hover:shadow-(--shadow-button-default)" : "bg-[#f3f2f1] hover:shadow-(--shadow-button-secondary)"}`}>
                                    {locations[cityKey].name}
                                </button>
                            )
                        })}
                    </div>
                    <Map 
                        options={{suppressMapOpenBlock: true}} // to disable Yandex app suggestion
                        defaultState={{ center: currentLocationData.center, zoom: 16 }}
                        state={{ center: currentLocationData.center, zoom: 8 }} 
                        className="w-full h-[354px] md:h-[554px] no-ymaps-copyright"
                    >
                        {locations[currentLocation].shops.map((shop) => (
                        <Placemark 
                            key={shop.id}
                            geometry={shop.coordinates}
                            options={{
                                iconLayout: 'default#image',
                                iconImageHref: '/icons-map/icon-location.svg',
                                iconImageSize: [32, 32],
                                iconImageOffset: [-16, -16],
                            }}
                            properties={{
                                hintContent: shop.name
                            }}
                        />
                        ))}
                    </Map>
                </div>
            </section>
        </YMaps>
  )
        
    
}

export default MapYandex
