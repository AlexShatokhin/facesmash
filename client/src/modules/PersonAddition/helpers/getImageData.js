export default function getImageData(value){
    const image = value.assets[0];
    return {
        preview: image.base64,
        uri: image.uri,
        type: image.mimeType
    };
}
