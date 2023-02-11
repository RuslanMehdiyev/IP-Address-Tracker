import { MapContainer, TileLayer, Marker } from "react-leaflet";

const MyMap = ({ data }) => {
  return (
    <div id="map">
      {Object.keys(data).length > 0 && (
        <MapContainer
          center={[data?.latitude, data?.longitude]}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: "calc(100vh - 245px)" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[data?.latitude, data?.longitude]}></Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default MyMap;
