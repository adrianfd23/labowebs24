# Git - Tarea Labowebs

> Adrián Fernández Díaz

[TOC]

## Trabajo en local

Trabajo individual en tu ordenador

### Cuestiones:

1. Inicializa un nuevo repositorio Git en una carpeta llamada "labowebs" y agrega los archivos proporcionados en el aula virtual. Renombra la rama master a main , si es necesario. Realiza el primer commit. Muestra el log del repositorio.

```bash
git init
git branch -M main
git add .
git commit -m "Primer commit"
git log --oneline
```

![image-20241114090307723](./Git-Tarea-Labowebs.assets/image-20241114090307723.png)

![image-20241114090322789](./Git-Tarea-Labowebs.assets/image-20241114090322789.png)

![image-20241114090411798](./Git-Tarea-Labowebs.assets/image-20241114090411798.png)

2. Incluye un fichero .gitignore para que los ficheros README.md , LICENCE.txt y passwords.txt sean ignorados por el control de versiones. Realiza el commit y muestra los logs del repositorio en una línea.

```bash
nano .gitignore
git add .gitignore
git commit -m "Agregar .gitignore"
git log --oneline
```

![image-20241114091026005](./Git-Tarea-Labowebs.assets/image-20241114091026005.png)

![image-20241114091211222](./Git-Tarea-Labowebs.assets/image-20241114091211222.png)

3. En el repositorio, crea los archivos README.md , LICENCE.txt y passwords.txt con algún contenido. Muestra el estado del repositorio. Muestra el listado de archivos ignorados.

```bash
nano README.md
nano LICENCE.md
nano passwords.txt
git status
git status --ignored
```

![image-20241114092146790](./Git-Tarea-Labowebs.assets/image-20241114092146790.png)

![image-20241114092206917](./Git-Tarea-Labowebs.assets/image-20241114092206917.png)

![image-20241114092218429](./Git-Tarea-Labowebs.assets/image-20241114092218429.png)

4. Crea una rama feature-estilos . Cámbiate a ella. 

   - Modifica el archivo estilos.css : 

     - propiedad color del body y de h2 : #2a2a2a 

     - propiedad background-color de header y footer: #2a75ff

     - Comprueba el estado del repositorio. Añade los cambios, realiza un commit con el mensaje "actualizados estilos a azules"

```bash
git branch feature-estilos
git checkout feature-estilos
git status
git add estilos.css
git commit -m "actualizados estilos a azules"
```

![image-20241114092817156](./Git-Tarea-Labowebs.assets/image-20241114092817156.png)

![image-20241114092912428](./Git-Tarea-Labowebs.assets/image-20241114092912428.png)

![image-20241114092947124](./Git-Tarea-Labowebs.assets/image-20241114092947124.png)

![image-20241114093040621](./Git-Tarea-Labowebs.assets/image-20241114093040621.png)

![image-20241114093243997](./Git-Tarea-Labowebs.assets/image-20241114093243997.png)

![image-20241114093254108](./Git-Tarea-Labowebs.assets/image-20241114093254108.png)

![image-20241114093307356](./Git-Tarea-Labowebs.assets/image-20241114093307356.png)

5. Vuelve a la rama main . En el archivo index.html añade un comentario donde se indique tu nombre como autor de la página. Comprueba el estado del repositorio. Añade los cambios, realiza un commit con el mensaje ' añadido autor en index'. Muestra los logs del repositorio en una línea, gráficamente y con 'decoración'

   ```bash
   git checkout main
   git status
   git add index.html
   git commit -m "añadido autor en index"
   git log --oneline --graph --decorate
   ```

   

![image-20241114093551796](./Git-Tarea-Labowebs.assets/image-20241114093551796.png)

![image-20241114093656531](./Git-Tarea-Labowebs.assets/image-20241114093656531.png)

![image-20241114093831901](./Git-Tarea-Labowebs.assets/image-20241114093831901.png)

![image-20241114093845268](./Git-Tarea-Labowebs.assets/image-20241114093845268.png)

6. Fusiona la rama feature-estilos en la rama main . Muestra los logs del repositorio en una línea, gráficamente y con 'decoración'

   ```bash
   git merge feature-estilos
   git log --oneline --graph --decorate
   ```

   

![image-20241114094144581](./Git-Tarea-Labowebs.assets/image-20241114094144581.png)

## Trabajo en remoto

Esta parte se realizará con la herramienta gráfica Sourcetree y con GitHub .

### Cuestiones:

1. Continúa con el repositorio labowebs . Añade el repositorio a Sourcetree

![image-20241114095117989](./Git-Tarea-Labowebs.assets/image-20241114095117989.png)

2. Crea un repositorio remoto y sube al remoto los ficheros de tu repositorio local. Debes
    subir todas las ramas.

  ![image-20241114095742668](./Git-Tarea-Labowebs.assets/image-20241114095742668.png)

![image-20241114100024332](./Git-Tarea-Labowebs.assets/image-20241114100024332.png)

![image-20241114100348751](./Git-Tarea-Labowebs.assets/image-20241114100348751.png)

![image-20241114100433844](./Git-Tarea-Labowebs.assets/image-20241114100433844.png)

![image-20241114100629779](./Git-Tarea-Labowebs.assets/image-20241114100629779.png)

3. Crea una rama feature-index . Añade el siguiente código dentro de la <section class="about"> . Añade los cambios y crea un commit. Sube los cambios al remoto.

   ![image-20241114101041672](./Git-Tarea-Labowebs.assets/image-20241114101041672.png)

![image-20241114101003331](./Git-Tarea-Labowebs.assets/image-20241114101003331.png)

