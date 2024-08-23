var arr=  {
    "informacion_personal": {
    "nombre": "Juan Pérez",
    "edad": 30,
    "direccion": {
    "calle": "Calle Principal",
    "numero": 123,
    "ciudad": "Ciudad Ejemplo"
    },
    "contacto": {
    "correo": "juan.perez@example.com",
    "telefono": "+123456789"
    }
    },
    "historial_educativo": [
    {
    "nivel": "Secundaria",
    "institucion": "Instituto Secundario",
    "anio_inicio": 2000,
    "anio_fin": 2005
    },
    {
    "nivel": "Universidad",
    "institucion": "Universidad Ejemplar",
    "titulo": "Licenciatura en Ciencias",
    "anio_inicio": 2006,
    "anio_fin": 2010
    }
    ],
    "experiencia_laboral": [
    {
    "puesto": "Desarrollador de Software",
    "empresa": "Tech Solutions",
    "periodo": "2010-2015",
    "responsabilidades": [
    "Desarrollo de aplicaciones web",
    "Mantenimiento de bases de datos"
    ]
    },
    {
    "puesto": "Gerente de Proyectos",
    "empresa": "Proyectos Avanzados",
    "periodo": "2016-actualidad",
    "responsabilidades": [
    "Planificación y supervisión de proyectos",
    "Coordinación de equipos"
    ]
    }
    ]
};

