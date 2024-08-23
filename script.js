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
            console.log("1. historial educativo");
            console.log("2. experiencia laboral");
            var Queopcion=prompt();
            if (Queopcion=="1"){
                console.clear();
                console.log("------------------------------");
                console.log("SECCION DE HISTORIAL EDUCATIVO");
                console.log("------------------------------");
                console.log("");
                
                console.log("QUE DESEA ELIMINAR");
                console.log("1. NIVEL");
                console.log("2. INSTITUCION");
                console.log("3. TITULO");
                console.log("4. AÑO DE INICIO");
                console.log("5. AÑO DE FINALIZACION");
                var eli=prompt(":");
                if (eli=="1"){
                    console.clear();
                    console.log("--------------");
                    console.log("ELIMINAR NIVEL");
                    console.log("--------------");
                    console.log("");
                };
                if (eli=="2"){
                    console.clear();
                    console.log("--------------------");
                    console.log("ELIMINAR INSTITUCION");
                    console.log("--------------------");
                    console.log("");

                };
                if (eli=="3"){
                    console.clear();
                    console.log("---------------");
                    console.log("ELIMINAR TITULO");
                    console.log("---------------");
                    console.log("");
                };
                if (eli=="4"){
                    console.clear();
                    console.log("----------------------");
                    console.log("ELIMINAR AÑO DE INICIO");
                    console.log("----------------------");
                    console.log("");
                };
                if (eli=="5"){
                    console.clear();
                    console.log("----------------------------");
                    console.log("ELIMINAR AÑO DE FINALIZACION");
                    console.log("----------------------------");
                    console.log("");
                }
            };
            if (Queopcion=="2"){
                console.clear();
                console.log("------------------------------");
                console.log("SECCION DE EXPERIENCIA LABORAL");
                console.log("------------------------------");
                console.log("");

                console.log("QUE DESEA ELIMINAR");
                console.log("1. PUESTO");
                console.log("2. EMPRESA");
                console.log("3. PERIODO");
                console.log("4. RESPONSABILIDADES");
                var elimiExperiencia=prompt("");
                if (elimiExperiencia=="1"){
                    console.clear();
                    console.log("---------------");
                    console.log("ELIMINAR PUESTO");
                    console.log("---------------");
                    console.log("");
                };
                if (elimiExperiencia=="2"){
                    console.clear();
                    console.log("----------------");
                    console.log("ELIMINAR EMPRESA");
                    console.log("----------------");
                    console.log("");
                };
                if (elimiExperiencia=="3"){
                    console.clear();
                    console.log("----------------");
                    console.log("ELIMINAR PERIODO");
                    console.log("----------------");
                    console.log("");
                };
                if (elimiExperiencia=="4"){
                    console.clear();
                    console.log("--------------------------");
                    console.log("ELIMINAR RESPONSABILIDADES");
                    console.log("--------------------------");
                    console.log("");
                };
            }
        };
        var booleano= false
};