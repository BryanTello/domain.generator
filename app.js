window.onload = function () {
    Domains()
}
function Domains() {


    let primerNombre = ['Bryan', 'Andres'];
    let segundoNombre = ['Tello', 'Toapanta'];
    let extension = ['.com', '.es'];


    let resultDomain = [];

    for (const primer of primerNombre) {
        for (const segundo of segundoNombre) {
            for (const extn of extension) {

                resultDomain.push(primer.concat(segundo, extn))

            }

        }

    }
    console.log(resultDomain); 

}
