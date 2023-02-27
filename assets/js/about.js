var productRef = document.getElementById('product');

var products = [
    {
        image1:'./assets/img/cta-bg.jpg',
        image2:'./assets/img/counts-img.jpg',
        heading:'2BHK 1045 Sq. Ft.',
        desc:'Descriptions',
        toggle:true
    },
    {
        image1:'./assets/img/cta-bg.jpg',
        image2:'./assets/img/counts-img.jpg',
        heading:'2BHK 1045 Sq. Ft.',
        desc:'Descriptions',
        toggle:true
    },
    {
        image1:'./assets/img/cta-bg.jpg',
        image2:'./assets/img/counts-img.jpg',
        heading:'2BHK 1045 Sq. Ft.',
        desc:'Descriptions',
        toggle:true
    },
    {
        image1:'./assets/img/cta-bg.jpg',
        image2:'./assets/img/counts-img.jpg',
        heading:'2BHK 1045 Sq. Ft.',
        desc:'Descriptions',
        toggle:true
    },
    {
        image1:'./assets/img/cta-bg.jpg',
        image2:'./assets/img/counts-img.jpg',
        heading:'2BHK 1045 Sq. Ft.',
        desc:'Descriptions',
        toggle:true
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
                    <div class="d-flex">
                        <div class="btn btn-outline-dark d-flex justify-content-center align-items-center">
                            <i class="bi bi-arrow-left"></i>
                        </div>
                        <div class="btn btn-outline-dark d-flex justify-content-center align-items-center mx-2">
                            <i class="bi bi-arrow-right"></i>
                        </div>
                    </div>
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