var booleano= true
while (booleano){
    console.log("----------------------");
    console.log("BIENVENIDO AL PROGRAMA");
    console.log("----------------------");
    console.log("");
    console.log("QUE OPCION DESEA REALIZAR");
    console.log("1. CREAR");
    console.log("2. ELIMINAR");
    console.log("3. ACTUALIZAR");
    console.log("4. LEER");
    console.log("5. finalizar");
    var opcion=prompt();
        if (opcion=="1"){
            console.clear()
            console.log("--------------------------------");
            console.log("BIENVENIDO A LA SECCION DE CREAR"); 
            console.log("--------------------------------");
            console.log("")
            console.log("QUE DESEAS CREAR");
            console.log("1. historial educativo");
            console.log("2. experiencia laboral");
            var DeseaCrear= prompt(""); 
            if (DeseaCrear=="1"){
                console.log("");
                console.log("------------------------------");
                console.log("SECCION DE HISTORIAL EDUCATIVO");
                console.log("------------------------------");

                var nivel= prompt("DE QUE NIVEL FUE LO QUE ESTUDIASTE: ");
                var institucion= prompt("EN QUE INSTITUCION ESTUDIASTE: ");
                var titulo= prompt("QUE TITULO OBTUVISTE: ");
                var inicio= prompt("AÑO DE INICIO: ");
                var fin= prompt("EN QUE AÑO FINALIZO: ");
                var guardado={    
                    "nivel": nivel,
                    "institucion": institucion,
                    "anio_inicio": inicio,
                    "anio_fin": fin
                };
                arr["historial_educativo"].push(guardado);
                for (var i of arr["historial_educativo"]){
                    console.log("NIVEL:",i["nivel"]);
                    console.log("institucion",i["institucion"]);
                    console.log("anio_inicio: ",i["anio_inicio"]);
                    console.log("AÑO DE FINALIZACION",i["anio_fin"]);
                    console.log("");
                };
                };
            if (DeseaCrear=="2"){
                console.clear()
                console.log("")
                console.log("------------------------------");
                console.log("SECCION DE EXPERIENCIA LABORAL");
                console.log("------------------------------");

                var puesto= prompt("INGRESE QUE PUESTO TUVO:")
                var empresa= prompt("INGRESE EN QUE EMPRESA TRABAJO:");
                var periodo= prompt("INGRESE CUANTO TIEMPO ESTUVO:");

                console.log("AHORA INGRESAREMOS QUE RESPONSABILIDADES TENIA");
                var responsabilidades= prompt("-");
                var guardado2={
                    "puesto": puesto,
                    "empresa": empresa,
                    "periodo": periodo,
                    "responsabilidades":responsabilidades
                };
                arr["experiencia_laboral"].push(guardado2);
                for (var i of arr["experiencia_laboral"]){
                    console.log("puesto:",i["puesto"]);
                    console.log("empresa",i["empresa"]);
                    console.log("periodo: ",i["periodo"]);
                    console.log("responsabilidades",i["responsabilidades"]);
                    console.log("");
                };
                };
        };
        if (opcion=="2"){
            console.clear();
            console.log("-----------------------------------");
            console.log("BIENVENIDO A LA SECCION DE ELIMINAR");
            console.log("-----------------------------------");
            console.log("");
            console.log("QUE DESEA ELIMINAR");
            console.log("1. HISTORIAL EDUCATIVO");
            console.log("2. EXPERIENCIA LABORAL");

            var DeseaEliminar= prompt("");
           if (DeseaEliminar=="1"){
                console.clear()
                console.log("----------------------------");
                console.log("ELIMINAR HISTORIAL EDUCATIVO");
                console.log("----------------------------");
                let contador=1
                for (var i of arr["historial_educativo"]){
                    console.log(contador)
                    contador= contador+1
                    console.log("NIVEL:",i["nivel"]);
                    console.log("institucion",i["institucion"]);
                    console.log("anio_inicio: ",i["anio_inicio"]);
                    console.log("AÑO DE FINALIZACION",i["anio_fin"]);
                    console.log("");
                };
                var escoge=prompt("INGRESE EL ID DEL QUE DESEA ELIMINAR:");
                arr["historial_educativo"].splice(escoge-1,1);
                console.clear();
                for (var i of arr["historial_educativo"]){
                    console.log("NIVEL:",i["nivel"]);
                    console.log("institucion",i["institucion"]);
                    console.log("ani o_inicio: ",i["anio_inicio"]);
                    console.log("AÑO DE FINALIZACION",i["anio_fin"]);
                    console.log("");
                };
                };
            if (DeseaEliminar=="2"){
                console.log("")
                console.log("-------------------------------");
                console.log("ELIMINAR EN EXPERIENCIA LABORAL");
                console.log("-------------------------------");
                let contador=1
                for (var i of arr["experiencia_laboral"]){
                    console.log(contador)
                    contador= contador+1
                    console.log("PUESTO:",i["puesto"]);
                    console.log("EMPRESA",i["empresa"]);
                    console.log("PERIODO: ",i["periodo"]);
                    console.log("RESPONSABILIDADES",i["responsabilidades"]);
                };
                var escoge=prompt("INGRESE EL ID DEL QUE DESEA ELIMINAR:");
                arr["experiencia_laboral"].splice(escoge-1,1);
                console.clear();
                for (var i of arr["experiencia_laboral"]){
                    console.log("PUESTO:",i["puesto"]);
                    console.log("EMPRESA",i["empresa"]);
                    console.log("PERIODO: ",i["periodo"]);
                    console.log("RESPONSABILIDADES",i["responsabilidades"]);
                };
            };
        };
        if (opcion=="3"){
            console.clear();
            console.log("-------------------------------------");
            console.log("BIENVENIDO A LA SECCION DE ACTUALIZAR");
            console.log("-------------------------------------");
            console.log("");
            console.log("NOMBRE:",arr["informacion_personal"]["nombre"]);
            console.log("EDAD:",arr["informacion_personal"]["edad"]);
            console.log("")
            console.log("1. NOMBRE");
            console.log("2. EDAD");

            var cualHistorial=prompt("ENTRE LAS OPCIONES CUAL DESEA ACTUALIZAR")
            if (cualHistorial=="1"){
                console.log("");
                console.log("-----------------");
                console.log("ACTUALIZAR NOMBRE");
                console.log("-----------------");
                var nuevoNombre=prompt("INGRESA EL NUEVO NOMBRE")
                arr["informacion_personal"]["nombre"]=nuevoNombre
            if (cualHistorial=="2"){
                console.log("");
                console.log("----------------");
                console.log("ACTUALIZAR EDAD");
                console.log("----------------");
                var nuevaEdad=prompt("INGRESA LA NUEVO EDAD")
                arr["informacion_personal"]["edad"]=nuevaEdad
            };
            console.log("");
            console.log("NOMBRE:",arr["informacion_personal"]["nombre"]);
            console.log("EDAD:",arr["informacion_personal"]["edad"]);
            console.log("")
            };
        };
        if (opcion=="4"){
            console.clear();
            console.log("--------------------------------");
            console.log("BIENVENIDO A LA SECCION DE REVISAR"); 
            console.log("--------------------------------");
            console.log("");
            console.log("QUE DESEAS REVISAR");
            console.log("1. informacion personal");
            console.log("2. historial educativo");
            console.log("3. experiencia laboral");
            var DeseaRevisar= prompt("");
            if (DeseaRevisar=="1"){
                console.clear();
                console.log("");
                console.log("--------------------");
                console.log("INFORMACION PERSONAL");
                console.log("--------------------");
                console.log("");

                console.log("NOMBRE:",arr["informacion_personal"]["nombre"]);
                console.log("EDAD:",arr["informacion_personal"]["edad"]);
                console.log("DIRECCION:",arr["informacion_personal"]["direccion"]);
            };
            if (DeseaRevisar=="2"){
                console.log("");
                console.log("-------------------");
                console.log("HISTORIAL EDUCATIVO");
                console.log("-------------------");
                console.log("");

                for (var i of arr["historial_educativo"]){
                    console.log("");
                    console.log("NIVEl:",i["nivel"]);
                    console.log("INSTITUCION:",i["institucion"]);
                    console.log("TITULO:",i["titulo"]);
                    console.log("AÑO DE INICIO:",i["anio_inicio"]);
                    console.log("AÑO DE FIN:",i["anio_fin"]);
                    console.log("");
                };
            };
            if (DeseaRevisar=="3"){
                console.log("");
                console.log("-------------------");
                console.log("EXPERIENCIA LABORAL");
                console.log("-------------------");
                console.log("");

                for (var i of arr["experiencia_laboral"]){
                    console.log("");
                    console.log("PUESTO:",i["puesto"]);
                    console.log("EMPRESA:",i["empresa"]);
                    console.log("PERIODO:",i["periodo"]);
                    console.log("RESPONSABILIDADES:",i["responsabilidades"]);
                    console.log("");
                };
            };
        };
        if (opcion=="5"){
            console.log("gracias por usar el programa");
            var booleano=false
        };
};