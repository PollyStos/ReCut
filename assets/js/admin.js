// Pega a parte da URL após a última barra, mas ignora o último segmento
const url = window.location.pathname; // Obtém a parte da URL após o domínio
const segments = url.split('/'); // Divide a URL em segmentos
const lastSegment = segments[segments.length - 2]; // Pega o penúltimo segmento da URL
const lastSegmentCreate = segments[segments.length - 1]; // Pega o último segmento da URL
const formBtn = document.getElementById("form-btn");

let pageForm = document.getElementById("page-form");
let ChangePage;

if (lastSegment === 'view') {
    ChangePage = 'Visualizar';
    let inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].disabled = true;
    }
}

if (lastSegment === 'update') {
    ChangePage = 'Editar';
}

if (lastSegmentCreate === 'create') {
    ChangePage = 'Nova';
}

// Atualiza o conteúdo das labels com id "page-label"
const labels = document.querySelectorAll("#page-label");
labels.forEach(label => {
    label.textContent = `${ChangePage} `;
});

const mobileScreen = window.matchMedia("(max-width: 990px )");
$(document).ready(function () {
    $(".dashboard-nav-dropdown-toggle").click(function () {
        $(this).closest(".dashboard-nav-dropdown")
            .toggleClass("show")
            .find(".dashboard-nav-dropdown")
            .removeClass("show");
        $(this).parent()
            .siblings()
            .removeClass("show");
    });
    $(".menu-toggle").click(function () {
        if (mobileScreen.matches) {
            $(".dashboard-nav").toggleClass("mobile-show");
        } else {
            $(".dashboard").toggleClass("dashboard-compact");
            $(".container").toggleClass("menu-opened");
        }
    });
});