const rootUrl = "https://maps.googleapis.com/maps/api/geocode/json";
const googleMapsKey = "&key=AIzaSyA2KYb1Nb3a8gl96vEo1n_pkAOwOs5Y5d0";

export const fetchLocation = (lat, lon) => {
  const url = rootUrl + "?latlng=" + lat + "," + lon + googleMapsKey;
  console.log(url);

  return fetch(url)
    .then(res => res.json())
    .then(json => ({
      city: json.results[0].address_components[2].long_name,
      country:json.results[1].address_components[3].long_name
    }));
};
