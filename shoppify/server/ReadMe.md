Debes crear dos endpoints, debes basarte en el contenido del archivo products.json que tienes en este repositorio pero no tienes por qué seguir ese esquema. 
Los endpoints a crear son:
/api/items?q=:query donde :query es la búsqueda que hace el usuario. Debe devolver un JSON con los datos a mostrar en la lista de items.
/api/items/:id, donde :id es el id del producto seleccionado. Debe devolver un JSON con los datos del item seleccionado.