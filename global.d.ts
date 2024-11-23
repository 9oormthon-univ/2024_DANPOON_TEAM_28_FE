declare global {
    interface Window {
        kakao: any;
    }
}

declare namespace kakao {
    namespace maps {
        class LatLng {
            constructor(latitude: number, longitude: number);
        }
        class Map {
            constructor(container: HTMLElement, options: MapOptions);
        }
        class Marker {
            constructor(options: MarkerOptions);
            setMap(map: Map | null): void;
            setImage(image: MarkerImage): void;
        }
        class MarkerImage {
            constructor(src: string, size: Size, options?: { offset: Point });
        }
        class CustomOverlay {
            constructor(options: CustomOverlayOptions);
            setMap(map: Map | null): void;
        }
        class Size {
            constructor(width: number, height: number);
        }
        class Point {
            constructor(x: number, y: number);
        }

        interface MapOptions {
            center: LatLng;
            level: number;
        }

        interface MarkerOptions {
            position: LatLng;
            map?: Map;
            image?: MarkerImage;
        }

        interface CustomOverlayOptions {
            position: LatLng;
            content: string | HTMLElement;
            map?: Map;
        }
    }
}

export {};
