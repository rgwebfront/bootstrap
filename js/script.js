new WOW({
  animateClass: 'animate__animated',
}).init();

$('.open-popup-link').magnificPopup({
  type: 'inline',
  midClick: true
});

$('.product__image').magnificPopup({
  type: 'image',
});

$('.slider-slick').slick({

  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
});

$('.accordion').accordion({
  collapsible: true,
  active: true,
});







// Для формы внизу страницы сделать валидацию на jQuery:
// - все поля должны быть заполнены
// - в поле индекс можно вводить только цифры
// - индекс должен содержать 6 символов
// Если какое-то из условий не соблюдается - вывести alert с соответствующей ошибкой.
// Если все условия соблюдены, то нужно скрыть форму и показать вместо нее блок с текстом «Спасибо за заказ!»

$('#number').inputmask({ "mask": "9 (999) 999-9999" });


$('#order-form').submit(function (event) {
  event.preventDefault();

  let formValid = true;


  $('#order-form .form-control').each(function () {
    let inputValue = $(this).val().trim();
    let inputId = $(this).attr('id');


    if (inputValue === '') {
      alert("Заполните все поля");
      formValid = false;
      return false;
    }

    if (inputId === 'zip' && inputValue.length !== 6) {
      alert('Индекс должен содержать ровно 6 цифр');
      $(this).val(inputValue.slice(0, 6));
      formValid = false;
      return false;
    }

    if (inputId === 'zip' && isNaN(inputValue)) {
      alert('Индекс должен содержать только цифры');
      formValid = false;
      return false;
    }
  });

  if (formValid) {
    $('#order-form').hide();
    $('#order').text("Спасибо за заказ! Мы свяжемся с вами в ближайшее время!");
  }
});












