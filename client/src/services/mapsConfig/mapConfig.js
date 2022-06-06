import  mapStyles from "./mapStyles"
const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "85vh",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 32.794241949530296,
  lng: 34.98972566204482,
};

export {libraries ,mapContainerStyle,options ,center}
