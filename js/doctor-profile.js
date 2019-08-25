$('#bookingInformation').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})




$("#imgsDisplay").on("click" , function () {
    $(".doctor-profile-imgs-container").removeClass("d-none");
    $(this).removeClass("display");
});