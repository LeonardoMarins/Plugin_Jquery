$(document).ready(function () {
    $('#carrosel-imagem').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle();
    })

    $('#campo-telefone').mask('(00) 00000-0000');

    $('form').validate({ // esse validate trabalha com campo name no html
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoInteresse: {
                required: false
            }

        },
        messages: {
            nome:"por favor insira seu nome",
            email:"por favor insira seu e-mail",
            telefone:"por favor insira seu telefone",
            mensagem:"por favor insira sua mensagem"
        },
        submitHandler: function (form) {
            form.submit();
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos);
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} para preencher`);
            }
        }

    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();
        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top // o quao distante esse elemento esta do topo quando clicar no button
            // tenho interresse vai levar ate o formulario de contato
        },1000)
    })
})