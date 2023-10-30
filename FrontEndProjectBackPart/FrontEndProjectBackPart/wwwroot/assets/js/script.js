$(document).ready(function () {
  //header js
  $(".lang a").hover(function (e) {
    e.preventDefault();
    $(".lang-items").toggleClass("d-none");
  });

  $(".currency a").hover(function (e) {
    e.preventDefault();

    $(".currency-items").toggleClass("d-none");
  });

  $(".lang-items").hover(function () {
    $(this).toggleClass("d-none");
  });

  $(".currency-items").hover(function () {
    $(this).toggleClass("d-none");
  });

  $(".social-media a").click(function (e) {
    e.preventDefault();

    $(".social-media-items").toggleClass("d-none");
    e.stopPropagation();
  });

  $(".open-sidebar").click(function (e) {
    e.preventDefault();
    $(".menu-sidebar").removeClass("transform-sidebar");
    $(".sidebar-overlay").removeClass("d-none");
    e.stopPropagation();
  });

  $(".sidebar-closer i").click(function (e) {
    $(".menu-sidebar").addClass("transform-sidebar");
    $(".sidebar-overlay").addClass("d-none");
    e.stopPropagation();
  });

  $(".open-home").mouseover(function (e) {
    e.preventDefault();
    $(".home-items").removeClass("d-none");
  });

  $(".open-home").mouseout(function (e) {
    e.preventDefault();
    $(".home-items").addClass("d-none");
  });

  $(".home-items").mouseover(function () {
    $(this).removeClass("d-none");
  });

  $(".home-items").mouseout(function () {
    $(this).addClass("d-none");
  });

  $(".open-shop").mouseover(function (e) {
    e.preventDefault();
    $(".shop-items").removeClass("d-none");
  });

  $(".open-shop").mouseout(function (e) {
    e.preventDefault();
    $(".shop-items").addClass("d-none");
  });

  $(".shop-items").mouseover(function () {
    $(this).removeClass("d-none");
  });

  $(".shop-items").mouseout(function () {
    $(this).addClass("d-none");
  });

  $(".open-search").click(function (e) {
    e.preventDefault();
    $(this).addClass("d-none");
    $(".close-search").removeClass("d-none");
    $(".search-items").removeClass("d-none");
    $("main").addClass("d-none");
    $("footer").addClass("d-none");
  });

  $(".close-search2").click(function (e) {
    e.preventDefault();
    $(".open-search").removeClass("d-none");
    $(".close-search").addClass("d-none");
    $(".search-items").addClass("d-none");
    $("main").removeClass("d-none");
    $("footer").removeClass("d-none");
  });

  //slider section
  const swiper = new Swiper(".slider-swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $("#slider").hover(function () {
    $("#slider .swiper-button-prev").toggleClass("d-none");
    $("#slider .swiper-button-next").toggleClass("d-none");
  });

  //products section

  $(".all-products").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: true,
    // prevArrow: $(".prev"),
    // nextArrow: $(".next"),

    responsive: [
      {
        breakpoint: 1024, // Medium devices (tablets, 768px and up)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // Small devices (landscape phones, 576px and up)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".swinger-container").swinger();

  // Brands Slider part

  $(".all-brands").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
  });

  //products section 2

  $(".all-products-2").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: true,
    // prevArrow: $(".prev-2"),
    // nextArrow: $(".next-2"),

    responsive: [
      {
        breakpoint: 1024, // Medium devices (tablets, 768px and up)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // Small devices (landscape phones, 576px and up)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".product").mouseover(function () {
    let dataId = $(this).data("id");

    $(".product-icons").each(function () {
      if ($(this).data("id") === dataId) {
        $(this).addClass("transform-product-icons");
      }
    });
  });

  $(".product").mouseout(function () {
    let dataId = $(this).data("id");

    $(".product-icons").each(function () {
      if ($(this).data("id") === dataId) {
        $(this).removeClass("transform-product-icons");
      }
    });
  });

  // product detail js

  let product = [];

  $(".product-detail h3").click(function () {
    let productName = $(this).text();
    let productPrice = $(this).next().next().text();
    let productId = $(this).parent().parent().data("id");
    let allImages = $(this).closest(".product").find(".product-images img");
    let productImages = [];
    $(allImages).each(function () {
      var src = $(this).attr("src");

      productImages.push(src);
    });

    product = [];

    product.push({
      id: productId,
      name: productName,
      price: productPrice,
      images: productImages,
    });

    console.log(product);

    localStorage.setItem("product", JSON.stringify(product));
  });

  $(".swinger-container").click(function () {
    let productName = $(this).parent().next().find("h3").text();
    let productPrice = $(this).parent().next().find("span")[2].innerText;
    let productId = $(this).parent().parent().data("id");

    let allImages = $(this).find("img");
    let productImages = [];
    $(allImages).each(function () {
      var src = $(this).attr("src");

      productImages.push(src);

      product = [];

      product.push({
        id: productId,
        name: productName,
        price: productPrice,
        images: productImages,
      });

      console.log(product);

      localStorage.setItem("product", JSON.stringify(product));
    });
  });

  // product detail modal js

  $(".open-modal").click(function (e) {
    e.preventDefault();
    $(".detail-modal").removeClass("d-none");
    $(".modal-overlay").removeClass("d-none");

    let productId = $(this).parent().parent().data("id");
    let productName = $(this).parent().prev().find("h3").text();
    let productPrice = $(this).parent().prev().find("span")[2].innerText;
    let allImages = $(this).closest(".product").find(".product-images img");
    let productImages = [];
    $(allImages).each(function () {
      var src = $(this).attr("src");
      productImages.push(src);
    });

    document.querySelector(".product-name").innerHTML = productName;
    document.querySelector(".price").innerHTML = productPrice;
    let imageContainer = document.querySelector(".product-image");
    let imageContainer2 = document.querySelector(".slider-nav-thumbnails");

    if ($(".product-image").hasClass("slick-initialized")) {
      $(".product-image").slick("unslick");
    }

    if ($(".slider-nav-thumbnails").hasClass("slick-initialized")) {
      $(".slider-nav-thumbnails").slick("unslick");
    }

    $(".product-image").empty();
    $(".slider-nav-thumbnails").empty();

    for (let i = 0; i < productImages.length; i++) {
      let img1 = document.createElement("img");
      img1.src = productImages[i];
      imageContainer.appendChild(img1);

      let img2 = document.createElement("img");
      img2.src = productImages[i];
      imageContainer2.appendChild(img2);
    }

    $(".product-image").slick({
      infinite: true,
      prevArrow: $(".prev"),
      nextArrow: $(".next"),
      asNavFor: ".slider-nav-thumbnails",
    });

    $(".slider-nav-thumbnails").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      focusOnSelect: true,
      asNavFor: ".product-image",
    });
  });

  $(".slider-nav-thumbnails .slick-slide").removeClass("slick-active");

  $(".slider-nav-thumbnails .slick-slide").eq(0).addClass("slick-active");

  $(".slider").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      var mySlideNumber = nextSlide;
      $(".slider-nav-thumbnails .slick-slide").removeClass("slick-active");
      $(".slider-nav-thumbnails .slick-slide")
        .eq(mySlideNumber)
        .addClass("slick-active");
    }
  );

  $(".close-modal").click(function (e) {
    e.preventDefault();
    $(".detail-modal").addClass("d-none");
    $(".modal-overlay").addClass("d-none");
  });

  // wishlist js

  let wishlist = [];

  if (localStorage.getItem("wishlist") != null) {
    wishlist = JSON.parse(localStorage.getItem("wishlist"));
  }

  $(".fa-heart").each(function () {
    let productId = $(this).parent().parent().data("id");
    for (const item of wishlist) {
      if (item.id === productId) {
        $(this).removeClass("fa-regular");
        $(this).addClass("fa-solid");
      }
    }
  });

  $(".heart-icon-count").text(wishlist.length);

  $(".fa-heart").click(function () {
    let productName = $(this).parent().prev().find("h3").text();
    let productImage = $(this)
      .closest(".product")
      .find(".product-images img")[0]
      .getAttribute("src");
    let productPrice = $(this).parent().prev().find("span")[2].innerHTML;

    let year = new Date().getFullYear();
    let month = new Date().toLocaleString("default", { month: "long" });
    let day = new Date().getDate();

    let productDate = month + " " + day + ", " + year;

    let productId = $(this).parent().parent().data("id");

    let existedProduct = wishlist.find((m) => m.id == productId);

    if (existedProduct != undefined) {
      console.log("this product exist");

      Swal.fire({
        position: "top-center",
        icon: "error",
        text: productName + "is already in wishlist",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      wishlist.push({
        id: productId,
        name: productName,
        price: productPrice,
        date: productDate,
        image: productImage,
      });
      $(this).removeClass("fa-regular");
      $(this).addClass("fa-solid");

      Swal.fire({
        position: "top-center",
        icon: "success",
        text: productName + "added to wishlist",
        showConfirmButton: false,
        timer: 2000,
      });
    }
    $(".heart-icon-count").text(wishlist.length);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  });

  // basket js

  let basket = [];

  if (localStorage.getItem("basket") != null) {
    basket = JSON.parse(localStorage.getItem("basket"));
  }

  function basketCount() {
    let basketCount = 0;
    for (const item of basket) {
      basketCount += item.count;
    }
    return basketCount;
  }

  function basketPrice() {
    let price = 0;
    for (const item of basket) {
      price += item.count * item.price;
    }

    return Math.round(price);
  }

  $(".basket-icon span")[1].innerText = basketPrice();
  document.querySelector(".basket-icon-count").innerText = basketCount();

  $(".product .fa-bag-shopping").each(function () {
    let productId = $(this).parent().parent().parent().data("id");
    for (const item of basket) {
      if (item.id === productId) {
        let icon = `<i class="fa-solid fa-check"></i>`;
        $(this).parent().parent().append(icon);
      }
    }
  });

  $(".product .fa-bag-shopping").click(function (e) {
    e.preventDefault();

    let productName = $(this).parent().parent().prev().find("h3").text();
    let productImage = $(this)
      .closest(".product")
      .find(".product-images img")[0]
      .getAttribute("src");
    let productPrice = parseFloat(
      $(this).parent().parent().prev().find("span")[2].innerHTML
    );

    let productId = $(this).parent().parent().parent().data("id");

    let existedProduct = basket.find((m) => m.id == productId);

    if (existedProduct != undefined) {
      existedProduct.count++;
    } else {
      basket.push({
        id: productId,
        name: productName,
        image: productImage,
        price: productPrice,
        count: 1,
      });
      let icon = `<i class="fa-solid fa-check"></i>`;
      $(this).parent().parent().append(icon);
    }

    localStorage.setItem("basket", JSON.stringify(basket));

    document.querySelector(".basket-icon-count").innerText = basketCount();

    Swal.fire({
      position: "top-center",
      icon: "success",
      text: productName + "added to basket",
      showConfirmButton: false,
      timer: 2000,
    });
  });

  // body js
  $($("body")).click(function () {
    if (!$(".social-media-items").hasClass("d-none")) {
      $(".social-media-items").addClass("d-none");
    }

    if (
      !$(".menu-sidebar").hasClass("transform-sidebar") ||
      !$(".social-media-items").hasClass("d-none")
    ) {
      $(".menu-sidebar").addClass("transform-sidebar");
      $(".sidebar-overlay").addClass("d-none");
    }
  });
});
