var productRef = document.getElementById('product');

var products = [
    {
        image1:'./assets/img/cta-bg.jpg',
        image2:'./assets/img/counts-img.jpg',
        heading:'2BHK 1045 Sq. Ft.',
        desc:'2BED + KITCHEN + DRAWING + DINNING + 2 TOILETS + 3 BALCONIES <br> SUPER AREA = 1045 Sq.Ft. <br> Rs. 28.21* Lakh',
    },
    {
        image1:'./assets/img/cta-bg.jpg',
        image2:'./assets/img/counts-img.jpg',
        heading:'3BHK 1330 Sq.Ft.',
        desc:'3BED + KITCHEN + DRAWING + DINNING + 2 TOILETS + 4 BALCONIES <br> SUPER AREA = 1330 Sq.Ft. <br> Rs. 35.91* Lakh',
    },
    {
        image1:'./assets/img/cta-bg.jpg',
        image2:'./assets/img/counts-img.jpg',
        heading:'3BHK 1690 Sq.Ft.',
        desc:'3BED + KITCHEN + DRAWING + DINNING + 3 TOILETS + 3 BALCONIES <br> SUPER AREA = 1690 Sq.Ft. <br> Rs. 45.63* Lakh'
    },
    {
        image1:'./assets/img/cta-bg.jpg',
        image2:'./assets/img/counts-img.jpg',
        heading:'3BHK 1870 Sq.Ft.',
        desc:'3BED + KITCHEN + DRAWING + DINNING + 3 TOILETS + 3 BALCONIES + SERVENT ROOM WITH TOILET AND BALCONY <br> SUPER AREA = 1870 Sq.Ft. <br> Rs. 50.49* Lakh'
    },
    {
        image1:'./assets/img/cta-bg.jpg',
        image2:'./assets/img/counts-img.jpg',
        heading:'4BHK 2320 Sq.Ft.',
        desc:'4BED + KITCHEN + DRAWING + DINNING + 3 TOILETS + 5 BALCONIES + SERVENT ROOM WITH TOILET AND BALCONY <br> SUPER AREA = 2320 Sq.Ft. <br> Rs. 62.64* Lakh'
    }
]


const getProduct = (product, idx) => {
    return `
        <div class="my-4 col-md-6 col-lg-4">
            <div class="shadow rounded">
                <div id="carousel${idx}" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <a href=${product.image1} target="_blank">
                                <div class="h-400" style="background-image: url(${product.image1});"></div>
                            </a>
                        </div>
                        <div class="carousel-item">
                            <a href=${product.image2} target="_blank">
                                <div class="h-400" style="background-image: url(${product.image2});"></div>
                            </a>
                        </div>
                    </div>
                    <button class="carousel-control-prev" data-bs-target="#carousel${idx}" type="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    </button>
                    <button class="carousel-control-next" data-bs-target="#carousel${idx}" type="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    </button>
                </div>
                <blockquote class="blockquote p-4">
                    <h3 class="mb-5">${product.heading}</h3>
                    <footer class="blockquote-footer">${product.desc}</footer>
                </blockquote>
            </div>
        </div>
    `
}

var productInnerHTML = '';

var idx=0;
for(const product of products) {
    productInnerHTML+=getProduct(product, idx);
    idx++;
}

productRef.innerHTML=productInnerHTML;