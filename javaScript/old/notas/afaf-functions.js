export function categoriaButtonChange() {
    const categoriaButton = document.getElementById('categoria');
    const traerPtalla = document.getElementById('tallas');
    const traerPplanchado = document.getElementById('planchados');
    categoriaButton.addEventListener('change', () => {
        traerPtalla.style.display = traerPplanchado.style.display = 'none';
        traerPtalla.type = '';
        if (categoriaButton.value === 'vestuario') {
            traerPtalla.style.display = 'block';
            traerPplanchado.style.display = 'block';
        } else if (categoriaButton.value === 'calzado') {
            traerPtalla.style.display = 'block';
        }
    });
}

export function addDataStorage(){
    const form = document.querySelector('form');
    const anadirButton = document.querySelector('#anadirButton');
    anadirButton.addEventListener('click', () => {
        const formData = {
            codigo: document.getElementById('codigo').value,
            descripcion: document.getElementById('descripcion').value,
            precioCompra: document.getElementById('precioCompra').value,
            precioVenta: document.getElementById('precioVenta').value,
            cantidadBodega: document.getElementById('cantidadBodega').value,
            cantidadMinimaBodega: document.getElementById('cantidadMinimaBodega').value,
            cantidadMaximaInventario: document.getElementById('cantidadMaximaInventario').value,
            porcentajeDescuento: document.getElementById('porcentajeDescuento').value,
            categoria: document.getElementById('categoria').value,
            talla: document.getElementById('talla').value,
            planchado: document.getElementById('planchado').value,
        };
        localStorage.setItem('formData', JSON.stringify(formData));
        //form.reset();
    }); 
}  

export function returnValues(){
    const data = JSON.parse(localStorage.getItem('formData'));
    document.getElementById('codigo').value = data.codigo;
    document.getElementById('descripcion').value = data.descripcion;
    document.getElementById('precioCompra').value = data.precioCompra;
    document.getElementById('precioVenta').value = data.precioVenta;
    document.getElementById('cantidadBodega').value = data.cantidadBodega;
    document.getElementById('cantidadMinimaBodega').value = data.cantidadMinimaBodega;
    document.getElementById('cantidadMaximaInventario').value = data.cantidadMaximaInventario;
    document.getElementById('porcentajeDescuento').value = data.porcentajeDescuento;
    document.getElementById('categoria').value = data.categoria;
    document.getElementById('talla').value  = data.talla;
    document.getElementById('planchado').value = data.planchado;
}

