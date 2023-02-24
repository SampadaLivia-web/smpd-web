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
            <a href=${product.toggle ? product.image1:product.image2} target="_blank">
                <div class="h-400" style="background-image: url(${product.toggle ? product.image1:product.image2});"></div>
            </a>
            <blockquote class="blockquote p-4">
                <h3 class="mb-5">${product.heading}</h3>
                <footer class="blockquote-footer">${product.desc}</footer>
                <div class="d-flex">
                    <div class="btn btn-outline-dark d-flex justify-content-center align-items-center" id="${2*idx}">
                        <i class="bi bi-arrow-left"></i>
                    </div>
                    <div class="btn btn-outline-dark d-flex justify-content-center align-items-center mx-2" id="${2*idx+1}">
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

var IconDivRef = document.getElementsByClassName('btn-outline-dark');


for(const icon of IconDivRef){
    icon.addEventListener('click', function(event){
        console.log(event);
    })
}