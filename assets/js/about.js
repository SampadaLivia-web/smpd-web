var productRef = document.getElementById('product');

var products = [
    {
        image1:'./assets/img/flats/1045/image1.jpg',
        image2:'./assets/img/flats/1045/image2.jpg',
        heading:'2BHK 1045 Sq. Ft.',
        desc:'Descriptions'
    },
    {
        image1:'./assets/img/flats/1330/image1.jpg',
        image2:'./assets/img/flats/1330/image2.jpg',
        heading:'3BHK 1330 Sq.Ft.',
        desc:'Descriptions'
    },
    {
        image1:'./assets/img/flats/1690/image1.jpg',
        image2:'./assets/img/flats/1690/image2.jpg',
        heading:'3BHK 1690 Sq.Ft.',
        desc:'Descriptions'
    },
    {
        image1:'./assets/img/flats/1870/image1.jpg',
        image2:'./assets/img/flats/1870/image2.jpg',
        heading:'3BHK 1870 Sq.Ft.',
        desc:'Descriptions'
    },
    {
        image1:'./assets/img/flats/2320/image1.jpg',
        image2:'./assets/img/flats/2320/image2.jpg',
        heading:'4BHK 2320 Sq.Ft.',
        desc:'Descriptions'
    }
]


const getProduct = (product, idx) => {
    return `
        <div class="my-4 col-md-6 col-lg-4">
            <div class="shadow rounded">
                <div id="carousel${idx}" class="carousel shadow-sm slide" data-ride="carousel">
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
                        <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                    </button>
                    <button class="carousel-control-next" data-bs-target="#carousel${idx}" type="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
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