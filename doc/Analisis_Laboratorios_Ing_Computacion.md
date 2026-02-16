# Análisis de Requerimientos de Manual de Prácticas Estandarizado

**Programa:** Ingeniería en Computación (Plan 22B) - Universidad de Guadalajara / Centro Universitario UNE
**Objetivo:** Identificar asignaturas susceptibles de estandarización práctica para el aseguramiento de la calidad académica y definición del *Stack Tecnológico Institucional*.

## 1. Resumen Ejecutivo

Del total de asignaturas analizadas en el mapa curricular, se han identificado **23 Unidades de Aprendizaje** que requieren manual de prácticas. Se propone la siguiente división:

* **Laboratorio de Ciencias Básicas y Electrónica (Hardware):** 4 Asignaturas.
* **Laboratorio de Cómputo / Desarrollo de Software:** 15 Asignaturas.
* **Laboratorio de Redes y Arquitectura:** 4 Asignaturas.

## 2. Relación Detallada de Asignaturas por Tipo de Laboratorio

### A. Laboratorio de Ciencias Básicas, Física y Electrónica

*Requieren: Mesas de trabajo, multímetros, osciloscopios, fuentes de poder, componentes electrónicos, equipo de mecánica y óptica.*

| Ciclo | Clave | Asignatura | Hrs Totales | Justificación Práctica |
| :---: | :---: | :--- | :---: | :--- |
| 1º | IL340 | **Fundamentos de Física** | 80 | Mediciones, vectores, cinemática y dinámica básica. |
| 2º | IL343 | **Mecánica** | 80 | Experimentos de fuerzas, movimiento rotacional y energía. |
| 3º | IL346 | **Circuitos Electrónicos y Electromagnetismo** | 80 | Armado de circuitos (RC, RL, RLC), ley de Ohm, Kirchhoff. |
| 3º | IL363 | **Sistemas Digitales** | 80 | Compuertas lógicas, diseño combinacional y secuencial (FPGA/Protoboard). |

### B. Laboratorio de Cómputo y Desarrollo de Software

*Definición de Lenguajes:*
* **Nivel Básico (Ciclos 1-2):** Enfoque en lógica usando **Python** por su baja curva de aprendizaje.
* **Nivel Intermedio/Avanzado (Ciclos 3+):** Enfoque en arquitectura y eficiencia usando **Java y C++**.
* **Web (Ciclo 4+):** Stack moderno (HTML5, CSS3, JS/TS, Frameworks).

| Ciclo | Clave | Asignatura | Hrs Totales | Justificación Práctica y Lenguaje Definido |
| :---: | :---: | :--- | :---: | :--- |
| 1º | 15288 | **Fundamentos de Programación** | 80 | Algoritmos y lógica básica. **Lenguaje: Python**. |
| 2º | IL352 | **Programación Estructurada** | 120 | Modularidad y estructuras de memoria. **Lenguaje: Python (transición a C++).** |
| 3º | 15289 | **Programación Orientada a Objetos** | 80 | POO, Clases, Herencia. **Lenguaje: Java / C++**. |
| 4º | IL348 | **Métodos Numéricos** | 80 | Simulación matemática. **Lenguaje: Python (Librerías NumPy/Pandas).** |
| 4º | IL354 | **Estructuras de Datos** | 120 | Manejo eficiente de memoria. **Lenguaje: C++ / Java.** |
| 4º | IL362 | **Programación para Internet** | 80 | **Stack Web:** HTML5, CSS3, JavaScript, Typescript, Framework Frontend (React/Vue) y Backend (Node.js/Python). |
| 5º | IL355 | **Análisis de Algoritmos** | 80 | Complejidad computacional. **Lenguaje: C++ / Java.** |
| 5º | IL356 | **Bases de Datos** | 120 | SQL Estándar y conexión a lenguajes de alto nivel (**Java/Python**). |
| 5º | IL361 | **Fundamentos de Inteligencia Artificial** | 80 | Redes neuronales. **Lenguaje: Python (TensorFlow/PyTorch).** |
| 6º | IL358 | **Programación de Bajo Nivel** | 80 | Interacción hardware-software. **Lenguaje: Ensamblador y C.** |
| 6º | CB224 | **Ingeniería de Software** | 80 | Gestión del ciclo de vida (ALM). Herramientas: Git, Jira, **Java/C++** para patrones de diseño. |
| 6º | IL367 | **Interacción Humano Computadora** | 80 | UI/UX. **Herramientas:** Figma/Adobe XD e implementación en **Web Stack**. |
| 8º | IL359 | **Compiladores** | 80 | Análisis léxico/sintáctico. **Lenguaje: C++ / Java.** |
| 8º | IL368 | **Seguridad en la Información** | 80 | Scripts de seguridad y pentesting. **Lenguaje: Python / Bash.** |
| 9º | IL360 | **Programación Paralela y Concurrente** | 80 | Hilos y procesos. **Lenguaje: C++ / Java.** |

### C. Laboratorio de Redes, Arquitectura y Sistemas Operativos

*Requieren: Racks, Routers/Switches (físicos o simulados como Packet Tracer), Virtualización, Hardware de desensamble.*

| Ciclo | Clave | Asignatura | Hrs Totales | Justificación Práctica |
| :---: | :---: | :--- | :---: | :--- |
| 4º | IL365 | **Arquitectura de Computadoras** | 80 | Organización del procesador, memorias y buses. |
| 5º | IL364 | **Redes de Computadoras** | 80 | Configuración de LAN/WAN, modelo OSI/TCP-IP. |
| 5º | IL366 | **Sistemas Operativos** | 120 | Gestión de procesos y scripting (**Bash/PowerShell**). |


## 3. Recomendaciones para la Estandarización Tecnológica

   * **1º - 2º Semestre (Fundamentación):** Uso exclusivo de **Python** para asegurar la comprensión lógica sin la complejidad de sintaxis de lenguajes compilados.
   * **3º - 9º Semestre (Profesionalización):** Transición obligatoria a **Java y C++** para el manejo estricto de tipos, memoria y POO.
   * **Desarrollo Web:** Estandarización del stack a tecnologías de mercado actual (ej. **MERN**: Mongo, Express, React, Node).

*Este análisis se basa en el documento "Mapa Curricular Ingeniería en Computación UdeG Plan 22B".*