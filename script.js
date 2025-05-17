// 「.menu」内LI要素のうち、.sub-menuを子に持っていれば取得
const menuItems = document.querySelectorAll(".menu li:has(> .sub-menu)");

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    // aタグにリンクがある→サブメニューを開くだけなら画面遷移を防止したい
    e.preventDefault();

    // この <li> 内の .sub-menu を取得
    const subMenu = item.querySelector(".sub-menu");
    if (subMenu) {
      // .active クラス→ON/OFFで表示・非表示切り替え
      subMenu.classList.toggle("active");
    }
  });
});
