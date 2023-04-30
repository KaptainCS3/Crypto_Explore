import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { Fade } from "react-reveal";
const MapView = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_KEY,
  });

  const containerStyle = {
    width: "100%",
    height: "35rem",
  };

  const center = {
    lat: 4.159302,
    lng: 9.243536,
  };

  if (!isLoaded) return <div className="flex justify-center items-center">Loading...</div>;
  return (
    <Fade bottom>
    <section className="mb-24">
      <GoogleMap zoom={10} center={center} mapContainerStyle={containerStyle} />
    </section>
    </Fade>
  );
};
export default MapView;
