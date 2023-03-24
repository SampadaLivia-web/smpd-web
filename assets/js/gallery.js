var locationVar = document.getElementById("location");

var loc = ['Expo Mart', 'Nearby Express Routes/ Localities', 'Jaypee Cricket Stadium', 'Colleges','Universities', 'Schools/ Universities' ,'Hospitals' ,'Hotels and Resorts', 'Airports/ Helipads', 'Metros', 'Jaypee Greens Pari Chowk', 'Knowledge Park II', 'Pari Chowk']

for(var i=1; i<=13; i++){
    locationVar.innerHTML+=`<div class="col-12 col-lg-4 col-md-3 pb-4">
    <a href="./assets/img/gallery/location${i}.jpeg" target="_blank">
        <div class="rounded shadow-sm h-400" style="background-color: white background-size: contain; background-image: url(./assets/img/gallery/location${i}.jpeg);"></div>                
    </a>
    <h5 class="text-center my-4"><strong>${loc[i-1]}<strong></h5>
</div>`
}