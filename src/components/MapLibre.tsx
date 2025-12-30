"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function Map() {
  const mapContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://demotiles.maplibre.org/style.json", // free OpenStreetMap tiles
      center: [44.5152, 40.1872], // Yerevan example
      zoom: 10
    });

    // Optional: add a marker
    new maplibregl.Marker()
      .setLngLat([44.5152, 40.1872])
      .addTo(map);

    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapContainer}
      className="w-full h-[400px] md:h-[600px]"
    />
  );
}
