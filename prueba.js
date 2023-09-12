public class AgregarElementoAlPrincipio {
    
        // Crear un array de ejemplo
        int[] miArray = {2, 3, 4, 5};

        // Elemento que queremos agregar al principio
        int nuevoElemento = 1;

        // Crear un nuevo array con un tamaño mayor
        int nuevoTamano = miArray.length + 1;
        int[] nuevoArray = new int[nuevoTamano];

        // Copiar los elementos del array original al nuevo array desplazándolos hacia la derecha
        for (int i = 0; i < miArray.length; i++) {
            nuevoArray[i + 1] = miArray[i];
        }

        // Asignar el nuevo elemento al primer índice del nuevo array
        nuevoArray[0] = nuevoElemento;

        // El nuevo array ahora contiene el elemento agregado al principio
        miArray = nuevoArray;

        // Imprimir el array modificado
        for (int i = 0; i < miArray.length; i++) {
            System.out.print(miArray[i] + " ");
        }
    }
}
