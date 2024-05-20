**PRIMERAS PRUEBAS DE API EN NODE.JS**

Nueva rama para hacer pruebas. El proyecto usa una arquitectura de 3 capas para la estructura de carpetas, express como framework, base de datos MySQL

**COMUNICAIÓN DE MÓDULOS EN ARQUITECTURA DE 3 CAPAS**

1. Controladores (Controllers): Los controladores son responsables de manejar las solicitudes HTTP, interactuar con los modelos y devolver las respuestas HTTP adecuadas. Su función principal es recibir las solicitudes del cliente, validar los datos de entrada, llamar a los servicios correspondientes y enviar la respuesta al cliente.
2. Servicios (Services): Los servicios contienen la lógica de negocio de la aplicación. Son responsables de realizar operaciones complejas, como la validación de datos, el procesamiento de información y la coordinación de las operaciones entre los modelos. Los servicios encapsulan la lógica de negocio para mantener los controladores simples y centrados en las interacciones HTTP.
3. Modelos (Models): Los modelos representan la capa de acceso a datos de la aplicación. Son responsables de interactuar con la base de datos para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) y recuperar o almacenar información. Los modelos traducen las operaciones de la base de datos a objetos de JavaScript y viceversa.

   El orden de ejecución típico en una solicitud HTTP sería el siguiente:

   1. El controlador recibe la solicitud HTTP y extrae los datos necesarios de la solicitud.
   2. El controlador valida los datos de entrada y realiza cualquier procesamiento adicional necesario.
   3. El controlador llama al servicio correspondiente, pasando los datos de entrada y cualquier contexto adicional.
   4. El servicio realiza la lógica de negocio necesaria, coordinando la interacción con los modelos según sea necesario.
   5. Los modelos interactúan con la base de datos para realizar operaciones CRUD o recuperar información.
   6. Los modelos devuelven los resultados al servicio.
   7. El servicio procesa los resultados y devuelve la respuesta al controlador.
   8. El controlador formatea la respuesta HTTP y la envía al cliente.

   Este flujo garantiza una separación clara de responsabilidades y promueve la reutilización del código al permitir que los controladores, servicios y modelos sean independientes unos de otros. Además, facilita la mantenibilidad y la escalabilidad de la aplicación al hacer que cada componente sea más fácil de entender y modificar por separado

**CONFIGURACIÓN DE BASE DE DATOS MYSQL**

Crear archivo .env en la raiz del proyecto y crear las variables de entorno necesarias para conectar con la base de datos, ejemplo con datos por default de MySQL:

	HOST = '127.0.0.1'
	USER = 'root'
	PASSWORD = ''
	DB_PORT = '3306'
	DATABASE = '*nombre de la base de datos*'
