// Instructions to every other class
// on how they can be an argument to addMarker

interface Mappable {
    location: {
        lat: number,
        lng: number
    }
}

export class CustomMap {
    private readonly googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 9,
            center: {
                lat: 40.271039,
                lng: 22.499599
            }
        });
    }

    addMarker(mappable: Mappable): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })
    }
}