![image-20241114101157215](./Git-Tarea-Labowebs.assets/image-20241114101157215.png)

![image-20241114101434292](./Git-Tarea-Labowebs.assets/image-20241114101434292.png)

![image-20241114101627574](./Git-Tarea-Labowebs.assets/image-20241114101627574.png)

![image-20241114101707676](./Git-Tarea-Labowebs.assets/image-20241114101707676.png)

![image-20241114101735491](./Git-Tarea-Labowebs.assets/image-20241114101735491.png)

4. En el repositorio local, fusiona la rama feature-index en la rama main .

   ![image-20241122093304910](./Git-Tarea-Labowebs.assets/image-20241122093304910.png)

![image-20241122093451626](./Git-Tarea-Labowebs.assets/image-20241122093451626.png)

5. Edita el fichero contacto.html . Borra unas líneas. Muestra los ficheros con cambios pendientes y las diferencias. Añade los cambios y haz un commit.

   ![image-20241122093800333](./Git-Tarea-Labowebs.assets/image-20241122093800333.png)

![image-20241122093918112](./Git-Tarea-Labowebs.assets/image-20241122093918112.png)

6.Te das cuenta del error. Deshaz el commit anterior. Captura el estado actual del repositorio.

![image-20241122094146947](./Git-Tarea-Labowebs.assets/image-20241122094146947.png)

![image-20241122094212851](./Git-Tarea-Labowebs.assets/image-20241122094212851.png)

![image-20241122094339532](./Git-Tarea-Labowebs.assets/image-20241122094339532.png)

7. Crea una rama feature-mapa . Incluye este código en el archivo contacto.html . Añade los cambios. Realiza un commit. Sube los cambios al remoto. Muestra en el remoto los cambios del archivo contacto.html en la rama feature-mapa .

![image-20241122094630220](./Git-Tarea-Labowebs.assets/image-20241122094630220.png)

![image-20241122094744028](./Git-Tarea-Labowebs.assets/image-20241122094744028.png)

![image-20241122094812819](./Git-Tarea-Labowebs.assets/image-20241122094812819.png)

![image-20241122094826107](./Git-Tarea-Labowebs.assets/image-20241122094826107.png)

![image-20241122094922556](./Git-Tarea-Labowebs.assets/image-20241122094922556.png)

![image-20241122095002517](./Git-Tarea-Labowebs.assets/image-20241122095002517.png)

![image-20241122095040099](./Git-Tarea-Labowebs.assets/image-20241122095040099.png)

![image-20241122095147573](./Git-Tarea-Labowebs.assets/image-20241122095147573.png)

8. En GitHub, en la rama main , fusiona la rama feature-mapa . Baja los cambios del remoto a local. Deja los dos repositorios sincronizados.

![image-20241122095340869](./Git-Tarea-Labowebs.assets/image-20241122095340869.png)

![image-20241122095545200](./Git-Tarea-Labowebs.assets/image-20241122095545200.png)

![image-20241122095655667](./Git-Tarea-Labowebs.assets/image-20241122095655667.png)

![image-20241122095720301](./Git-Tarea-Labowebs.assets/image-20241122095720301.png)

## Conflictos

### Cuestiones:

1. Crea una rama hotfix-js . Cámbiate a ella. Añade este código en el fichero script.js . Confirma el cambio y haz un commit. (Fíjate en los números de línea...)

![image-20241122100035289](./Git-Tarea-Labowebs.assets/image-20241122100035289.png)

![image-20241122100259674](./Git-Tarea-Labowebs.assets/image-20241122100259674.png)

![image-20241122100330096](./Git-Tarea-Labowebs.assets/image-20241122100330096.png)

![image-20241122100401325](./Git-Tarea-Labowebs.assets/image-20241122100401325.png)

![image-20241122100428479](./Git-Tarea-Labowebs.assets/image-20241122100428479.png)

![image-20241122100457713](./Git-Tarea-Labowebs.assets/image-20241122100457713.png)

![image-20241122100801610](./Git-Tarea-Labowebs.assets/image-20241122100801610.png)

![image-20241122100826963](./Git-Tarea-Labowebs.assets/image-20241122100826963.png)

![image-20241122100848243](./Git-Tarea-Labowebs.assets/image-20241122100848243.png)

![image-20241122100916200](./Git-Tarea-Labowebs.assets/image-20241122100916200.png)

![image-20241122100953155](./Git-Tarea-Labowebs.assets/image-20241122100953155.png)

![image-20241122101008347](./Git-Tarea-Labowebs.assets/image-20241122101008347.png)

3. Fusiona la rama hotfix-js en main . Debe producirse un conflicto. Resuélvelo. Cuando termines la resolución del conflicto sube los cambios al remoto - Deja los repositorios sincronizados

![image-20241122101211000](./Git-Tarea-Labowebs.assets/image-20241122101211000.png)

![image-20241122101356771](./Git-Tarea-Labowebs.assets/image-20241122101356771.png)

Al hacer el merge crea un conflicto. Para solucionarlo fusionamos los dos codigos

![image-20241122101753571](./Git-Tarea-Labowebs.assets/image-20241122101753571.png)

Fusionamos las ramas y subimos a local y después a remoto.

![image-20241122101839898](./Git-Tarea-Labowebs.assets/image-20241122101839898.png)

![image-20241122102034870](./Git-Tarea-Labowebs.assets/image-20241122102034870.png)

![image-20241122102124181](./Git-Tarea-Labowebs.assets/image-20241122102124181.png)

Aqui dejo la url de mi repositorio remoto:

https://github.com/adrianfd23/labowebs24.git
