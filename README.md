# TallerExpressJorgeLorduy

> .[!IMPORTANT].
> Necesario ejecutar el comando para instalar express : npm i express


>
> debe ejecutar para el resto de dependecias :
> npm install --save-dev nodemon (permite ver las actualizaciones en tiempo real)
> npm install dotenv (permite manejar variables de entorno)
> npm install mongoose (manejo de mongoDB)
> npm i corse (permite el ingreso de usuarios autorizados)
> npm i morgan (permite ver y controlar la traza de las peticiones hechas al servidor)

> .[!WARNING].
> Recuerde agregar url de la base de datos y el puerto en su archivo de variables de entorno para el funcionamiento correcto

> .[!TIP].
> Rutas del api (metodo GET):
>
> Tiendas
>
> "api/tiendas/all" : visualizar todas las tiendas
> "api/tiendas/nombre/{nombre de la tienda}" : encontrar tiendas por sus nombres
> "api/tiendas/direccion/{direccion de la tienda}" : encontrar tiendas por sus direcciones
>
> Empleados
>
> "api/empleados/all": visualizar todos los empleados
> "api/empleados/cargo/{cargo del empleado}": encontrar empleados por su cargo
> "api/empleados/salario/{salario del empleado}": encontrar empleados por su salario
>
> Proveedores
>
> "api/proveedores/all": visualizar todos los proveedores
> "api/proveedores/nombre/{nombre del proveedor}": encontrar proveedores por su nombre
> "api/proveedores/marcasSuministradas/{marca suministrada}": encontrar proveedores que suministran una marca específica
> "api/proveedores/horasEntrega/{hora de entrega formato(00:00)}": encontrar proveedores por su hora de entrega
>
> Promociones
>
> "api/promociones/all": visualizar todas las promociones
> "api/promociones/marca/{marca}": encontrar promociones por marca
> "api/promociones/supermercados/{linea de supermercados}": encontrar promociones por línea de supermercados
>
> Productos
>
> "api/productos/all": visualizar todos los productos
> "api/productos/marca/{marca}": encontrar productos por marca
> "api/productos/tipo/{tipo}": encontrar productos por tipo

> .[!NOTE].
>
> Para mandar informacion a la base de dato (metodo POST), usar el enrutador principal de la categoria + "create" para mandar un unico item y "createAll" para enviar mayor cantidad de items
> Ejemplo "api/tiendas/create" , "api/tiendas/createAll"
