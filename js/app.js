let body = document.querySelector('body');
body.onclick = function (e) {
    history.style.display = 'none';
}

let login_navs = document.querySelectorAll('.header__navbar--loged-in');
console.log(login_navs);
console.log(login_navs[0]);
console.log(login_navs[1]);

let user_nav = document.querySelector('.header__navbar-user');
console.info(user_nav);

let user_menus = document.querySelector('.header__navbar-user-menu');
console.info(user_menus);

let notify_content = document.querySelector('.header__notify-extend');
let cart_content = document.querySelector('.header__cart-extend');
let cart_badge = document.querySelector('.header__cart-badge');

console.log(notify_content);

login_navs[1].onclick = function (e) {

    login_navs[0].style.display = 'none';
    login_navs[1].style.display = 'none';
    user_nav.style.display = 'inherit';

    notify_content.classList.remove('header__notify--no-notify');
    cart_content.classList.remove('header__cart--no-cart');
    cart_badge.style.display = 'initial';
};

user_menus.children[3].addEventListener('click', function (e) {
    e.preventDefault();

    login_navs[0].style.display = 'inherit';
    login_navs[1].style.display = 'inherit';
    user_nav.style.display = 'none';

    notify_content.classList.add('header__notify--no-notify');
    cart_content.classList.add('header__cart--no-cart');
    cart_badge.style.display = 'none';

});

// Click header-search Select
let select = document.querySelector('.header__search-select');
let select_label = select.querySelector('.header__search-select-label');
let options = document.querySelectorAll('.header__search-option-item');
console.log(select_label);
console.log(options);

options.forEach(function (option) {
    option.onclick = function (e) {

        // huỷ active
        options.forEach(function (option) {
            option.classList.remove('header__search-option-item--active');
        })

        let option_label = this.querySelector('span');
        select_label.innerText = option_label.innerText;
        this.classList.add('header__search-option-item--active');
    }
});

// Focus input-search
let input = document.querySelector('.header__search-input');
let history = document.querySelector('.header__search-history');
let history_items = document.querySelectorAll('.header_search-history-item');

console.log(input)
console.log(history_items);

input.onclick = function (e) {
    e.stopPropagation();
    e.preventDefault();
    history.style.display = 'block';
}

history_items.forEach(function (item) {
    item.onclick = function (e) {
        console.log(this);
        let content_item = this.querySelector('a');
        input.value = content_item.innerText;
        history.style.display = 'none';

    }
})

// Click trái tim
let hearts = document.querySelectorAll('.product__list-item__heart');
// console.log(hearts);

hearts.forEach(function (heart) {
    heart.onclick = function (e) {
        e.preventDefault();
        this.classList.toggle('product__list-item__heart--active')
    }
});

let quickAdds = document.querySelectorAll('.product__info__more-series__list-item__quick-add-box');
let cart_list = document.querySelector('.header__cart-list');
quickAdds.forEach(function (add) {
    add.onclick = function (e) {
        e.preventDefault();
        cart_badge.innerText = Number.parseInt(cart_badge.innerText) + 1;
        console.log('click add');

        let book_item =
        `
        <li class="header__cart-item">
            <img src="/bookstore-online/assets/images/template/cart-3.jpg" alt=""
                class="header__cart-item-img">
            <div class="header__cart-item-info">
                <div class="header__cart-item-head">
                    <a href="" class="header__cart-item-name text-ellipsis-line-2">My
                        Hero Academia, Vol. 11</a>
                    <div class="header__cart-item-price-wrap">
                        <span class="header__cart-item-price">$10</span>
                        <span class="header__cart-item-multiply">x</span>
                        <span class="header__cart-item-qnt">1</span>
                    </div>
                </div>
                <div class="header__cart-item-body">
                    <a href=""
                        class="header__cart-item-author text-ellipsis-line-1">Kohei
                        Horikoshi</a>
                    <span class="header__cart-item-remove">Remove</span>
                </div>
            </div>
        </li>
        `;
        cart_list.insertAdjacentHTML('beforeend', book_item);
    }
});