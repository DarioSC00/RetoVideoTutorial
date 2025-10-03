# Angular Homes App
- Install Angular if you don't have it installed

  `npm install -g @angular/cli`

- Clone this branch to your local machine

  `git clone -b homes-app-start git@github.com:angular/codelabs.git homes-app`

- Once the code has been downloaded

  `cd homes-app`

- Install the depencies

  `npm install` 

- Run the application 

  `ng serve`


  # El componente se declara en si mismo con la propiedad Standalone:true con el decorador @Componet en este caso no necesitamos declara en otro sitio porque ya se autodeclaro y solo se importaria con los imports en donde se vaya a utilizar 

  # Segun el video que vi lo utilizamos en el Housing-location Component para pasar los datos de componente y cumplir con la estructura que estamos usando 

  

  # como en el tutorial se corria el proyecto con el comando "npm run start" funciona bien pero no refleja todo porque en el video tutoral de las solicitudes HTTP se cambio todo entonces toca abrir 2 terminales 


  # Para correr con el comando "npm run star" y la otra para correr el server. se navega por las carpetas hasta llegar a la carpeta: src\app y se ejecuta el comando "json-server --watch db.json" para que refleje toda la informacion