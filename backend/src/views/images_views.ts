import Image from '../models/Image';

export default {
    render(image : Image) {
        return {
            id: image.id,
            url: `https://3333-e3cbe1fb-06b9-4c27-86d3-c1719ce0472a.ws-us02.gitpod.io/uploads/${image.path}`,
        };
    },


    renderMany(images: Image[]) {
        return images.map(image => this.render(image));
    }
}