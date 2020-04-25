let img = <img className="logo" src="images/Logo.png"></img>;
let h1 = <h1>we are social</h1>
let icons =
<div className="iconContainer">
<a href="#"><i className="fab fa-facebook-f"></i></a>
<a href="#"><i className="fab fa-twitter"></i></a>
<a href="#"><i className="fab fa-google-plus-g"></i></a>
<a href="#"><i className="fas fa-basketball-ball"></i></a>
</div>
let create = 
<div className="copyright">
© 2014 - <span>Kasper</span> All Right Reserved
</div>

// =======================Page======================================================
let page =
<div className="page">
<div className="container">
{img}
{h1}
{icons}
{create}
</div>
</div>

ReactDOM.render(page, document.getElementById("root"));
