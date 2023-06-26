Proyecto Cypress para Devsu /Cypress project for Devsu

Para este proyecto elegi el ejercicio 2 para E2E testing y el ejercicio 3 para el API testing.
For this project, I chose exercise 2 for E2E testing and exercise 3 for API testing.

Instalación  
Por favor, instala node.js para poder instalar Cypress a través de npm.

Tienes que tener git instalado localmente para poder clonar el repositorio.
Clona el repositorio usando 
``` git clone https://github.com/au-ry/devsu-project.git ```

Navega a la  la carpeta devsu-project

Ya dentro del directorio instala Cypress a través de npm:

```npm install cypress --save-dev```

Esto instalará Cypress localmente como una dependencia de desarrollo para tu proyecto.
Asegúrate de haber ejecutado ```npm init``` o de tener una carpeta ```node_modules``` o un archivo ```package.json``` en la raíz de tu proyecto para asegurarte de que Cypress se instale en el directorio correcto.

Por defecto, las pruebas se ejecutan en modo "headless" (sin interfaz gráfica). Para ejecutar las pruebas en la consola con interfaz gráfica, utiliza los siguientes comandos:

Para el e2e testing ``` npx cypress run --spec cypress/e2e/store-purchase-spec.cy.js --headed```

Para el APi testing ``` npx cypress run --spec cypress/e2e/pet-store-API-spec.cy.js --headed```

Installation 

Please install Node.js in order to install Cypress through npm.

You need to have Git installed locally in order to clone the repository.
Clone the repository using:
```git clone https://github.com/au-ry/devsu-project.git```

Navigate to the devsu-project folder.

Once inside the directory, install Cypress through npm:
```npm install cypress --save-dev```

This will install Cypress locally as a development dependency for your project. Make sure you have run ```npm init``` or have a ```node_modules``` folder or a ```package.json``` file in the root of your project to ensure Cypress is installed in the correct directory.

By default, the tests run in "headless" mode (without a graphical interface). To run the tests on the console with a graphical interface, use the following commands:

For E2E testing:
```npx cypress run --spec cypress/e2e/store-purchase-spec.cy.js --headed```

For API testing:
```npx cypress run --spec cypress/e2e/pet-store-API-spec.cy.js --headed```

Características/Features
En la prueba e2e:
1. Se loguea el usuario.
2. Se agregan 2 productos al carrito. 
3. Se visualiza el carrito. 
4. Se completa el formulario de compra.
5. Se obtiene el mensaje de confirmación "Thank you for your order".

En la prueba API:
1. Se crea un usuario.
2. Se busca el usuario creado.
3. Se actualiza el nombre y el correo del usuario.
4. Se busca el usuario actualizado.
5. Se elimina el usuario.

In the e2e test:

1. The user logs in.
2. Two products are added to the shopping cart.
3. The shopping cart is displayed.
4. The purchase form is completed.
5. The confirmation message "Thank you for your order" is obtained.

In the API test:

1. A user is created.
2. The created user is searched.
3. The name and email of the user are updated.
4. The updated user is searched.
5. The user has been deleted.

Contacto/Contact
*Aury Lopez*
auryc.lopez@gmail.com

 
 






